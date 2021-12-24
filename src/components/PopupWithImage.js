import Popup from './Popup.js';
import { popupElementZoomContainerPic, popupElementZoomContainerDescription } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    open(imageLink, imageName) {
      popupElementZoomContainerPic.src = imageLink;
      popupElementZoomContainerPic.alt = imageName;
      popupElementZoomContainerDescription.textContent = imageName;
      super.open();
    }
  }