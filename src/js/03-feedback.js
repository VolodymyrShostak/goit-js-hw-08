import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveData, 500));

function saveData(e) {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  formData[e.target.name] = e.target.value;
  if (localStorage.getItem(STORAGE_KEY)) {
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
