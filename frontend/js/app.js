// app.js - global behaviors for Milestone 1
window.onRouteLoaded = function(route) {
  // highlight active nav
  document.querySelectorAll('#navMain .nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#/' + route);
  });
};
