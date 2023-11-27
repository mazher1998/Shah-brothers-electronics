<template>
  <div class="q-py-md">
    <q-table
      flat bordered
      :rows="userStore.users"
      :columns="columns"
      row-key="cnic"
      :visible-columns="visibleColumns"
    >


      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
            <div v-if="col.name === 'Actions'">
              <q-btn size="sm" color="blue" round dense icon="edit" @click="userStore.userToUpdate = props.key; $router.push('/add-edit-user')" />
              <q-btn class="q-ml-sm" @click="userStore.userToDelete = props.key; deleteDialog = true;" size="sm" color="red" round dense icon="delete" />
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
          Are you sure you want to delete <span class="text-black text-weight-medium">{{userStore.users.find(item => item.cnic === userStore.userToDelete).name}}</span>.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn class="bg-grey-5 text-white" flat label="No" v-close-popup />
          <q-btn class="bg-red-7 text-black" flat label="Yes" @click="deleteUser"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import {store} from 'src/store/store'
import { UserStore } from 'pages/user/UserStore';
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
  { name: 'father_name', align: 'center', label: 'Father Name', field: 'father_name', sortable: true },
  { name: 'cnic', label: 'CNIC', field: 'cnic', sortable: true },
  { name: 'phone_number', label: 'Phone Number', field: 'phone_number' },
  { name: 'earning_role', label: 'Role', field: 'earning_role' },
  { name: 'income', label: 'Income', field: 'income' },
  { name: 'home_address', label: 'Home Address', field: 'home_address'},
  { name: 'home_address_tenure', label: 'Home Tenure', field: 'home_address_tenure'},
  { name: 'home_status', label: 'Home Status', field: 'home_status' },
  { name: 'work_address', label: 'Work Address', field: 'work_address' },
  { name: 'job_title', label: 'Job Title', field: 'job_title' },
  { name: 'job_tenure', label: 'Job Tenure', field: 'job_tenure' },
  { name: 'status', label: 'Status', field: 'status' },
  { name: 'Actions', label: 'Actions', field: '' ,required: true, },
]



export default {
  setup () {
    const userStore = UserStore(store);
    return {
      userStore,
      visibleColumns: ref([ 'father_name', 'cnic', 'phone_number', 'home_address', 'work_address']),
      columns,
    }
  },
  data(){
    return{
      deleteDialog:false,
    }
  },
  methods:{
    async deleteUser(){

      const user =  this.userStore.users.find(item => item.cnic === this.userStore.userToDelete)
      try {
        await this.userStore.deleteUser({id:user.id}).then(e => {
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
