import { $ } from '@wdio/globals';


class SignUpPage {

    get firstNameInput() { return $('#firstName'); }
    get lastNameInput() { return $('#lastName'); }
    get phoneInput() { return $('#phone'); }
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
    get repasswordInput() { return $('#repassword'); }

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