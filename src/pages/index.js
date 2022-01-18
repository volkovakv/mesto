//импорт
import './index.css';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { 
  enableValidation,
  popupElementBio,
  popupElementPhoto,
  popupElementUpdate,
  popupElementZoomSelector,
  popupElementBioSelector,
  popupElementPhotoSelector,
  popupUpdateSelector,
  popupConfirmSelector,
  profileNameSelector, 
  profileAvatarSelector,
  profileBioSelector,
  formBioName,
  formBioJob,
  cardsContainer,
  cardTemplate,
  editButton,
  addButton,
  updateButton
 } from '../utils/constants.js';
 
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api';
import PopupConfirmation from '../components/PopupConfirmation';

// подключение валидации форме добавления и редактирования
export const popupElementBioValidate = new FormValidator(enableValidation, popupElementBio);
export const  popupElementPhotoValidate = new FormValidator(enableValidation, popupElementPhoto);
export const  popupElementUpdateValidate = new FormValidator(enableValidation, popupElementUpdate);
popupElementBioValidate.enableValidation();
popupElementPhotoValidate.enableValidation();
popupElementUpdateValidate.enableValidation();

let userId

// запросы к серверу
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: 'bec6b997-2386-4c6a-ada4-c66881ffbfb4',
    'Content-Type': 'application/json'
  }
}); 

const userForm = new UserInfo({profileNameSelector, profileBioSelector, profileAvatarSelector });

//первоначальные данные с сервера (bio и карточки)
api
  .getDefaultData()
  .then((serverData) => {
    const [userData, cardsArray] = serverData;
    userForm.setUserInfo({ userName: userData.name, userBio: userData.about });
    userForm.setUserAvatar({ avatarUrl: userData });
    userId = userData._id;
    cards.renderItems(cardsArray);
  })
  .catch((err) => {
    console.log(err);
  });

//создание карточки
function createCard(item) {
  const card = new Card(item, userId, cardTemplate, {
    handleCardClick: () => {
      openPhotos.open(item.link, item.name);
    },
    deleteCard: (cardElement, cardId) => {
      popupConfirmation.newSubmitCallback((evt) => {
        evt.preventDefault();
        api
        .deleteCard(cardId)
        .then(() => {
          cardElement.remove();
          popupConfirmation.close();
        })
        .catch((err) => {
          console.error(err);
        });
      });
      popupConfirmation.open();
    },
    handleLikeClick: (cardId) => {
      if (card.isLiked) {
        api
        .deleteLike(cardId)
        .then((data) => {
          card.unsetLike();
          card.likesCounter(data.likes);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        api
        .addLike(cardId)
        .then((data) => {
          card.setLike();
          card.likesCounter(data.likes);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
});
  return card.generateCard();
}

//отрисовка карточек
const cards = new Section({
  renderItems: (item) => {
    const cardElement = createCard(item);
    cards.appendAddItem(cardElement);
  },
}, cardsContainer);

// редактирование bio 
const popupBio = new PopupWithForm(popupElementBioSelector, (inputValues) => {
  popupBio.submitButtonStatus(true);
  api
    .editProfile({ name: inputValues.name, about: inputValues.job })
    .then((data) => {
      userForm.setUserInfo({ userName: data.name, userBio: data.about });
      popupBio.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupBio.submitButtonStatus(false);
    })
});
popupBio.setEventListeners();

// редактирование аватара
const popupUpdate = new PopupWithForm(popupUpdateSelector, (inputValues) => {
  popupUpdate.submitButtonStatus(true);
  api
  .updateProfileAvatar({ avatar: inputValues.avatar })
  .then((data) => {
    userForm.setUserAvatar({ avatarUrl: data });
    popupUpdate.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupUpdate.submitButtonStatus(false);
  })
});
popupUpdate.setEventListeners();

//добавление новой карточки photo
const popupNewPhoto = new PopupWithForm(popupElementPhotoSelector, (inputValues) => {
  popupNewPhoto.submitButtonStatus(true);
  const item = { name: inputValues.place, link: inputValues.photo};
  api
    .addNewCard(item)
    .then((newItem) => {
      const cardElement = createCard(newItem, cardTemplate);
      cards.prependAddItem(cardElement);
      popupNewPhoto.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupNewPhoto.submitButtonStatus(false);
    })
});
popupNewPhoto.setEventListeners();

// подтверждение удаления
const popupConfirmation = new PopupConfirmation(popupConfirmSelector, );
popupConfirmation.setEventListeners();

//попап с картинкой
const openPhotos = new PopupWithImage(popupElementZoomSelector);
openPhotos.setEventListeners();

// открытие попапа редактирования аватара
updateButton.addEventListener('click', () => {
  popupElementUpdateValidate.resetValidation();
  popupUpdate.open();
});

// открытие попапа редактирования bio 
editButton.addEventListener("click", () => {
  const userData = userForm.getUserInfo();
  formBioName.value = userData.userName;
  formBioJob.value = userData.userBio;
  popupBio.open();
  popupElementBioValidate.toggleButtonState();
  popupElementBioValidate.resetValidation();
});

// открытие попапа добавления фото
addButton.addEventListener("click", () => {
  popupElementPhotoValidate.toggleButtonState();
  popupElementPhotoValidate.resetValidation();
  popupNewPhoto.open();
});