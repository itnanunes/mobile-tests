import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Subpágina contendo seletores e métodos específicos para a página de login
 */
class HomePage extends Page {
    async openMenu(menu) {
        await $(`id:tab-${menu}`).waitForExist(); // Espera o elemento existir
        await $(`id:tab-${menu}`).click();
    }
}

export default new HomePage();
