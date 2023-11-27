<template>
<div class="q-pa-xl">
  <div class="flex justify-between">
    <p class="text-20 text-weight-bold"> User List</p>
    <q-btn outline color="primary" label="Add User" @click="userStore.userToUpdate = null; $router.push('/add-edit-user');"/>
  </div>
<UserTable></UserTable>
</div>
</template>
<script>
import UserTable from 'pages/user/module/helper/UserTable.vue';
import {store} from 'src/store/store'
import { UserStore } from 'pages/user/UserStore';
export default {
  setup() {
    const userStore = UserStore(store);
    return {
      userStore,
    };
  },
components:{
  UserTable,
},
  methods: {
    async getUsers() {
      try {
        await this.userStore.getUsers().then(e => {
          console.log(e)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
  this.getUsers();
  }
}
</script>
