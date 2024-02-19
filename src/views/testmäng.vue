<template>
    <div class="mänguMenüüContainer">
        <mänguValimine v-if="!gameStarted" @start-game="startGame"></mänguValimine>
        <LippudeMäng v-else :imporditudAndmed="imporditudAndmed"></LippudeMäng>
    </div>  
</template>

<script>
import store from '@/store';
import mänguValimine from '../components/mänguValimine.vue';
import lippudeMäng from './LippudeMäng.vue';
// VEEL POLE VALMIS, HETKEL KATKI VEEL :)

export default {
    name: "App",
    components: {
        mänguValimine,
        'LippudeMäng': lippudeMäng
    },
    data() {
        return {
            gameStarted: false,
            imporditudAndmed: null,
            questionCount: 0,
            selectedContinents: [],
            selectedGame: '',
            mängValitud: this.$store.state.mängValitud
        };
    },
    computed: {},
    methods: {
        startGame() {
            this.questionCount = this.$store.state.questionCount;
            this.selectedContinents = this.$store.state.selectedContinents;
            this.selectedGame = this.$store.state.selectedGame;
            /*
            SIIA VAJA TEHA ÕIGETE ANDMETE VALIMINE VEEL
            */
            let ajutisedAndmed = this.$store.getters.getAndmed;
            
            //Teen andmetest koopia (ajutisedAndmed)
            let tempData = [...ajutisedAndmed];

            //Segan andmed
            for (let i = tempData.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [tempData[i], tempData[j]] = [tempData[j], tempData[i]];
            }

            //Võtan questionCount jagu andmeid
            this.imporditudAndmed = tempData.slice(0, questionCount);
    

            console.log('Starting the ', selectedGame, ' with', questionCount, 'questions and continents:', selectedContinents.join(', '));
            if(this.selectedGame = 'pealinnadeMäng') {
                console.log('Pealinnade mäng valitud');
                this.gameStarted = true;
            }else{
                console.log('Mängu valimine ebaõnnestus');
            }
        }
    },
}
</script>