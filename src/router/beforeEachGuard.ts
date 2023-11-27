import { NavigationGuard } from 'vue-router';
import {getToken} from 'src/service/JwtService';
// import Cookies from 'js-cookie';
const beforeEachGuard: NavigationGuard = (to, from, next) => {
  if (to.name !== 'Login' && !getToken()) {
    next({ name: 'Login' });
  } else {
    next();
  }
};
export default beforeEachGuard;
