import {api} from 'boot/axios';

export const OrderApiService = {
  getOrders: () => {
    return api({
      url: '/orders/list',
      method: 'get'
    });
  },

  deleteOrder: (data: any) => api.post('/orders/delete/'+data.id),

  addOrder: (data: any) => api.post('/orders/add', data),

  updateOrder: (data: any) => api.post('/orders/update/'+data.id, data),
};
// await this.$auth.login( {email, password}).then(e=>{
//   console.log(e)
// })
