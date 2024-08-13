import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

   get email() {
      return $('id:email')
   }

   get password() {
      return $('android=new UiSelector().text("Password")')
   }

   get btnLogin() {
      return $('~Login')
   }

   async login(email, password) {
      await this.email.setValue(email)
      await this.password.setValue(password)
      await this.btnLogin.click()
   }
}

export default new LoginPage();