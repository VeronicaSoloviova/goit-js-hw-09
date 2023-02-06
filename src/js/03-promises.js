import {Notify} from "notiflix";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { amount, delay, step } = event.target.elements;
  let delayValue = Number(delay.value);
  for (let i = 0; i < Number(amount.value); i += 1) {
    createPromise(i+1, delayValue).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delayValue += Number(step.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setInterval(() => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
  }, delay);
});
}
