const button = document.getElementById('button');
const level = document.getElementById('level');

//создание карты и переворот
const body = document.body
let card = document.createElement ('div');
let cardInner = document.createElement ('div');
let cardFront = document.createElement ('div');
let cardBack = document.createElement ('div');
let imageFront = new Image();
let imageBack = new Image();

card.className = 'flip-card';
body.appendChild(card);

cardInner.className = 'flip-card__inner';
card.appendChild(cardInner);

cardFront.className = 'flip-card__front';
cardInner.appendChild(cardFront);
imageFront.src = 'img/card-front.png';
cardFront.appendChild(imageFront);

cardBack.className = 'flip-card__back';
cardInner.appendChild(cardBack);
imageBack.src = 'img/card1.png';
cardBack.appendChild(imageBack);

let rotate = () => cardInner.classList.toggle('rotate');
card.addEventListener('click', rotate);
