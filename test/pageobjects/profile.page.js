import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Subpágina contendo seletores e métodos específicos para a página de perfil
 */
class ProfilePage extends Page {
   async profileName(name) {
      const profileElement = await $(`//android.widget.TextView[@text="${name}"]`);
      await profileElement.waitForExist(); // Espera o elemento existir
      return profileElement;
   }
}

export default new ProfilePage();
