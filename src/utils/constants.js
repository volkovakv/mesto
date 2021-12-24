// КОНСТАНТЫ И ПЕРЕМЕННЫЕ
//массив для добавления 6-ти карточек
export const initialCards = [
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
export const popupElementBio = document.querySelector('.popup_bio');
export const popupElementPhoto = document.querySelector('.popup_photo');

// селекторы
export const popupElementBioSelector = '.popup_bio';
export const popupElementPhotoSelector = '.popup_photo';
export const popupElementZoomSelector = '.popup_zoom'; 
export const profileNameSelector = '.profile__info-name';
export const profileBioSelector = '.profile__info-job';
export const cardTemplate = '.card-template'; //шаблон карточки
export const cardsContainer = '.elements__list'; //список для добавления карточек

//кнопки 
export const editButton = document.querySelector('.profile__info-edit-button'); //кнопка редактировать "bio"
export const addButton = document.querySelector('.profile__add-button'); //кнопка "добавить photo"

//инпуты bio
export const inputBioName = document.querySelector('.name-input');
export const inputBioJob = document.querySelector('.about-input');

//элементы попапа zoom
export const popupElementZoomContainer = document.querySelector('.popup__container-zoom');
export const popupElementZoomContainerPic = popupElementZoomContainer.querySelector('.popup__pic');
export const popupElementZoomContainerDescription = popupElementZoomContainer.querySelector('.popup__description');