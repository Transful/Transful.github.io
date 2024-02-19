import kõikRiigid from '/public/riigid.json';
import euroopaRiigid from '/public/euroopaRiigid.json';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    kõikRiigid: kõikRiigid,
    euroopaRiigid: euroopaRiigid,
    selectedGame: null,
    questionCount: 0,
    selectedContinents: [],
    mängValitud: false,
  },
  mutations: {
    startGame(state, { selectedGame, questionCount, selectedContinents }) {
      state.selectedGame = selectedGame;
      state.questionCount = questionCount;
      state.selectedContinents = selectedContinents;
      state.mängValitud = true;
  },
  },
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