import { expect, driver } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'
import ProfilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.openMenu('profile')
        await LoginPage.login('itna@ebac.com.br', '123123')
        await ProfilePage.openMenu('profile')
        expect (( await ProfilePage.profileName('santana itna')).isDisplayed()).toBeTruthy()
    })
})
