const popupElement = document.querySelector('.popup');

const closeButton = popupElement.querySelector('.popup__close-button');

const editButton = document.querySelector('.profile__info-edit-button');

let inputs = document.querySelectorAll('input');
console.log(inputs[0].value);
console.log(inputs[1].value);

let nameProfile = document.querySelector('.profile__info-name');
console.log(nameProfile);
let jobProfile = document.querySelector('.profile__info-job');
console.log(jobProfile);

function addClass () {
    popupElement.classList.add('popup_opened')
}

function removeClass () {
    popupElement.classList.remove('popup_opened')
}

editButton.addEventListener('click', addClass);

closeButton.addEventListener('click', removeClass);


let formElement = document.querySelector('.popup__container');

let nameInput = document.querySelector('.popup__text');
console.log(nameInput);
let jobInput = document.querySelector('.popup__text');
console.log(jobInput);

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = inputs[0].value;
    jobProfile.textContent = inputs[1].value;

    removeClass ();
}

formElement.addEventListener('submit', formSubmitHandler); 