// Inicializa EmailJS
emailjs.init('20pIB_GZLTMJrqBBCbC6C');

// Anima las barras de progreso
const barras = document.querySelectorAll('.progreso');
barras.forEach(barra => {
  const nivel = barra.getAttribute('data-nivel');
  setTimeout(() => {
    barra.style.width = nivel + '%';
  }, 300);
});

// Formulario de contacto
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    mensaje: document.getElementById('mensaje').value,
  };

  const btn = formulario.querySelector('button');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  emailjs.send('service_6fsmfuh', 'template_86cj1kn', datos)
    .then(() => {
      formulario.reset();
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
      respuesta.classList.remove('oculto');
      respuesta.classList.add('visible');

      setTimeout(() => {
        respuesta.classList.remove('visible');
        respuesta.classList.add('oculto');
      }, 4000);
    })
    .catch((error) => {
      console.error('Error:', error);
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
      alert('Hubo un error al enviar. Intenta de nuevo.');
    });
});

// Cambio de tema
const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', function() {
  body.classList.toggle('claro');
  if (body.classList.contains('claro')) {
    btnTema.textContent = '🌙 Modo oscuro';
  } else {
    btnTema.textContent = '☀️ Modo claro';
  }
});