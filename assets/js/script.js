document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#checkbox');
  checkbox.addEventListener('change', e => {
    let body = document.querySelector('body');
    body.classList.toggle('dark');
  });
});