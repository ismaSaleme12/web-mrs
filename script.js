const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const form = document.querySelector('#contact-form');
const note = document.querySelector('#form-note');

menuToggle?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Gracias por tu consulta. En esta versión de prueba el formulario todavía no envía mensajes; el próximo paso es conectarlo a WhatsApp o correo.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
