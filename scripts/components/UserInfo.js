export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileName);
        this._profileText = document.querySelector(configInfo.profileTextInfo);
        this._profileAvatar = document.querySelector(configInfo.profileAvatar);
    }

    getUserInfo() {
        return {title: this._profileName.textContent, description: this._profileText.textContent}
    }

    setUserInfo({ avatar, title, description }) {
        this._profileAvatar.src = avatar;
        this._profileName.textContent = title;
        this._profileText.textContent = description;
    }
}