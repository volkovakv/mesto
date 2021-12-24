//импорт
import './index.css';
import Card from '../components/Card.js';
import { FormValidator, enableValidation } from '../components/FormValidator.js';
import { 
  popupElementBio,
  popupElementPhoto,
  popupElementZoomSelector,
  popupElementBioSelector,
  popupElementPhotoSelector,
  cardsContainer,
  editButton,
  addButton,
  initialCards,
  cardTemplate,
  profileNameSelector, 
  profileBioSelector 
 } from '../utils/constants.js';
 
 import Section from '../components/Section.js';
 import PopupWithImage from '../components/PopupWithImage.js'
 import UserInfo from '../components/UserInfo.js'
 import PopupWithForm from '../components/PopupWithForm.js'

// подключение валидации форме добавления и редактирования
export const popupElementBioValidate = new FormValidator(enableValidation, popupElementBio);
export const  popupElementPhotoValidate = new FormValidator(enableValidation, popupElementPhoto);
popupElementBioValidate.enableValidation();
popupElementPhotoValidate.enableValidation();

//создание карточки
function createCard(item, cardTemplate) {
  const card = new Card(item, cardTemplate, () => {
    openPhotos.open(item.link, item.name);
  });
  return card.generateCard();
}

const userForm = new UserInfo({profileNameSelector, profileBioSelector });

//попап с картинкой
const openPhotos = new PopupWithImage(popupElementZoomSelector);
openPhotos.setEventListeners();

//отрисовка карточек
const cards = new Section({
  items: initialCards, 
  renderer: (item) => {
    const cardElement = createCard(item, cardTemplate);
    cards.addItem(cardElement);
  },
}, cardsContainer);
cards.renderItems();

//запись данных в попап bio
const popupBio = new PopupWithForm(popupElementBioSelector, (event) => {
    event.preventDefault();
    const formInputValues = popupBio.getFormInputValues();
    userForm.setUserInfo({ userName: formInputValues.name, userBio: formInputValues.job  });
    popupBio.close();
  },
);
popupBio.setEventListeners();

//добавление новой карточки photo
const popupNewPhoto = new PopupWithForm(popupElementPhotoSelector, (event) => {
  event.preventDefault();
  const formInputValues = popupNewPhoto.getFormInputValues();
  const item = { name: formInputValues.place, link: formInputValues.photo};
  const cardElement = createCard(item, cardTemplate);
  cards.addItem(cardElement);
  popupNewPhoto.close();
  }
);
popupNewPhoto.setEventListeners();

//открытие попапа редактирования bio 
editButton.addEventListener("click", () => {
  const userData = userForm.getUserInfo();
  const formBio = popupBio.getPopupForm();
  formBio.name.value = userData.userName;
  formBio.job.value = userData.userBio;
  popupBio.open();
});

//открытие попапа добавления фото
addButton.addEventListener("click", () => {
  popupElementPhotoValidate.toggleButtonState();
  popupNewPhoto.open();
});
