import kõikRiigid from '/public/riigid.json';
import euroopaRiigid from '/public/euroopa.json';
import põhjaAmeerikaRiigid from '/public/pohja-ameerika.json';
import keskAmeerikaRiigid from '/public/kesk-ameerika.json';
import lõunaAmeerikaRiigid from '/public/louna-ameerika.json';
import aafrikaRiigid from '/public/aafrika.json';
import aasiaRiigid from '/public/aasia.json';
import okeaaniaRiigid from '/public/okeaania.json';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    kõikRiigid: kõikRiigid,
    euroopaRiigid: euroopaRiigid,
    põhjaAmeerikaRiigid: põhjaAmeerikaRiigid,
    keskAmeerikaRiigid: keskAmeerikaRiigid,
    lõunaAmeerikaRiigid: lõunaAmeerikaRiigid,
    aafrikaRiigid: aafrikaRiigid,
    aasiaRiigid: aasiaRiigid,
    okeaaniaRiigid: okeaaniaRiigid,
    selectedGame: null,
    questionCount: 0,
    selectedContinents: [],
    mängValitud: false,
    vihjetegaMäng: null,
    muudetudAndmed: []
  },
  mutations: {
    startGame(state, { selectedGame, questionCount, selectedContinents, vihjetegaMäng }) {
      state.selectedGame = selectedGame;
      state.questionCount = questionCount;
      state.selectedContinents = selectedContinents;
      state.mängValitud = true;
      state.vihjetegaMäng = vihjetegaMäng;
  },
  impordiAndmed(state, muudetudAndmed){
      state.muudetudAndmed = muudetudAndmed;
  }
  },
  actions: {},
  modules: {},
  getters: {
    getKasKasutanVihjeid: state => {
      return state.vihjetegaMäng;
    },
    getMuudetudAndmed: state => {
      return state.muudetudAndmed;
    },
    getAndmed: state =>{
      return state.kõikRiigid;
    },
    getEuroopaAndmed: state => state.euroopaRiigid,
    getPõhjaAmeerikaAndmed: state => state.põhjaAmeerikaRiigid,
    getKeskAmeerikaAndmed: state => state.keskAmeerikaRiigid,
    getLõunaAmeerikaAndmed: state => state.lõunaAmeerikaRiigid,
    //getAmeerikaAndmed: state => state.ameerikaRiigid,
    getAafrikaAndmed: state => state.aafrikaRiigid,
    getAasiaAndmed: state => state.aasiaRiigid,
    getOkeaaniaAndmed: state => state.okeaaniaRiigid
  }
});

export default store;