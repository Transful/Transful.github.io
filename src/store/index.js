import kõikRiigid from '/public/riigid.json';
import euroopaRiigid from '/public/euroopa.json';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    kõikRiigid: kõikRiigid,
    euroopaRiigid: euroopaRiigid,
    selectedGame: null,
    questionCount: 0,
    selectedContinents: [],
    mängValitud: false,
    muudetudAndmed: []
  },
  mutations: {
    startGame(state, { selectedGame, questionCount, selectedContinents }) {
      state.selectedGame = selectedGame;
      state.questionCount = questionCount;
      state.selectedContinents = selectedContinents;
      state.mängValitud = true;
  },
  impordiAndmed(state, muudetudAndmed){
      state.muudetudAndmed = muudetudAndmed;
  }
  },
  actions: {},
  modules: {},
  getters: {
    getMuudetudAndmed: state => {
      return state.muudetudAndmed;
    },
    getAndmed: state =>{
      return state.kõikRiigid;
    },
    getEuroopaAndmed: state =>{
      return state.euroopaRiigid;
    },
  }
});

export default store;