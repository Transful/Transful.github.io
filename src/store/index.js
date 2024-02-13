import kõikRiigid from '/public/riigid.json';
import euroopaRiigid from '/public/euroopaRiigid.json';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    kõikRiigid: kõikRiigid,
    euroopaRiigid: euroopaRiigid,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getAndmed: state =>{
      return state.kõikRiigid;
    },
    getEuroopaAndmed: state =>{
      return state.euroopaRiigid;
    },
  }
});

export default store;