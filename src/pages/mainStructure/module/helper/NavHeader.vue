<template>
  <q-header class="q-mt-lg transparent q-pl-xl q-pr-xl bg-000000" >
    <div class="row ">
      <div class="col-7 flex items-center">
        <p class="text-black text-14 q-ma-none text-weight-bold"><span class="opacity-4">Platform / </span><span class="text-1C1C1C">{{mainStructureStore.activeItem}}</span></p>
      </div>
      <div class="col-5">
        <div class="row ">
          <div class="col-8 q-pr-xl">
            <q-input dense standout="bg-white" class="border-radius-10" bg-color="white" :input-style="{ color: '#3C3C43',borderRadius:'10px' }" v-model="searchValue" placeholder="Search" >
              <template v-slot:prepend>
                <q-icon style="height: 1.125rem;width: 1.25rem;" name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-4 flex items-center justify-between">
            <q-icon class="text-3C3C43 cursor-pointer" size="1.125rem" name="font_download" />
            <q-icon class="text-3C3C43 cursor-pointer" size="1.125rem" name="print" />
            <q-icon class="text-3C3C43 cursor-pointer" size="1.125rem" name="today" />
            <q-icon class="text-3C3C43 cursor-pointer" size="1.125rem" name="style" />

          </div>
        </div>
      </div>
    </div>

  </q-header>

</template>
<script>
import {store} from 'src/store/store'
import {MainStructureStore} from 'src/pages/mainStructure/MainStructureStore';
export default {
  setup() {
    const mainStructureStore = MainStructureStore(store);
    return {
      mainStructureStore,
    };
  },
}
</script>
<style scoped>
.name-first-character-div{
  width: 1.813rem;
  height: 1.813rem;
}
</style>
