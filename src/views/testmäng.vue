<template>
    <div class="mänguMenüüContainer">
        <mänguValimine v-if="!gameStartedPealinnad && !gameStartedLippudeMäng" @start-game="startGame"></mänguValimine>
        <pealinnadeMäng v-if="gameStartedPealinnad" :imporditudAndmed="imporditudAndmed"></pealinnadeMäng>
        <lippudeMäng v-if="gameStartedLippudeMäng" :imporditudAndmed="imporditudAndmed"></lippudeMäng>
    </div>  
</template>

<script>
import mänguValimine from '../components/mänguValimine.vue';
import pealinnadeMäng from './PealinnadeMäng.vue';
import LippudeMäng from './LippudeMäng.vue';
// VEEL POLE VALMIS, HETKEL KATKI VEEL :)

export default {
    name: "App",
    components: {
        mänguValimine,
        'pealinnadeMäng': pealinnadeMäng,
        'lippudeMäng': LippudeMäng
    },
    data() {
        return {
            gameStartedPealinnad: false,
            gameStartedLippudeMäng: false,
            imporditudAndmed: [],
            questionCount: 0,
            selectedContinents: [],
            selectedGame: '',
            mängValitud: this.$store.state.mängValitud
        };
    },
    computed: {},
    methods: {
        startGame() {
            this.selectedGame = this.$store.state.selectedGame;
            this.questionCount = this.$store.state.questionCount;
            this.selectedContinents = this.$store.state.selectedContinents;
            
            //TODO võtta õiged andmed
           /* if(this.selectedContinents.includes('Euroopa')){
                console.log('Valitud: Euroopa');
                let ajutisedAndmed = this.$store.getters.getEuroopaAndmed;
            }else{
                console.log('Valitud: Kõik riigid');
                let ajutisedAndmed = this.$store.getters.getAndmed;
            }
            */

            let ajutisedAndmed = this.$store.getters.getAndmed;

            // Mängu valimine
            if(this.selectedGame === 'pealinnadeMäng') {
                this.gameStartedPealinnad = true;
            }else if(this.selectedGame === 'lippudeMäng') {
                this.gameStartedLippudeMäng = true;
            }else{
                console.log('Mängu valimine ebaõnnestus');
            }

            //Segan andmed
            for (let i = ajutisedAndmed.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [ajutisedAndmed[i], ajutisedAndmed[j]] = [ajutisedAndmed[j], ajutisedAndmed[i]];
            }
            console.log(ajutisedAndmed.length)
            //Võtan questionCount jagu andmeid
            if(ajutisedAndmed.length < this.questionCount){
                ajutisedAndmed = ajutisedAndmed.slice(0, ajutisedAndmed.length);
            }else{
                ajutisedAndmed = ajutisedAndmed.slice(0, this.questionCount);
            }
            //Panen muudetud andmed Store'isse
            this.$store.commit('impordiAndmed', {
                    muudetudAndmed: ajutisedAndmed
            });
        }
},
}
</script>