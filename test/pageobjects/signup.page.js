import { $ } from '@wdio/globals';


class SignUpPage {

    //get firstNameInput() { return $('#firstName'); }
    get firstNameInput() { return $('android=new UiSelector().resourceId("firstName")'); }
    get lastNameInput() { return $('android=new UiSelector().resourceId("lastName")'); }
    get phoneInput() { return $('android=new UiSelector().resourceId("phone")'); }
    get emailInput() { return $('android=new UiSelector().resourceId("email")'); }
    get passwordInput() { return $('android=new UiSelector().resourceId("password")'); }
    get repasswordInput() { return $('android=new UiSelector().resourceId("repassword")'); }

    async formulario(firstName, lastName, phone, email, password, repassword) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.phoneInput.setValue(phone);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.repasswordInput.setValue(repassword);
    }


    async submitForm() {

        await $('android=new UiSelector().resourceId("create")').click();
    }
}

export default new SignUpPage();
