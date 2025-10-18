// ajax.js - tiny wrapper for fetch (returns JSON or throws)
window.http = {
  async get(url) {
    const r = await fetch(url, { credentials: 'same-origin' });
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r.json().catch(()=>null);
  },
  async post(url, data) {
    const r = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data),
      credentials: 'same-origin'
    });
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r.json().catch(()=>null);
  }
};
