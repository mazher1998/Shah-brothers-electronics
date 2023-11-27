<template>
  <q-layout view="lHh Lpr lFf" >
    <TopAndSideBar></TopAndSideBar>
    <q-page-container class="window-height ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import TopAndSideBar from 'src/pages/mainStructure/module/TopAndSideBar.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'LayoutName',
  components:{
     TopAndSideBar,
  },

});
</script>

