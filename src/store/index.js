import andmed from '/public/riigid.json';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    andmed: andmed,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getAndmed: state =>{
      return state.andmed;
    }
  }
});

export default store;