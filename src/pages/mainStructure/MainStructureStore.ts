import { defineStore } from 'pinia';
export const MainStructureStore = defineStore('MainStructure', {
  state: () => ({
    rightSideBar:0,
    sideBarSlot:false,
    activeItem:'Dashboard'
  }),
  actions: {

  },
});
