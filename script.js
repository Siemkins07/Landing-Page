const form = document.querySelector('.was-validated');
const counter = document.getElementById('counter');

const submitForm = (e) => {
  e.preventDefault();
  if (counter.textContent > 0) {
    let startValue = counter.value;
    counter.value--;
    counter.textContent = counter.value;
    alert('Success')
    form.reset();
  } else alert('This product has been sold out. Please try again later');
}
form.addEventListener('submit', submitForm);

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})