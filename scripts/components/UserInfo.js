export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileName);
        this._profileText = document.querySelector(configInfo.profileTextInfo)
    }

    getUserInfo() {
        return {title: this._profileName.textContent, description: this._profileText.textContent}
    }

    setUserInfo(dataUser) {
        this._profileName.textContent = dataUser.title;
        this._profileText.textContent = dataUser.description;
    }
}