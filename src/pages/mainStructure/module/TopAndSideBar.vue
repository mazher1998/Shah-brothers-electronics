<template>
<!--  <NavHeader></NavHeader>-->
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="!drawer || miniState"
    :width="200"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <template v-slot:mini>
      <div class="column q-pt-xl q-pb-none window-height">
        <div class="col-1 flex justify-center">
          <q-card flat bordered class="bg-transparent q-pa-none" style="height: fit-content">
            <q-img height="2.063rem" width="2.063rem" src="src/assets/favIcon.jfif"/>
          </q-card>
        </div>
        <div class="col-10">
          <q-scroll-area class="fit mini-slot ">

            <div class="q-py-lg">
              <div class="column items-start">
                <q-icon name="home" class="mini-icon cursor-pointer" @click="$router.push('/dashboard');mainStructureStore.activeItem = 'Dashboard'"/>
                <q-icon name="person" class="mini-icon cursor-pointer" @click="$router.push('/user');mainStructureStore.activeItem = 'User';"/>
                <q-icon name="list" class="mini-icon cursor-pointer" to="/apps" @click="$router.push('/order');mainStructureStore.activeItem = 'Order';"/>
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div class="col-1">
          <q-img  src="src/assets/dashboard/unduitLogo.svg"/>
        </div>
      </div>
      <div class="absolute" style="top: 7.813rem; right: -1.163rem">
        <q-btn
          style="height: 1.375rem; width: 1.375rem"
          dense
          round
          unelevated
          class="fill-gradient"
          icon="chevron_right"
          @click="miniState = false"
        />
      </div>
    </template>
    <div class="column q-pt-xl q-pb-none window-height">
      <div class="col-3 flex justify-center">
        <q-card flat bordered class="bg-transparent q-pa-none" style="height: fit-content">
          <q-img fit="contain" height="7.5rem" width="9.063rem" src="src/assets/logoSBE.jfif"/>
        </q-card>
      </div>
      <div class="col-8">
        <q-scroll-area class="fit">
          <q-list padding >
            <q-item :active="mainStructureStore.activeItem === 'Dashboard'" clickable v-ripple @click="$router.push('/dashboard');mainStructureStore.activeItem = 'Dashboard';">
              <q-item-section>
                <div class="flex items-center">
                  <q-icon name="home" :color="mainStructureStore.activeItem === 'Dashboard'?'blue':'black'" class="mini-icon" />
                  Home
                </div>
              </q-item-section>
            </q-item>
            <q-item :active="mainStructureStore.activeItem === 'User'" clickable v-ripple @click="$router.push('/user');mainStructureStore.activeItem = 'User';">
              <q-item-section>
                <div class="flex items-center">
                  <q-icon name="person" :color="mainStructureStore.activeItem === 'User'?'blue':'black'" class="mini-icon" />
                  User
                </div>
              </q-item-section>
            </q-item>
            <q-item :active="mainStructureStore.activeItem === 'Order'" clickable v-ripple @click="$router.push('/order');mainStructureStore.activeItem = 'Order';">
              <q-item-section>
                <div class="flex items-center">
                  <q-icon name="list" :color="mainStructureStore.activeItem === 'Order'?'blue':'black'" class="mini-icon" />
                  Order
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
      <div class="col-1 row q-ml-lg">
        <div>
          <p class="text-10 text-1d1d1d opacity-5 q-mb-none ">powered by</p>
          <p class="text-14 text-1d1d1d opacity-5 q-mb-none text-weight-bold">Shah Brother Electronics</p>

        </div>
      </div>
    </div>
    <div class="absolute" style="top: 7.813rem; right: -1.163rem">
      <q-btn
        style="height: 1.375rem; width: 1.375rem"
        dense
        round
        unelevated
        class="fill-gradient"
        icon="chevron_left"
        @click="miniState = true"
      />
    </div>
  </q-drawer>

</template>

<script>
// import NavHeader from 'pages/mainStructure/module/helper/NavHeader.vue'
import {store} from 'src/store/store'
import {MainStructureStore} from 'src/pages/mainStructure/MainStructureStore';
export default {
  setup() {
    const mainStructureStore = MainStructureStore(store);
    return {
      mainStructureStore,
    };
  },
  data () {
    return {
      drawer: false,
      miniState: true,
      searchValue:'',
    }
  },
  components:{
    // NavHeader,
  },
  methods:{
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }else{
        this.miniState = true
      }
    }
  }
}
</script>

<style scoped>

.mini-slot {
  transition: background-color .28s;
}

.mini-slot:hover {
  background-color: rgba(0, 0, 0, .04);
}

.mini-icon {
  font-size: 1.718em;
  padding: 2px 16px;
}

.mini-icon + .mini-icon {
  margin-top: 18px;
}
.fill-gradient{
  background: linear-gradient(95deg, #FFA338 15.72%, #FFDF93 84.09%);
}
</style>
