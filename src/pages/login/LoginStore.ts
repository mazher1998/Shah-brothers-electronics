import { loginApiService } from './LoginApiService';

import { defineStore } from 'pinia';
interface loginData {
  cnic:string,
  password:string
}

export const LoginStore = defineStore('Login', {
  state: () => ({
    loginState:'loginCredentials',
    userData:{},
    verify_method:0,
    loginResponse:{},
  }),
  actions: {
    async login(data: loginData) {
      return loginApiService.login(data)
        .then(response =>{
          return response;
        })
        .catch((e)=>{
          console.log('error',e);
          throw e.response.data;
        });
    },

  },
});
