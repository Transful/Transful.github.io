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
    imporditudAndmed: []
  },
  mutations: {
    startGame(state, { selectedGame, questionCount, selectedContinents }) {
      state.selectedGame = selectedGame;
      state.questionCount = questionCount;
      state.selectedContinents = selectedContinents;
      state.mängValitud = true;
  },
  impordiAndmed(state, imporditudAndmed){
    state.imporditudAndmed = imporditudAndmed;
  }
  },
  actions: {},
  modules: {},
  getters: {
    getImporditudAndmed: state => {
      return state.imporditudAndmed;
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