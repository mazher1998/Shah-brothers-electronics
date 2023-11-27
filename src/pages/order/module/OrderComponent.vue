<template>
  <div class="q-pa-xl">
    <div class="flex justify-between">
      <p class="text-20 text-weight-bold"> Order List</p>
      <q-btn outline color="primary" label="Create Order" @click="$router.push('/add-edit-order');orderStore.orderToUpdate = null;"/>
    </div>
    <OrderTable></OrderTable>
  </div>
</template>
<script>
import OrderTable from 'pages/order/module/helper/OrderTable.vue';
import {store} from 'src/store/store'
import { OrderStore } from 'pages/order/OrderStore';
export default {
  setup () {
    const orderStore = OrderStore(store);
    return {
      orderStore
    }
  },
  components:{
    OrderTable,
  },
  methods: {
    async getOrders() {
      try {
        await this.orderStore.getOrders().then(e => {
          console.log(e)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.getOrders();
  }
}
</script>
