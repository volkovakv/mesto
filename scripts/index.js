// область глобальнных переменных
const popupElementBio = document.querySelector('.popup_bio');
const popupElementPhoto = document.querySelector('.popup_photo');

const closeButtonBio = popupElementBio.querySelector('.popup__close-button'); //кнопка закрыть форму "bio"
const closeButtonPhoto = popupElementPhoto.querySelector('.popup__close-button'); //кнопка закрыть форму "добавить photo

const editButton = document.querySelector('.profile__info-edit-button'); //кнопка редактировать "bio"
const addButton = document.querySelector('.profile__add-button'); //кнопка "добавить photo"

const cardTemplate = document.querySelector('.template').content; //шаблон карточки
const cardsContainer = document.querySelector('.elements__list'); //список для добавления карточек

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

// функция для открытия попапа
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

// функция для закрытия попапа
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

// слушатель для кнопки редактирования "bio"
editButton.addEventListener('click', function () {
    openPopup (popupElementBio);
});


// слушатель для кнопки "добавить photo"
addButton.addEventListener('click', function () {
    openPopup (popupElementPhoto);
});

// слушатель для кнопки закрытия "bio"
closeButtonBio.addEventListener('click', function () {
    closePopup (popupElementBio);
});

// слушатель для кнопки закрытия формы "добавить photo"
closeButtonPhoto.addEventListener('click', function () {
    closePopup (popupElementPhoto);
    formElementPhoto.reset();
});

//задание на запись данных из формы "bio"
// переменная для формы "bio"
const formElementBio = popupElementBio.querySelector('.popup__form');

// функция для записи новых значений в поля формы bio
function formSubmitHandlerBio (evt) {
    evt.preventDefault(popupElementBio);
    nameProfile.textContent = inputsBio[0].value;
    jobProfile.textContent = inputsBio[1].value;
    closePopup (popupElementBio);
}

// передача формы bio
formElementBio.addEventListener('submit', formSubmitHandlerBio); 

//задание на добавление 6-ти карточек
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

//обходим массив 6-ти карточек и добавляем их
initialCards.forEach(addCard);

//добавление 6-ти карточек
 function addCard(card) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
        
    cardElement.querySelector('.element__photo').src = card.link;
    cardElement.querySelector('.element__text').textContent = card.name;
    cardsContainer.prepend(cardElement);

    //задание на отображение лайка
    const likeButton = cardElement.querySelector('.element__heart'); //кнопка лайка
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__heart_active');
    });

    //задание на удаление карточки
    const trashButton = cardElement.querySelector('.element__trash'); //кнопка удалить
    trashButton.addEventListener('click', function () {
      trashButton.closest('.element').remove();
    });

    //задание на открытие попапа с фото
    const popupElementZoom = document.querySelector('.popup_zoom');
    const popupElementZoomContainer = document.querySelector('.popup__container-zoom');
    const zoomButton = cardElement.querySelector('.element__photo'); //картинка-кнопка

    zoomButton.addEventListener('click', function () {
      popupElementZoomContainer.querySelector('.popup__pic').src = card.link;
      popupElementZoomContainer.querySelector('.popup__description').textContent = card.name;
      openPopup(popupElementZoom);
    });

    const closeButtonZoom = popupElementZoom.querySelector('.popup__close-button'); //кнопка закрыть попап zoom
    // слушатель для кнопки закрытия попапа zoom
    closeButtonZoom.addEventListener('click', function () {
      closePopup (popupElementZoom);
    });
 }

// задание на добавление новых карточек
function formSubmitHandlerPhoto(evt) {
  evt.preventDefault();
  const inputsPhoto = popupElementPhoto.querySelectorAll('input');
  const cardElement = addCard({
    name: inputsPhoto[0].value,
    link: inputsPhoto[1].value
  });
  closePopup(popupElementPhoto);
  formElementPhoto.reset();
}

// передача формы "добавить photo"
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto); 