// auth.js - very small mock authentication for Milestone 1
window.auth = {
  isAuthenticated() {
    return !!localStorage.getItem('mock_token');
  },
  loginDemo(email) {
    // create a demo token and store
    localStorage.setItem('mock_token', btoa(email + ':' + Date.now()));
    localStorage.setItem('mock_user_email', email);
  },
  logout() {
    localStorage.removeItem('mock_token');
    localStorage.removeItem('mock_user_email');
  },
  currentUserEmail() {
    return localStorage.getItem('mock_user_email') || null;
  },
  // simple helper to update nav UI
  applyNavState() {
    const isAuth = this.isAuthenticated();
    document.querySelectorAll('#navMain .nav-link').forEach(a => {
      // simple: show profile if logged, show login if not
      if (a.getAttribute('href') === '#/login') a.style.display = isAuth ? 'none' : '';
      if (a.getAttribute('href') === '#/profile') a.style.display = isAuth ? '' : 'none';
    });
  }
};

// update nav on load
document.addEventListener('DOMContentLoaded', ()=> auth.applyNavState());
