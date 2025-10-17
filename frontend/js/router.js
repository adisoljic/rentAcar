// router.js - simple file-based hash router
(function(){
  async function loadView(viewPath) {
    const app = document.getElementById('app');
    if (!app) return console.error('#app not found');

    try {
      const resp = await fetch(viewPath, { cache: 'no-store' });
      if (!resp.ok) {
        app.innerHTML = `<div class="alert alert-danger">Failed to load ${viewPath} (${resp.status})</div>`;
        return;
      }
      const html = await resp.text();
      app.innerHTML = html;

      // run inline <script> tags contained in the fragment
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      tmp.querySelectorAll('script').forEach(old => {
        const s = document.createElement('script');
        if (old.src) s.src = old.src;
        else s.textContent = old.textContent;
        document.body.appendChild(s);
        document.body.removeChild(s);
      });

      // update nav (auth state)
      if (window.auth && auth.applyNavState) auth.applyNavState();

    } catch (err) {
      app.innerHTML = `<div class="alert alert-danger">Error loading view: ${err.message}</div>`;
    }
  }

  function getRoute() {
    const hash = location.hash || '#/home';
    return hash.replace(/^#\/?/, '') || 'home';
  }

  async function onHashChange(){
    const route = getRoute();
    const viewFile = `views/${route}.html`;
    await loadView(viewFile);
    // optional hook
    if (window.onRouteLoaded) window.onRouteLoaded(route);
  }

  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('DOMContentLoaded', onHashChange);
})();
