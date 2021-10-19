const first = document.getElementById('first'),
      second = document.querySelector('p'),
      third = document.getElementById('third'),
      image = document.querySelector('img'),
      Title = document.querySelector('h3');

let isStart = true,
    isSecond = true,
    isSmall = true;

function changeState() {
    if (isStart) {
        first.style.color = 'white';
        first.style.backgroundColor = 'blue';
        third.style.color = 'white';
        third.style.backgroundColor = 'yellow';
        isStart = false;
    } else {
        first.style.color = 'black';
        first.style.backgroundColor = 'yellow';
        third.style.color = 'black';
        third.style.backgroundColor = 'blue';
        isStart = true;
    }
}

first.addEventListener('click', () => {
    changeState();
});

third.addEventListener('click', () => {
    changeState();
});

second.addEventListener('click', () => {
    if (isSecond) {
        second.style.color = 'red';
        second.style.backgroundColor = 'white';
        isSecond = false;
    } else {
        second.style.color = 'white';
        second.style.backgroundColor = 'green';
        isSecond = true;
    }
});

Title.addEventListener('click', () => {
    if (isSmall) {
        image.style.transform = 'scale(1.05)';
        Title.style.color = 'red';
        isSmall = false;
    } else {
        image.style.transform = 'scale(1.0)';
        Title.style.color = 'black';
        isSmall = true;
    }
});