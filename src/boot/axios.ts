import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { getToken, destroyToken } from 'src/service/JwtService';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}
const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401 && error.response.data.code == 'TOKEN_EXPIRED') {
      destroyToken();
      window.location.href = '/#/login';
    }
    return Promise.reject(error);
  }
);
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['Accept'] = 'application/json';
  return config;
});
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;

});

export { api };
