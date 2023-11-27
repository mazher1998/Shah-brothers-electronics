import {api} from 'boot/axios';

export const UserApiService = {
  getUsers: () => {
    return api({
      url: '/users/list',
      method: 'get'
    });
  },
  deleteUser: (data: any) => api.post('/users/delete/'+data.id),

  getUser: (data: any) => api.get('/users/details-by-cnic/'+data.cnic),

  addUser: (data: any) => api.post('/users/add', data),

  updateUser: (data: any) => api.post('/users/update/'+data.get('id'),data),
};
// await this.$auth.login( {email, password}).then(e=>{
//   console.log(e)
// })
