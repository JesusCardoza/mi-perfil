// Anima las barras de progreso al cargar la página
const barras = document.querySelectorAll('.progreso');

barras.forEach(barra => {
  const nivel = barra.getAttribute('data-nivel');
  setTimeout(() => {
    barra.style.width = nivel + '%';
  }, 300);
});

// Maneja el formulario de contacto
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Aquí normalmente enviarías los datos a un servidor
  // Por ahora simulamos el envío
  console.log('Mensaje recibido:', { nombre, email, mensaje });

  formulario.reset();
  respuesta.classList.remove('oculto');
  respuesta.classList.add('visible');

  setTimeout(() => {
    respuesta.classList.remove('visible');
    respuesta.classList.add('oculto');
  }, 4000);


});
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  console.log('Mensaje recibido:', { nombre, email, mensaje });

  formulario.reset();
  respuesta.classList.remove('oculto');
  respuesta.classList.add('visible');

  setTimeout(() => {
    respuesta.classList.remove('visible');
    respuesta.classList.add('oculto');
  }, 4000);

}); // ✅ aquí cierra el formulario

// Maneja el cambio de tema — fuera del formulario
const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', function() {
  body.classList.toggle('claro');
  if (body.classList.contains('claro')) {
    btnTema.textContent = '🌙 Modo oscuro';
  } else {
    btnTema.textContent = '☀️ Modo claro';
  }
}); // ✅ aquí cierra el botón