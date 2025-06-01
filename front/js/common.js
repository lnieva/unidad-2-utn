if (localStorage.getItem('tokenLogin') == null) {
  window.location.href = '/index.html';
};

const token = JSON.parse(localStorage.getItem("tokenLogin"));
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

// ELIMINAR ELEMENTOS CREADOS
function eliminarContenido() {
  let borraContactos = document.getElementById("contactos");
  while (borraContactos.firstChild) {
    borraContactos.removeChild(borraContactos.firstChild);
  }
  let borraUsuarios = document.getElementById("usuarios");
  while (borraUsuarios.firstChild) {
    borraUsuarios.removeChild(borraUsuarios.firstChild);
  }
  let borraCompanias = document.getElementById("companias");
  while (borraCompanias.firstChild) {
    borraCompanias.removeChild(borraCompanias.firstChild);
  }
  let borraZonas = document.getElementById("zonas");
  while (borraZonas.firstChild) {
    borraZonas.removeChild(borraZonas.firstChild);
  }
  }
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem('tokenLogin');
  localStorage.removeItem('admin');
  window.location.href = '/index.html';
});

const logout = document.getElementById("bienvenido");
let decodetoken = localStorage.getItem('tokenLogin');
let verify = JSON.parse(atob(decodetoken.split('.')[1]));

if (verify.admin == 1){
  let welcome = document.getElementById('bienvenido');
  welcome.innerHTML = `Bienvenido/a Administrador - ${verify.fname}`;
} else {
  let welcome = document.getElementById('bienvenido');
  welcome.innerHTML = `Bienvenido/a - ${verify.fname}`;
}
