const button = document.getElementById('button');
const level = document.getElementById('level');

const wrapperGame = document.querySelector('.wrapper-game');

let levels = document.querySelectorAll('.level__item');
levels.forEach(level => {
  level.addEventListener('click', () => {
    levels.forEach(lvl => lvl.classList.remove('active'));
    level.classList.add('active');
  })
})

function renderCard(number) {
  for(let i=0; i<number; i++) {
    let card = document.createElement ('div');
    let cardInner = document.createElement ('div');
    let cardFront = document.createElement ('div');
    let cardBack = document.createElement ('div');

    card.className = 'flip-card';
    wrapperGame.appendChild(card);

    cardInner.className = 'flip-card__inner';
    card.appendChild(cardInner);

    cardFront.className = 'flip-card__front';
    cardInner.appendChild(cardFront);

    cardBack.className = 'flip-card__back';
    cardInner.appendChild(cardBack);

    let rotate = () => cardInner.classList.toggle('rotate');
    card.addEventListener('click', rotate);
  }
}

function chooseLevel(level) {
  switch(level) {
    case 'Простой':
    renderCard(3);
    break;
    case 'Средний':
    renderCard(6);
    break;
    case 'Сложный':
    renderCard(10);
    break;
  }
}

function startGame() {
  let level = document.querySelector('.active').innerText;
  chooseLevel(level);
  document.querySelector('.wrapper').style.display = 'none';
  wrapperGame.style.display = 'flex';
}

button.addEventListener('click', startGame);
