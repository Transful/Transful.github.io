<template>
    <div class="mänguMenüüContainer">
        <mänguValimine v-if="!gameStartedPealinnad && !gameStartedLippudeMäng && !gameStartedLippudeMäng2" @start-game="startGame"></mänguValimine>
        <pealinnadeMäng v-if="gameStartedPealinnad && !kasTestOnLõpetatud" :imporditudAndmed="imporditudAndmed"  @test-lõpetatud="handleTestLõpetatud"></pealinnadeMäng>
        <lippudeMäng v-if="gameStartedLippudeMäng && !kasTestOnLõpetatud" :imporditudAndmed="imporditudAndmed"  @test-lõpetatud="handleTestLõpetatud"></lippudeMäng>
        <lippudeMäng2 v-if="gameStartedLippudeMäng2 && !kasTestOnLõpetatud" :imporditudAndmed="imporditudAndmed"  @test-lõpetatud="handleTestLõpetatud"></lippudeMäng2>
        <!--
        <mänguLõpp v-if="kasTestOnLõpetatud" :imporditudAndmed="imporditudAndmed"></mänguLõpp>
        -->
    </div>  
</template>

<script>
import mänguValimine from '../components/mänguValimine.vue';
import pealinnadeMäng from './PealinnadeMäng.vue';
import LippudeMäng from './LippudeMäng.vue';
import LippudeMäng2 from './LippudeMäng2.vue';
import mänguLõpp from './mänguLõpp.vue';

export default {
    name: "App",
    components: {
        mänguValimine,
        'pealinnadeMäng': pealinnadeMäng,
        'lippudeMäng': LippudeMäng,
        'lippudeMäng2': LippudeMäng2,
        mänguLõpp
    },
    data() {
        return {
            gameStartedPealinnad: false,
            gameStartedLippudeMäng: false,
            gameStartedLippudeMäng2: false,
            kasTestOnLõpetatud: false,
            imporditudAndmed: [],
            questionCount: 0,
            selectedContinents: [],
            selectedGame: '',
            mängValitud: this.$store.state.mängValitud
        };
    },
    computed: {},
    methods: {
        handleTestLõpetatud(newVal) {
            this.kasTestOnLõpetatud = newVal;
            if (this.kasTestOnLõpetatud) {
                this.$router.push("/mänguLõpp");
            }else{
                console.log('ERROR: Mängu lõpetamine ebaõnnestus');
            }
            
        },
        startGame() {
            this.selectedGame = this.$store.state.selectedGame;
            this.questionCount = this.$store.state.questionCount;
            this.selectedContinents = this.$store.state.selectedContinents;

            //let ajutisedAndmed = this.$store.getters.getAndmed;

            // Mängu valimine
            if(this.selectedGame === 'pealinnadeMäng') {
                this.gameStartedPealinnad = true;
            }else if(this.selectedGame === 'lippudeMäng') {
                this.gameStartedLippudeMäng = true;
            }else if(this.selectedGame === 'lippudeMäng2') {
                this.gameStartedLippudeMäng2 = true;
            }else{
                console.log('Mängu valimine ebaõnnestus');
            }

            //Valin andmed vastavalt valitud kontinentidele

            let ajutisedAndmed = [];

            if (this.selectedContinents.includes('Euroopa')) {
            console.log('Valitud: Euroopa');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getEuroopaAndmed);
            }
            if (this.selectedContinents.includes('Põhja-Ameerika')) {
            console.log('Valitud: Põhja-Ameerika');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getPõhjaAmeerikaAndmed);
            }
            if (this.selectedContinents.includes('Kesk-Ameerika')) {
            console.log('Valitud: Kesk-Ameerika');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getKeskAmeerikaAndmed);
            }
            if (this.selectedContinents.includes('Lõuna-Ameerika')) {
            console.log('Valitud: Lõuna-Ameerika');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getLõunaAmeerikaAndmed);
            }
            if (this.selectedContinents.includes('Aafrika')) {
            console.log('Valitud: Aafrika');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getAafrikaAndmed);
            }
            if (this.selectedContinents.includes('Aasia')) {
            console.log('Valitud: Aasia');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getAasiaAndmed);
            }
            if (this.selectedContinents.includes('Okeaania')) {
            console.log('Valitud: Okeaania');
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getOkeaaniaAndmed);
            }
            // Kui pole valitud ühtegi kontinenti või on valitud 'Kõik riigid'
            if (ajutisedAndmed.length === 0 || this.selectedContinents.includes('Kõik riigid')) {
            console.log('Valitud: Default Kõik riigid');
            ajutisedAndmed = [];
            ajutisedAndmed = ajutisedAndmed.concat(this.$store.getters.getAndmed);
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