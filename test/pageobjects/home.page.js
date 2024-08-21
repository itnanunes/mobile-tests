import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }

    async openProfileMenu() {
        await $('android=new UiSelector().text("Profile")').click();
    }

    async openSignUpPage() {

        await $('android=new UiSelector().text("Sign up")').click();
    }

}

export default new HomePage();