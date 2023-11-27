<template>
  <div class="q-pa-xl">

    <div class="flex ">
      <p>{{this.userStore.userToUpdate !== null ? 'Update User' : 'Add User'}}</p>
    </div>
    <div class="row justify-center">
      <div class="col-8">
        <p>User Information</p>
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-4 ">
          <q-input
            filled
            v-model="UserInfo.name"
            label="Name"
            :error="!!(v$.UserInfo.name.$error || errorMessage?.name)"
            :error-message="this.errorMessage.name ? this.errorMessage.name[0] : null"
          />
        </div>
        <div class="col-4">
          <q-input
            filled
            v-model="UserInfo.father_name"
            label="Father Name"
            :error="!!(v$.UserInfo.father_name.$error || errorMessage?.father_name)"
            :error-message="this.errorMessage.father_name ? this.errorMessage.father_name[0] : null"
          />
        </div>
        <div class="col-4">
          <q-file
            name="poster_file"
            v-model="UserInfo.cnic_front_side_image"
            filled label="Upload front image of your CNIC"
            :error="!!(v$.UserInfo.cnic_front_side_image.$error || errorMessage?.cnic_front_side_image)"
            :error-message="this.errorMessage.cnic_front_side_image ? this.errorMessage.cnic_front_side_image[0] : null"
          />
        </div>
      </div>
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-4">
          <q-input
            filled
            v-model="UserInfo.cnic"
            label="CNIC"
            :error="!!(v$.UserInfo.cnic.$error || errorMessage?.cnic)"
            :error-message="this.errorMessage.cnic ? this.errorMessage.cnic[0] : null"
          />
        </div>
        <div class="col-4">
          <q-input
            filled
            v-model="UserInfo.phone_number"
            label="Number"
            :error="!!(v$.UserInfo.phone_number.$error || errorMessage?.phone_number)"
            :error-message="this.errorMessage.phone_number ? this.errorMessage.phone_number[0] : null"
          />
        </div>
        <div class="col-4">
          <q-file
            name="poster_file"
            v-model="UserInfo.cnic_back_side_image"
            filled label="Upload back image of your CNIC"
            :error="!!(v$.UserInfo.cnic_back_side_image.$error || errorMessage?.cnic_back_side_image)"
            :error-message="this.errorMessage.cnic_back_side_image ? this.errorMessage.cnic_back_side_image[0] : null"
          />
        </div>
      </div>
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-4">
          <q-select
            filled
            v-model="UserInfo.earning_role"
            :options="earning_role"
            label="Type"
            :error="!!(v$.UserInfo.earning_role.$error || errorMessage?.earning_role)"
            :error-message="this.errorMessage.earning_role ? this.errorMessage.earning_role[0] : null"
            emit-value
            map-options
          />
        </div>
        <div class="col-4">
          <q-input
            filled
            v-model="UserInfo.income"
            label="Income"
            :error="!!(v$.UserInfo.income.$error || errorMessage?.income)"
            :error-message="this.errorMessage.income ? this.errorMessage.income[0] : null"
          />
        </div>
        <div class="col-4">
          <q-select
            filled
            v-model="UserInfo.role"
            :options="role"
            label="Role"
            :error="!!(v$.UserInfo.role.$error || errorMessage?.role)"
            :error-message="this.errorMessage.role ? this.errorMessage.role[0] : null"
            emit-value
            map-options
          />
        </div>
      </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-8">
        <p>Home Address</p>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-input
              filled
              v-model="UserInfo.home_address"
              label="Address"
              :error="!!(v$.UserInfo.home_address.$error || errorMessage?.home_address)"
              :error-message="this.errorMessage.home_address ? this.errorMessage.home_address[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
              filled
              v-model="UserInfo.home_address_tenure"
              label="Years of your stay"
              :error="!!(v$.UserInfo.home_address_tenure.$error || errorMessage?.home_address_tenure)"
              :error-message="this.errorMessage.home_address_tenure ? this.errorMessage.home_address_tenure[0] : null"
            />
          </div>
          <div class="col-4">
            <q-select
              filled
              v-model="UserInfo.home_status"
              :options="home_status"
              label="Status"
              :error="!!(v$.UserInfo.home_status.$error || errorMessage?.home_status)"
              :error-message="this.errorMessage.home_status ? this.errorMessage.home_status[0] : null"
              emit-value
              map-options
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="UserInfo.role == 1" class="row justify-center">
      <div class="col-8">
        <p>Work Information</p>
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-4 ">
            <q-input
              filled
              v-model="UserInfo.work_organization_name"
              label="Office Name"
              :error="!!(v$.UserInfo.work_organization_name.$error || errorMessage?.work_organization_name)"
              :error-message="this.errorMessage.work_organization_name ? this.errorMessage.work_organization_name[0] : null"
            />
          </div>
          <div class="col-4 ">
            <q-input
              filled
              v-model="UserInfo.work_address"
              label="Work Address"
              :error="!!(v$.UserInfo.work_address.$error || errorMessage?.work_address)"
              :error-message="this.errorMessage.work_address ? this.errorMessage.work_address[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
              filled
              v-model="UserInfo.job_title"
              label="Job Title"
              :error="!!(v$.UserInfo.job_title.$error || errorMessage?.job_title)"
              :error-message="this.errorMessage.job_title ? this.errorMessage.job_title[0] : null"
            />
          </div>
          <div class="col-4">
            <q-input
              filled
              v-model="UserInfo.job_tenure"
              label="Years of Work"
              :error="!!(v$.UserInfo.job_tenure.$error || errorMessage?.job_tenure)"
              :error-message="this.errorMessage.job_tenure ? this.errorMessage.job_tenure[0] : null"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-8 flex justify-end">
        <q-btn color="teal" :label="this.userStore.userToUpdate !== null ? 'Update User' : 'Add User'" @click="addUser" />
      </div>
    </div>
  </div>
</template>
<script>
import {store} from 'src/store/store'
import { UserStore } from 'pages/user/UserStore';
import {numeric, required} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
export default {
  setup() {
    const userStore = UserStore(store);
    const v$ = useVuelidate();
    return {
      v$,
      userStore,
    };
  },
    data(){
      return{
        UserInfo:{
        },
        earning_role: [
          {
            label: 'Job Holder',
            value: 1
          },
          {
            label: 'Owner',
            value: 2
          },
        ],
        home_status: [
          {
            label: 'Rental',
            value: 1
          },
          {
            label: 'Owner',
            value: 2
          },
        ],
        role:[
          {
            label: 'Customer',
            value: 1
          },
          {
            label: 'Employee',
            value: 2
          },
        ],
        errorMessage:{}
      }
    },
  methods:{
    async addUser() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        console.log(this.v$);
        return;
      }
      try {
        const formData = this.createFormData();
        if(this.userStore.userToUpdate != null){
          await this.userStore.updateUser(formData).then(e => {
            this.$router.push('/user')
          })
        }else {
          await this.userStore.addUser(formData).then(e => {
            this.$router.push('/user')
          })
        }
      } catch (e) {
        this.errorMessage = e.errors;
      }

    },
    createFormData(){
      const formData = new FormData();
      formData.append('role', this.UserInfo.role);
      formData.append('name', this.UserInfo.name);
      formData.append('father_name', this.UserInfo.father_name);
      formData.append('cnic', this.UserInfo.cnic);
      formData.append('cnic_front_side_image', this.UserInfo.cnic_front_side_image);
      formData.append('cnic_back_side_image', this.UserInfo.cnic_back_side_image);
      formData.append('phone_number', this.UserInfo.phone_number);
      formData.append('earning_role', this.UserInfo.earning_role);
      formData.append('income', this.UserInfo.income);
      formData.append('home_address', this.UserInfo.home_address);
      formData.append('home_address_tenure', this.UserInfo.home_address_tenure);
      formData.append('home_status', this.UserInfo.home_status);
      if(this.UserInfo.role == 1){
        formData.append('work_organization_name', this.UserInfo.work_organization_name);
        formData.append('work_address', this.UserInfo.work_address);
        formData.append('job_title', this.UserInfo.job_title);
        formData.append('job_tenure', this.UserInfo.job_tenure);

      }
      if(this.userStore.userToUpdate != null) {
          formData.append('id', this.UserInfo.id);
      }
      return formData;
    }
    },
  created(){
    if(this.userStore.userToUpdate != null){
      this.UserInfo =  this.userStore.users.find(user => user.cnic === this.userStore.userToUpdate);
    }
  },
  validations() {
    const isCustomer = this.UserInfo.role == 1;
    return {
      UserInfo: {
        role: {required, $lazy: true, numeric},
        name: {required, $lazy: true},
        father_name: {required, $lazy: true,},
        cnic: {required, $lazy: true, numeric},
        cnic_front_side_image: {required, $lazy: true,},
        cnic_back_side_image: {required, $lazy: true,},
        phone_number: {required, $lazy: true, numeric},
        earning_role: {required, $lazy: true, numeric},
        income: {required, $lazy: true, numeric},
        home_address: {required, $lazy: true,},
        home_address_tenure: {required, $lazy: true,},
        home_status: {required, $lazy: true, numeric},
        work_organization_name: isCustomer ? { required, $lazy: true } : {},
        work_address: isCustomer ? { required, $lazy: true } : {},
        job_title: isCustomer ? { required, $lazy: true } : {},
        job_tenure: isCustomer ? { required, $lazy: true, numeric } : {},
      },
    };
  },
}
</script>
