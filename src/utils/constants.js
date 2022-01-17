// КОНСТАНТЫ И ПЕРЕМЕННЫЕ

//попапы
export const popupElementBio = document.querySelector('.popup_bio');
export const popupElementPhoto = document.querySelector('.popup_photo');
export const popupElementUpdate = document.querySelector('.popup_update');

//селекторы попапов
export const popupElementBioSelector = '.popup_bio';
export const popupElementPhotoSelector = '.popup_photo';
export const popupElementZoomSelector = '.popup_zoom'; 
export const popupConfirmSelector = '.popup_confirm';
export const popupUpdateSelector = '.popup_update';

//селекторы
export const profileNameSelector = '.profile__info-name';
export const profileBioSelector = '.profile__info-job';
export const profileAvatarSelector = '.profile__avatar';
export const cardTemplate = '.card-template'; //шаблон карточки
export const cardsContainer = '.elements__list'; //список для добавления карточек

//поля попапа bio
export const formBioName = popupElementBio.querySelector("#name-input");
export const formBioJob = popupElementBio.querySelector("#about-input");

//кнопки 
export const editButton = document.querySelector('.profile__info-edit-button'); //кнопка редактировать "bio"
export const addButton = document.querySelector('.profile__add-button'); //кнопка "добавить photo"
export const updateButton = document.querySelector('.profile__avatar-edit'); //кнопка "удалить photo"

//элементы попапа zoom
export const popupElementZoomContainer = document.querySelector('.popup__container-zoom');
export const popupElementZoomContainerPic = popupElementZoomContainer.querySelector('.popup__pic');
export const popupElementZoomContainerDescription = popupElementZoomContainer.querySelector('.popup__description');