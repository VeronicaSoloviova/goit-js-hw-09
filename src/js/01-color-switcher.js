const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

let intervalId = null;
refs.stopBtn.disabled = true; 

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)

function onStartBtnClick() {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnClick() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
