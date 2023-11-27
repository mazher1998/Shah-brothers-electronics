import { createPinia } from 'pinia';
import { LoginStore } from 'src/pages/login/LoginStore'; // Import all other module stores

const pinia = createPinia();

export const store = pinia;

export function useStore() {
  return {
    login: LoginStore(),
  };
}
