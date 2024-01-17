import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies {

  constructor() {
    super();
    this.infoPlace = document.querySelector('.cookies');

    if(!this.getCookie('infoCookie')) {
      this.showInfo();
    }
  }

  showInfo() {
    this.infoPlace.classList.remove('display-none');
  }

  hideInfo() {
    this.infoPlace.classList.add('display-none');
  }

  setCookie() {
    super.setCookie({
      name: 'infoCookie',
      value: 'Yes',
      days: 365
    });
    this.hideInfo();
  }

}