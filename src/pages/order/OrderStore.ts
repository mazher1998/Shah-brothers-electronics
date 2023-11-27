import { OrderApiService } from './OrderApiService';
// import {saveToken} from "../../services/JwtService";

import { defineStore } from 'pinia';

interface orderData{
  name:string,
  model:string,
  serial_no:string,
  type:number,
  product_amount:number,
  plan_type:number,
  percentage:number,
  total_amount:number,
  advance_amount:number,
  remaining_amount:number,
  period_of_installments:number,
  due_date:string,
  renter_id:number,
  guarantor_one_id:number,
  guarantor_two_id:number,
  rental_employee_id:number,
}
interface updateOrderData{
  id:number
  name:string,
  model:string,
  serial_no:string,
  type:number,
  product_amount:number,
  plan_type:number,
  percentage:number,
  total_amount:number,
  advance_amount:number,
  remaining_amount:number,
  period_of_installments:number,
  due_date:string,
  renter_id:number,
  guarantor_one_id:number,
  guarantor_two_id:number,
  rental_employee_id:number,
}
interface deleteOrderData{
  id:string
}
export const OrderStore = defineStore('Order', {
  state: () => ({
    orders:[],
    orderToDelete:null,
    orderToUpdate:null,
    renter_id:0,
    guarantor_one_id:0,
    guarantor_two_id:0,
    rental_employee_id:0,
  }),
  actions: {
    async getOrders() {
      return OrderApiService.getOrders()
        .then(response =>{
          this.orders = response.data.data;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async addOrder(data : orderData) {
      return OrderApiService.addOrder(data)
        .then(response =>{
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async updateOrder(data : updateOrderData) {
      return OrderApiService.updateOrder(data)
        .then(response =>{
          this.orderToUpdate = null;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async deleteOrder(data : deleteOrderData) {
      return OrderApiService.deleteOrder(data)
        .then(response =>{
          this.orders.splice(this.orders.findIndex(order=>order.id === this.orderToDelete),1);
          this.orderToDelete = null;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
  },
});
