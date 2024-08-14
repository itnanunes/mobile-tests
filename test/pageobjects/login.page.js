import { $ } from '@wdio/globals'

class LoginPage {
    
    get email () {
        return $('id:email');
    }

    get inputPassword () {
        return $('android=new UiSelector().text("Password")');
    }

    get btnLogin () {
        return $('~Login');
    }

    async login (email, password) {
        await this.email.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}
export default new LoginPage();
