export default class UserInfo {
    constructor({ profileNameSelector, profileBioSelector, profileAvatarSelector }) {
      this._userNameElement = document.querySelector(profileNameSelector);
      this._userBioElement = document.querySelector(profileBioSelector);
      this._userAvatarElement = document.querySelector(profileAvatarSelector);
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

    setUserAvatar({ avatarUrl }) {
      this._userAvatarElement.src = avatarUrl.avatar;
    }
  }