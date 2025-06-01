

// Función de registro
const register = (e) => {
    e.preventDefault()
  
    const {
        email, nombre, apellido,password,edad
    } = e.target

    const data = {
        email: email.value,
        nombre:nombre.value,
        apellido: apellido.value,
        password: password.value,
        edad: edad.value        
    }

    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then((response)=>{
        alert("Su registro se ha guardado satisfactoriamente")
        window.location.href = '/login.html';        
    })
    .catch((error)=>{
        console.error(error)
        alert("Ha sucedido un error l momento del registro")
    })
}

// Función de autenticación
const login = (e) => {
    e.preventDefault()
  
    const {
        email, password
    } = e.target

    const data = {
        email: email.value,        
        password: password.value,            
    }

    fetch('http://localhost:3000/Autenticacion', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(response => { return response.json();   }) // Se recibe la respuesta como una promesa
    .then(token => { // Se lee la respuesta
        localStorage.setItem('sesionToken', `Bearer ${token}`);
        window.location.href = '/index.html';
    })
    .catch((error)=>{
        alert("Ha sucedido un error l momento del registro")
    })
}


