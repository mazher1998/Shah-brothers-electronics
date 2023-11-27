<template>
  <div class="q-pa-xl">

    <div class="flex">
      <p>{{this.orderStore.orderToUpdate != null?'Update Order':'Create Order'}}</p>
    </div>
    <div class="row justify-center">
      <div class="col-8">
        <p>Product Information</p>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-input
                filled
                v-model="orderInfo.name"
                label="Name"
                :error="!!(v$.orderInfo.name.$error || errorMessage?.name)"
                :error-message="this.errorMessage.name ? this.errorMessage.name[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                filled
                v-model="orderInfo.model"
                label="Model"
                :error="!!(v$.orderInfo.model.$error || errorMessage?.model)"
                :error-message="this.errorMessage.model ? this.errorMessage.model[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                filled
                v-model="orderInfo.serial_no"
                label="Serial Number"
                :error="!!(v$.orderInfo.serial_no.$error || errorMessage?.serial_no)"
                :error-message="this.errorMessage.serial_no ? this.errorMessage.serial_no[0] : null"
            />
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4">
            <q-input
                filled
                v-model="orderInfo.product_amount"
                label="Amount"
                :error="!!(v$.orderInfo.product_amount.$error || errorMessage?.product_amount)"
                :error-message="this.errorMessage.product_amount ? this.errorMessage.product_amount[0] : null"
            />
          </div>
          <div class="col-4">
            <q-select
                filled
                v-model="orderInfo.type"
                :options="options"
                label="Type"
                emit-value
                map-options
                :error="!!(v$.orderInfo.type.$error || errorMessage?.type)"
                :error-message="this.errorMessage.type ? this.errorMessage.type[0] : null"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center" v-if="orderInfo.type == 2">
      <div class="col-8">
        <p>Instalment Information</p>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-select
                filled
                v-model="orderInfo.plan_type"
                :options="planType"
                label="PLan Type"
                emit-value
                map-options
                :error="!!(v$.orderInfo.plan_type.$error || errorMessage?.plan_type)"
                :error-message="this.errorMessage.plan_type ? this.errorMessage.plan_type[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                filled
                v-model="orderInfo.percentage"
                label="Percentage"
                :error="!!(v$.orderInfo.percentage.$error || errorMessage?.percentage)"
                :error-message="this.errorMessage.percentage ? this.errorMessage.percentage[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                readonly
                filled
                v-model="orderInfo.total_amount"
                label="Total Amount"
                :error="!!(v$.orderInfo.total_amount.$error || errorMessage?.total_amount)"
                :error-message="this.errorMessage.total_amount ? this.errorMessage.total_amount[0] : null"
            />
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-input
                filled
                v-model="orderInfo.advance_amount"
                label="Advance"
                :error="!!(v$.orderInfo.advance_amount.$error || errorMessage?.advance_amount)"
                :error-message="this.errorMessage.advance_amount ? this.errorMessage.advance_amount[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                readonly
                filled
                v-model="orderInfo.remaining_amount"
                label="Remaining"
                :error="!!(v$.orderInfo.remaining_amount.$error || errorMessage?.remaining_amount)"
                :error-message="this.errorMessage.remaining_amount ? this.errorMessage.remaining_amount[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
                filled
                v-model="orderInfo.period_of_installments"
                label="Periods of instalment (in months)"
                :error="!!(v$.orderInfo.period_of_installments.$error || errorMessage?.period_of_installments)"
                :error-message="this.errorMessage.period_of_installments ? this.errorMessage.period_of_installments[0] : null"
            />
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-input
                readonly
                filled
                v-model="orderInfo.due_date"
                label="Due Date"
                type="date"
                :error="!!(v$.orderInfo.due_date.$error || errorMessage?.due_date)"
                :error-message="this.errorMessage.due_date ? this.errorMessage.due_date[0] : null"

            />
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-2 flex items-center">
            <p class="q-ma-none">Renter</p>
          </div>
          <div class="col-6">
            <q-input
                filled
                v-model="orderInfo.renter_id"
                label="CNIC"
                :error="!!(v$.orderInfo.renter_id.$error || errorMessage?.renter_id)"
                :error-message="this.errorMessage.renter_id ? this.errorMessage.renter_id[0] : null"
            />
          </div>
          <div class="col-2 flex items-center">
            <q-btn flat color="primary" label="View" @click="getUserDetails(orderInfo.renter_id)"/>
          </div>
          <div>
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-2 flex items-center">
            <p class="q-ma-none">Guarantor 1</p>
          </div>
          <div class="col-6">
            <q-input
                filled
                v-model="orderInfo.guarantor_one_id"
                label="CNIC"
                :error="!!(v$.orderInfo.guarantor_one_id.$error || errorMessage?.guarantor_one_id)"
                :error-message="this.errorMessage.guarantor_one_id ? this.errorMessage.guarantor_one_id[0] : null"
            />
          </div>
          <div class="col-2 flex items-center">
            <q-btn flat color="primary" label="View" @click="getUserDetails(orderInfo.guarantor_one_id)"/>
          </div>
          <div>
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-2 flex items-center">
            <p class="q-ma-none">Guarantor 2</p>
          </div>
          <div class="col-6">
            <q-input
                filled
                v-model="orderInfo.guarantor_two_id"
                label="CNIC"
                :error="!!(v$.orderInfo.guarantor_two_id.$error || errorMessage?.guarantor_two_id)"
                :error-message="this.errorMessage.guarantor_two_id ? this.errorMessage.guarantor_two_id[0] : null"
            />
          </div>
          <div class="col-2 flex items-center">
            <q-btn flat color="primary" label="View" @click="getUserDetails(orderInfo.guarantor_two_id)"/>
          </div>
          <div>
          </div>
        </div>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-2 flex items-center">
            <p class="q-ma-none">Investigator Officer</p>
          </div>
          <div class="col-6">
            <q-input
                filled
                v-model="orderInfo.rental_employee_id"
                label="CNIC"
                :error="!!(v$.orderInfo.rental_employee_id.$error || errorMessage?.rental_employee_id)"
                :error-message="this.errorMessage.rental_employee_id ? this.errorMessage.rental_employee_id[0] : null"
            />
          </div>
          <div class="col-2 flex items-center">
            <q-btn flat color="primary" label="View" @click="getUserDetails(orderInfo.rental_employee_id)"/>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-8 flex justify-end">
        <q-btn color="teal" :label="this.orderStore.orderToUpdate != null?'Update':'Create'" @click="createOrder"/>
      </div>
    </div>
    <div v-if="showDetails">
      <UserDetailsPopup :user="shoeDetailsOf" :status="showDetails" @popup-closing="showDetails=false"></UserDetailsPopup>
    </div>
    <q-dialog v-model="activeLoader" persistent>
      <q-circular-progress
        indeterminate
        rounded
        size="200px"
        color="primary"
        class="circular-proogress"
      />
    </q-dialog>

  </div>
</template>
<script>
import {store} from 'src/store/store'
import { OrderStore } from 'pages/order/OrderStore';
import { UserStore } from 'pages/user/UserStore';
import {useVuelidate} from '@vuelidate/core';
import {numeric, required} from '@vuelidate/validators';
import UserDetailsPopup from 'components/UserDetailsPopup.vue';
import { useQuasar } from 'quasar'
export default {
  components: {UserDetailsPopup},
  setup() {
    const orderStore = OrderStore(store);
    const userStore = UserStore(store);
    const v$ = useVuelidate();
    const $q = useQuasar()
    return {
      v$,
      orderStore,
      userStore,
      $q
    };
  },
  data(){
    return{
      orderInfo:{},
      errorMessage:{},
      showDetails:false,
      shoeDetailsOf:{},
      activeLoader:false,
      options: [
        {
          label: 'Cash',
          value: 1
        },
        {
          label: 'Installment',
          value: 2
        },
      ],
      planType: [
        {
          label: 'Monthly',
          value: 1
        },
        {
          label: 'Daily',
          value: 2
        }
      ]
    }
  },
  watch: {
    'orderInfo.product_amount': 'calculateTotalAmount',
    'orderInfo.percentage': 'calculateTotalAmount',
    'orderInfo.advance_amount': 'calculateRemainingAmount',
    'orderInfo.period_of_installments': 'calculateDueDate',
  },
  methods:{
    calculateTotalAmount() {
      const { product_amount, percentage } = this.orderInfo;
      if(this.orderInfo.type == 2){
        this.orderInfo.total_amount = Number(product_amount) + Number((product_amount * (percentage / 100)));
        this.calculateRemainingAmount();
      }
    },
    calculateRemainingAmount() {
      if(this.orderInfo.type == 2) {
        const {total_amount, advance_amount} = this.orderInfo;
        let remaining = Number(total_amount) - Number(advance_amount);
        if(remaining>=0){
          this.orderInfo.remaining_amount = remaining;
        }else{
          this.orderInfo.remaining_amount = 0;
        }
      }
    },
    calculateDueDate(){
      let date = new Date();
      date = this.addMonths(date,Number(this.orderInfo.period_of_installments));
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      this.orderInfo.due_date  = `${year}-${month}-${day}`;
    },
    addMonths (date, count) {
      const years = Math.floor(count / 12);
      const months =  count - (years * 12);
      if(years) date.setFullYear(date.getFullYear()+years);
      if(months) date.setMonth(date.getMonth() + months)
      return date
    },
    async getUserDetails(cnic){
      try {
          await this.userStore.getUser({cnic:Number(cnic)}).then(e => {
            this.showDetails = true;
            this.shoeDetailsOf = e.data.data;
          })
      } catch (e) {
        this.$q.notify(e.message);
      }
    },
    async getAllUserDetails(cnic){
      try {
        await this.userStore.getUser({cnic:Number(cnic[0])}).then(e => {
          this.orderInfo.renter_id = e.data.data.id;
        })
      } catch (e) {
        this.$q.notify(e.message);
      }
      try {
        await this.userStore.getUser({cnic:Number(cnic[1])}).then(e => {
          this.orderInfo.guarantor_one_id = e.data.data.id;
        })
      } catch (e) {
        this.$q.notify(e.message);
      }
      try {
        await this.userStore.getUser({cnic:Number(cnic[2])}).then(e => {
          this.orderInfo.guarantor_two_id = e.data.data.id;
        })
      } catch (e) {
        this.$q.notify(e.message);
      }
      try {
        await this.userStore.getUser({cnic:Number(cnic[3])}).then(e => {
          this.orderInfo.rental_employee_id = e.data.data.id;
        })
      } catch (e) {
        this.$q.notify(e.message);
      }
    },
    async createOrder() {
      this.activeLoader = true;
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) {
        console.log(this.v$);
        this.activeLoader = false;
        return;
      }
      const cnic = [this.orderInfo.renter_id,this.orderInfo.guarantor_one_id,this.orderInfo.guarantor_two_id,this.orderInfo.rental_employee_id];
      try {
        await this.getAllUserDetails([this.orderInfo.renter_id,this.orderInfo.guarantor_one_id,this.orderInfo.guarantor_two_id,this.orderInfo.rental_employee_id]);
        if (this.orderStore.orderToUpdate != null) {
          await this.orderStore.updateOrder(this.orderInfo).then(e => {
            this.$router.push('/order')
          })
        } else {
          await this.orderStore.addOrder(this.orderInfo).then(e => {
            this.$router.push('/order')
          })
        }
        this.activeLoader = false;
      } catch (e) {
        this.errorMessage = e.errors;
        this.activeLoader = false;
        this.orderInfo.renter_id = cnic[0];
        this.orderInfo.guarantor_one_id = cnic[1];
        this.orderInfo.guarantor_two_id = cnic[2];
        this.orderInfo.rental_employee_id = cnic[3];
      }
    }
  },
  created(){
    console.log('here2',this.orderStore.orderToUpdate)
    if(this.orderStore.orderToUpdate != null){
      this.orderInfo =  this.orderStore.orders.find(order => order.id === this.orderStore.orderToUpdate);
      this.orderInfo.renter_id = this.orderInfo.renter.cnic;
      this.orderInfo.guarantor_one_id = this.orderInfo.guarantor_one.cnic;
      this.orderInfo.guarantor_two_id = this.orderInfo.guarantor_three.cnic;
      this.orderInfo.rental_employee_id = this.orderInfo.rental.cnic;
    }
  },
  validations() {
    const isInstallment = this.orderInfo.type == 2;
    return {
      orderInfo: {
        name: { required, $lazy: true },
        model: { required, $lazy: true },
        serial_no: { required, $lazy: true },
        type: { required, $lazy: true, numeric },
        product_amount: { required, $lazy: true, numeric },
        plan_type: isInstallment ? { required, $lazy: true, numeric } : {},
        percentage: isInstallment ? { required, $lazy: true, numeric } : {},
        total_amount: isInstallment ? { required, $lazy: true, numeric } : {},
        advance_amount: isInstallment ? { required, $lazy: true, numeric } : {},
        remaining_amount: isInstallment ? { required, $lazy: true, numeric } : {},
        period_of_installments: isInstallment ? { required, $lazy: true, numeric } : {},
        due_date: isInstallment ? { required, $lazy: true } : {},
        renter_id: isInstallment ? { required, $lazy: true, numeric } : {},
        guarantor_one_id: isInstallment ? { required, $lazy: true, numeric } : {},
        guarantor_two_id: isInstallment ? { required, $lazy: true, numeric } : {},
        rental_employee_id: isInstallment ? { required, $lazy: true, numeric } : {},
      },
    };
  },


}
</script>
<style>
.circular-proogress{
  position: fixed;
  top: 35%;
  right: 50%;
  overflow: hidden !important;
}

</style>
