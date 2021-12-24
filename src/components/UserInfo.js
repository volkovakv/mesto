export default class UserInfo {
    constructor({ profileNameSelector, profileBioSelector }) {
      this._userNameElement = document.querySelector(profileNameSelector);
      this._userBioElement = document.querySelector(profileBioSelector);
    }
    
    //получаем данные
    getUserInfo() {
      return {
        userName: this._userNameElement.textContent,
        userBio: this._userBioElement.textContent
      }
    }
    
    //записываем данные
    setUserInfo({ userName, userBio }) {
      this._userNameElement.textContent = userName;
      this._userBioElement.textContent = userBio;
    }
  }