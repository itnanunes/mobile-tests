import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import signUpPage from '../pageobjects/signup.page.js'


describe('Se cadastrar na application', () => {
    it('Criar cadastro no aplicativo', async () => {
        await homePage.openMenu('profile');
        await homePage.openSignUpPage();
        await signUpPage.formulario('João','Silva','1234567890','joao.silva@email.com','senha123','senha123');
        await signUpPage.submitForm();

    
    });
});