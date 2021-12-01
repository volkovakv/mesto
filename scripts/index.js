// КОНСТАНТЫ И ПЕРЕМЕННЫЕ
//массив для добавления 6-ти карточек
const initialCards = [
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1494791286225-ea86fc957ba7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80'
  },
  {
    name: 'Дагестан',
    link: 'https://images.unsplash.com/photo-1570614738755-ed5d44865d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1615529610458-1801dfce0a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552857406-14af62dbf053?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFpa2FsfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80'
  },
  {
    name: 'Карачаево-Черкессия',
    link: 'https://images.unsplash.com/photo-1634819954907-9098873605f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80" alt="К сожалению, изображение не доступно'
  }
  ];

// область глобальнных переменных
const popupElementBio = document.querySelector('#popup_bio');
const popupElementPhoto = document.querySelector('#popup_photo');

const closeButtonBio = popupElementBio.querySelector('.popup__close-button'); //кнопка закрыть форму "bio"
const closeButtonPhoto = popupElementPhoto.querySelector('.popup__close-button'); //кнопка закрыть форму "добавить photo

const editButton = document.querySelector('.profile__info-edit-button'); //кнопка редактировать "bio"
const addButton = document.querySelector('.profile__add-button'); //кнопка "добавить photo"
const saveButton = document.querySelector('.popup__save-button'); //кнопка "сохранить карточку"

const cardTemplate = document.querySelector('#card-template').content; //шаблон карточки
const cardsContainer = document.querySelector('.elements__list'); //список для добавления карточек

//переменные для обнуления кнопки сохранить
const inactiveButtonClass = 'popup__save-button_inactive';
const inputList = Array.from(popupElementPhoto.querySelectorAll('.popup__text'));
const buttonElement = popupElementPhoto.querySelector('.popup__save-button');

//инпуты bio
const inputBioName = popupElementBio.querySelector('[name="name"]');
const inputBioJob = popupElementBio.querySelector('[name="job"]');

//инпуты в форме "добавить photo"
const inputPhotoPlace = popupElementPhoto.querySelector('[name="place"]');
const inputPhotoLink = popupElementPhoto.querySelector('[name="photo"]');


//элементы попапа zoom
const popupElementZoom = document.querySelector('#popup_zoom');
const popupElementZoomContainer = document.querySelector('.popup__container-zoom');
const popupElementZoomContainerPic = popupElementZoomContainer.querySelector('.popup__pic');
const popupElementZoomContainerDescription = popupElementZoomContainer.querySelector('.popup__description');

// переменная для формы "добавить photo"
const formElementPhoto = popupElementPhoto.querySelector('.popup__form');

// запоминаем значения из полей ввода формы "bio" для автозаполнения
const inputsBio = popupElementBio.querySelectorAll('input');

// переменные для полей ввода формы "bio"
const nameProfile = document.querySelector('.profile__info-name');
const jobProfile = document.querySelector('.profile__info-job');

// переменные для полей ввода формы "добавить photo"
const picPhoto = document.querySelector('.element__photo');
const textPhoto = document.querySelector('.element__text');

// переменная для формы "bio"
const formElementBio = popupElementBio.querySelector('.popup__form');

// ФУНКЦИИ
// функция для открытия попапа
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', pressEsc);
}

// функция для закрытия попапа
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', pressEsc);
}

//функция для закрытия попапа по клику на оверлей
const сlickOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target); 
  };
};

//функция для закрытия попапа по клику на esc
const pressEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

// функция для записи новых значений в поля формы bio
function submitHandlerBio(evt) {
    evt.preventDefault();
    nameProfile.textContent = inputBioName.value;
    jobProfile.textContent = inputBioJob.value;
    closePopup(popupElementBio);
}

// функция для лайка
function like(evt) {
  evt.target.classList.toggle('element__heart_active');
}

//функция для удаления 
function remove(evt) {
  evt.target.closest('.element').remove();
}

// функция открытия попапа zoom
function openPhotoPopup(evt) {
  popupElementZoomContainerPic.src = evt.target.src;
  popupElementZoomContainerPic.alt = evt.target.alt;
  popupElementZoomContainerDescription.textContent = evt.target.alt;
  openPopup(popupElementZoom);
}

// функция закрытия попапа zoom
popupElementZoom.querySelector('.popup__close-button').addEventListener('click', () => {
  closePopup(popupElementZoom);
});

//добавление карточек
function createCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);     
  cardElement.querySelector('.element__photo').src = card.link;
  cardElement.querySelector('.element__photo').alt = card.name;
  cardElement.querySelector('.element__text').textContent = card.name;

  //отображение лайка
  cardElement.querySelector('.element__heart').addEventListener('click', like); //кнопка лайка
  
  //удаление карточки
  cardElement.querySelector('.element__trash').addEventListener('click', remove); //кнопка удалить

  //открытие попапа с фото
  cardElement.querySelector('.element__photo').addEventListener('click', openPhotoPopup); //картинка-кнопка

  return cardElement;
 }

// задание на добавление новых карточек
function submitHandlerPhoto(evt) {
  evt.preventDefault();
  const inputsPhoto = popupElementPhoto.querySelectorAll('input');
  const cardElement = createCard({
    name: inputPhotoPlace.value,
    link: inputPhotoLink.value
  });
  cardsContainer.prepend(cardElement);
  closePopup(popupElementPhoto);
  formElementPhoto.reset();
  toggleButtonState(inputList, buttonElement, {inactiveButtonClass});
}

// ИСПОЛНЯЕМЫЙ КОД
//добавление карточки в DOM
 //обходим массив 6-ти карточек и добавляем их
 initialCards.forEach (card => {
  cardsContainer.append(createCard(card));
});

// слушатель для кнопки редактирования "bio"
editButton.addEventListener('click', function () {
  openPopup(popupElementBio);
});


// слушатель для кнопки "добавить photo"
addButton.addEventListener('click', function () {
  openPopup(popupElementPhoto);
});

// слушатель для кнопки закрытия "bio" с кнопки
closeButtonBio.addEventListener('click', function () {
  closePopup(popupElementBio);
});

// передача формы bio
formElementBio.addEventListener('submit', submitHandlerBio); 

// слушатель для кнопки закрытия формы "добавить photo" с кнопки
closeButtonPhoto.addEventListener('click', function () {
  closePopup(popupElementPhoto);
});

//слушатели для закрытия попапов по клику на оверлей
popupElementBio.addEventListener('click', сlickOverlay);
popupElementPhoto.addEventListener('click', сlickOverlay);
popupElementZoom.addEventListener('click', сlickOverlay);

// передача формы "добавить photo"
formElementPhoto.addEventListener('submit', submitHandlerPhoto); 