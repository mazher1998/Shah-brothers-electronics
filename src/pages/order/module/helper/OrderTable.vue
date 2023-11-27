<template>
  <div class="q-py-md">
    <q-table
      flat bordered
      :rows="orderStore.orders"
      :columns="columns"
      row-key="id"
      :visible-columns="visibleColumns"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <div v-if="col.name === 'type'">
              {{col.value == 1?'Cash':'Installment'}}
            </div>
            <div v-else-if="col.name === 'plan_type'">
              <p class="q-ma-none" v-if="col.value == 1">Daily</p>
              <p class="q-ma-none" v-else-if="col.value == 2">Monthly</p>
            </div>
            <div v-else-if="col.name === 'renter' || col.name === 'guarantor_one' || col.name === 'guarantor_three' || col.name === 'rental'" class="cursor-pointer" @click="showDetails = true;shoeDetailsOf = col.value;">
              {{col.value?.cnic}}
            </div>

            <div v-else-if="col.name === 'Actions'">
              <q-btn size="sm" color="blue" round dense icon="edit" @click="orderStore.orderToUpdate = props.key; $router.push('/add-edit-order')" />
              <q-btn class="q-ml-sm" @click="orderStore.orderToDelete = props.key; deleteDialog = true;" size="sm" color="red" round dense icon="delete" />
            </div>
            <div v-else>
              {{ col.value }}
            </div>

          </q-td>
        </q-tr>
      </template>

      <template v-slot:top-right>
        <q-space />
        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>

    </q-table>
    <q-dialog v-model="deleteDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-grey-3 q-pt-md" style="width: 300px">
        <q-card-section class="q-pt-none text-grey-14">
          Are you sure you want to delete <span class="text-black text-weight-medium">{{ orderStore.orders.find(order => order.id === orderStore.orderToDelete).name }}</span>.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn class="bg-grey-5 text-white" flat label="No" v-close-popup />
          <q-btn class="bg-red-7 text-black" flat label="Yes" @click="deleteOrder"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div v-if="showDetails">
      <UserDetailsPopup :user="shoeDetailsOf" :status="showDetails" @popup-closing="showDetails=false"></UserDetailsPopup>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {store} from 'src/store/store'
import { OrderStore } from 'pages/order/OrderStore';
import UserDetailsPopup from 'components/UserDetailsPopup.vue';
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'model', align: 'center', label: 'Model', field: 'model', sortable: true },
  { name: 'serial_no', label: 'Serial Number', field: 'serial_no', sortable: true },
  { name: 'type', label: 'Type', field: 'type' },
  { name: 'product_amount', label: 'Product Amount', field: 'product_amount' },
  { name: 'plan_type', label: 'Plan Type', field: 'plan_type' },
  { name: 'percentage', label: 'Percentage', field: 'percentage'},
  { name: 'total_amount', label: 'Total Amount', field: 'total_amount'},
  { name: 'advance_amount', label: 'Advance Amount', field: 'advance_amount' },
  { name: 'remaining_amount', label: 'Remaining Amount', field: 'remaining_amount' },
  { name: 'period_of_installments', label: 'Installments', field: 'period_of_installments' },
  { name: 'due_date', label: 'Due Date', field: 'due_date' },
  { name: 'renter', label: 'Renter', field: 'renter' },
  { name: 'guarantor_one', label: 'Guarantor 1', field: 'guarantor_one' },
  { name: 'guarantor_three', label: 'Guarantor 2', field: 'guarantor_three' },
  { name: 'rental', label: 'Rental Employee', field: 'rental'},
  { name: 'Actions', label: 'Actions', field: '' ,required: true, },
  { name: 'id', label: 'Actions', field: 'id' ,required: false, },
]
export default {
  setup () {
    const orderStore = OrderStore(store);
    return {
      visibleColumns: ref([ 'product_amount', 'percentage','total_amount', 'advance_amount', 'remaining_amount', 'period_of_installments', 'renter_id', 'guarantor_one_id', 'guarantor_two_id', 'rental_employee_id' ]),
      columns,
      orderStore
    }
  },
  components:{
    UserDetailsPopup,
  },
  data(){
    return{
      deleteDialog:false,
      showDetails:false,
      shoeDetailsOf:{},
    }
  },
  methods:{
    async deleteOrder(){

      const order =  this.orderStore.orders.find(order => order.id === this.orderStore.orderToDelete)
      try {
        await this.orderStore.deleteOrder({id:order.id}).then(e => {
          this.deleteDialog = false;
          console.log(e)
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
