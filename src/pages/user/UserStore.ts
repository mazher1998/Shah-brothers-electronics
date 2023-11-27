import { UserApiService } from './UserApiService';
// import {saveToken} from "../../services/JwtService";

import { defineStore } from 'pinia';

interface userData{
  role:number,
  name:string,
  father_name:string,
  cnic:number,
  phone_number:number,
  earning_role:number,
  income:number,
  home_address:string,
  home_address_tenure:string,
  home_status:number,
  work_address:string,
  work_organization_name:string,
  job_title:string,
  job_tenure:string,
}
interface userUpdateData{
  id:number,
  role:number,
  name:string,
  father_name:string,
  cnic:number,
  phone_number:number,
  earning_role:number,
  income:number,
  home_address:string,
  home_address_tenure:string,
  home_status:number,
  work_address:string,
  work_organization_name:string,
  job_title:string,
  job_tenure:string,
}
interface deleteUserData{
  id:string
}
interface getSingleUserData{
  cnic:number
}
export const UserStore = defineStore('User', {
  state: () => ({
    users:[],
    userToDelete:null,
    userToUpdate:null,
  }),
  actions: {
    async getUsers() {
      return UserApiService.getUsers()
        .then(response =>{
          this.users = response.data.data;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async getUser(data: getSingleUserData) {
      return UserApiService.getUser(data)
          .then(response =>{
            return response;
          })
          .catch((e)=>{
            throw e.response.data;
          });
    },
    async addUser(data : userData) {
      return UserApiService.addUser(data)
        .then(response =>{
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async updateUser(data : userUpdateData) {

      return UserApiService.updateUser(data)
        .then(response =>{
          this.userToUpdate = null;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
    async deleteUser(data : deleteUserData) {
      return UserApiService.deleteUser(data)
        .then(response =>{
          this.users.splice(this.users.findIndex(user => user.cnic === this.userToDelete),1);
          this.userToDelete = null;
          return response;
        })
        .catch((e)=>{
          throw e.response.data;
        });
    },
  },
});
