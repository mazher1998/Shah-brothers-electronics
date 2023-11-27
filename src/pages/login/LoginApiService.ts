import {api} from 'boot/axios';

export const loginApiService = {
  login: (data: any) => {
    return api({
      url: '/login',
      method: 'post',
      data,
    });
  },

};
// await this.$auth.login( {email, password}).then(e=>{
//   console.log(e)
// })
