document.getElementById('dialog-open-button').addEventListener('click', function() {
  window['dialog'].showModal();
});

document.getElementById('dialog-button').addEventListener('click', function() {
  window['dialog'].close();
});
