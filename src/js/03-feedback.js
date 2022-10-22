import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveData, 500));

if (localStorage.getItem(STORAGE_KEY)) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}
function saveData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}
