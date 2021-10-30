const popupElement = document.querySelector('.popup');

const closeButton = popupElement.querySelector('.popup__closebutton');

const editButton = document.querySelector('.profile__info-editbutton');

editButton.addEventListener('click', () => {
    popupElement.classList.add('popup_opened')
});

closeButton.addEventListener('click', () => {
    popupElement.classList.remove('popup_opened')
});


let formElement = document.querySelector('.popup__container');

let nameInput = document.querySelector('.popup__text');
console.log(nameInput);
let jobInput = document.querySelector('.popup__text');
console.log(jobInput);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let inputs = document.querySelectorAll('input');
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    
    let nameProfile = document.querySelector('.profile__info-name');
    console.log(nameProfile);
    let jobProfile = document.querySelector('.profile__info-job');
    console.log(jobProfile);

    nameProfile.classList.add('hide');
    jobProfile.classList.add('hide');

    nameProfile.textContent = inputs[0].value;
    jobProfile.textContent = inputs[1].value;

    popupElement.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 