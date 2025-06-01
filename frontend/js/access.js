// Validación de las páginas que son publicas y que no necesitan token
const public = [
    '/login.html'
]
if(!public.includes(window.location.pathname) && !localStorage.getItem('sesionToken')){
    window.location.href = '/login.html';
}