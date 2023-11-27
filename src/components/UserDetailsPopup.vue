<template>
  <q-dialog v-model="alert" @hide="$emit('popup-closing')" >
    <q-card>
      <q-card-section>
        <p class="text-18">Personal Information </p>
        <div class="row">
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16">Name: <span class="text-blue-grey">{{user.name}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Father Name: <span class="text-blue-grey">{{user.father_name}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">CNIC: <span class="text-blue-grey">{{user.cnic}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Phone: <span class="text-blue-grey">{{user.phone_number}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Earning Role: <span class="text-blue-grey">{{user.earning_role == 1?'Job Holder':'Owner'}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Income: <span class="text-blue-grey">{{user.income}}</span></p>
          </div>
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <p class="text-18">Home Information</p>
        <div class="row">

          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Home Status: <span class="text-blue-grey">{{user.home_status == 2?'Owner':'Rental'}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Tenure: <span class="text-blue-grey">{{user.home_address_tenure}}</span></p>
          </div>
          <div class="col-12">
            <p class="q-mb-sm text-blue-grey-7 text-16">Home Address: <span class="text-blue-grey">{{user.home_address}}</span></p>
          </div>
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section v-if="user.role == 1">
        <p class="text-18">Work Information </p>
        <div class="row">
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16">Job Title: <span class="text-blue-grey">{{user.job_title}}</span></p>
          </div>
          <div class="col-6">
            <p class="q-mb-sm text-blue-grey-7 text-16 ">Job Tenure: <span class="text-blue-grey">{{user.job_tenure}}</span></p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props:['user','status'],
  data(){
    return{
      alert:true,
    }
  },
  created() {
    this.alert = this.status;
  }
}
</script>
