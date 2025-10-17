// Define routes (hash => file path)
const routes = {
  '/': 'views/home.html',
  '/home': 'views/home.html',
  '/cars': 'views/cars.html',
  '/dashboard': 'views/dashboard.html',
  '/login': 'views/login.html',
  '/register': 'views/register.html'
};

// Function to load HTML file and inject into #app
async function loadView(path) {
  const viewFile = routes[path] || 'views/404.html';
  try {
    const response = await fetch(viewFile);
    if (!response.ok) throw new Error('View not found');
    const html = await response.text();
    document.getElementById('app').innerHTML = html;
  } catch (err) {
    document.getElementById('app').innerHTML = '<h2>Error loading view</h2>';
    console.error(err);
  }
}

// Function that runs when hash changes
function onHashChange() {
  const hash = location.hash.replace(/^#/, '') || '/';
  loadView(hash);
}

// Listen to changes
window.addEventListener('hashchange', onHashChange);
window.addEventListener('load', onHashChange);
