export class Cookies {

  constructor() {
    this.checkCookieEnabled();
  }

  checkCookieEnabled() {
    if(!navigator.cookieEnabled) {
      alert('Masz wyłączoną obsługę ciasteczek...');
      return;
    }
  }

  setCookie(optionsCookie) {

    const options = {
      name: optionsCookie.name || 'test',
      value: optionsCookie.value || 'wartość testowa',
      days: optionsCookie.days,
      domain: optionsCookie.domain,
      path: optionsCookie.path,
      secure: optionsCookie.secure
    }

    const cookieName = encodeURIComponent(options.name);
    const cookieValue = encodeURIComponent(options.value);
    const cookieSettingsTab = [];

    cookieSettingsTab.push(`${cookieName} = ${cookieValue}`);

    if(typeof options.days === 'number') {
      
        const date = new Date();
        date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
        cookieSettingsTab.push(`expires = ${date.toGMTString()}`);
    }

    if(options.domain) {
      cookieSettingsTab.push(`domain = ${options.domain}`);
    }

    if(options.path) {
      cookieSettingsTab.push(`path = ${options.path}`);
    }

    if(options.secure && typeof options.secure === 'boolean') {
      cookieSettingsTab.push(`secure = ${options.secure}`);
    }

    document.cookie = cookieSettingsTab.join(';');
  }

  getCookie(name) {

    if(document.cookie != '') {
      const cookies = document.cookie.split(/; */);

      for(let i = 0; i < cookies.length; i++) {

        const cookieName = cookies[i].split('=')[0];
        const cookieValue = cookies[i].split('=')[1];

        if(decodeURIComponent(cookieName) === name) {
          return cookieValue;
        }
      }
    }
  }

  removeCookie(nameCookie) {
     
    this.setCookie({
      name: nameCookie,
      days: -1
    });
  }
}