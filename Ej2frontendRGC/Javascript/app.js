// Obtener los elementos de los formularios
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Botones de cambio de formulario
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');

// Mostrar el formulario de registro y ocultar el de login
toRegister.addEventListener('click', function(event) {
    event.preventDefault();  // Evitar el comportamiento por defecto del enlace
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

// Mostrar el formulario de login y ocultar el de registro
toLogin.addEventListener('click', function(event) {
    event.preventDefault();  // Evitar el comportamiento por defecto del enlace
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});
