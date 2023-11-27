<template>
  <div class="full-height">
    <div class="row justify-center items-center">
      <div class="col-4 col-sm-4 col-xs-4">

        <div class="q-gutter-md">
          <h3 class="text-weight-bold text-090914 text-36 q-mb-none">Login</h3>
          <p class="text-16 q-mt-none text-52525B">Welcome Back! Let’s get into your account.</p>
          <q-input
            style="width: 100%;"
            v-model="CNIC"
            :error="!!(v$.CNIC.$error || errorMessage?.cnic)"
            :error-message="this.errorMessage.cnic ? this.errorMessage.cnic[0] : null"
            label="CNIC"
            filled
          />
          <q-input
            style="width: 100%;"
            v-model="password"
            :error="!!(v$.password.$error || errorMessage?.password)"
            :error-message="this.errorMessage.password ? this.errorMessage.password[0] : null"
            label="Password"
            type="password"
            filled
          />
          <p v-if="!loginStore.loginResponse.success">{{loginStore.loginResponse.message}}</p>
          <q-btn color="dark border-radius-6 q-mt-xl text-capitalize text-weight-light text-16" label="Login"  @click="login" style="width: 100%; height:3.25rem;" />
        </div>
        <div class="row justify-between items-center q-mt-md">
          <p class="text-14 text-primary q-mb-none cursor-pointer" @click="loginStore.loginState = 'forgetPassword'">Forget password?</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import {store} from 'src/store/store'
import { LoginStore } from 'pages/login/LoginStore';
import {saveToken} from 'src/service/JwtService';
export default defineComponent({
  name: 'LoginPage',
  setup() {
    const v$ = useVuelidate();
    const loginStore = LoginStore(store);
    return {
      v$,
      loginStore,

    };
  },
  data() {
    return {
      rememberMe:false,
      CNIC: '',
      password: '',
      errorMessage:{},
    };
  },
  computed: {
    cnicErrorMessage() {
      if (this.errorMessage.cnic) {
        console.log(this.errorMessage.cnic[0])
        return this.errorMessage.cnic[0];
      } else {
        return null; // or an appropriate default error message
      }
    },
    passwordErrorMessage() {
      if (this.errorMessage.password) {
        console.log(this.errorMessage.password[0])
        return this.errorMessage.password[0];
      } else {
        return null; // or an appropriate default error message
      }
    }
  },
  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        console.log(this.v$);
        return;
      }
      try {
        await this.loginStore.login({cnic:this.CNIC,password:this.password}).then(e=>{
          console.log("dssdsdds")
          saveToken(e.data.token);
          this.$router.push('/dashboard')
        })
      } catch (e) {
        this.errorMessage = e.errors;
      }

    },
  },
  validations() {
    return {
      password: {
        required,
        $lazy: true,
      },
      CNIC: {
        required,
        $lazy: true,
      },
    };
  },
});
</script>
