<template>
    <div class="mänguMenüüContainer">
        <mänguValimine v-if="!gameStartedPealinnad" @start-game="startGame"></mänguValimine>
        <pealinnadeMäng v-else :imporditudAndmed="imporditudAndmed"></pealinnadeMäng>
    </div>  
</template>

<script>
import store from '@/store';
import mänguValimine from '../components/mänguValimine.vue';
import pealinnadeMäng from './PealinnadeMäng.vue';
// VEEL POLE VALMIS, HETKEL KATKI VEEL :)

export default {
    name: "App",
    components: {
        mänguValimine,
        'pealinnadeMäng': pealinnadeMäng
    },
    data() {
        return {
            gameStartedPealinnad: false,
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
            this.questionCount = this.$store.state.questionCount;
            this.selectedContinents = this.$store.state.selectedContinents;
            this.selectedGame = this.$store.state.selectedGame;
            
            let ajutisedAndmed = this.$store.getters.getAndmed;
            
            //Segan andmed
            for (let i = ajutisedAndmed.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [ajutisedAndmed[i], ajutisedAndmed[j]] = [ajutisedAndmed[j], ajutisedAndmed[i]];
            }

            //Võtan questionCount jagu andmeid
            this.imporditudAndmed = ajutisedAndmed.slice(0, this.questionCount);
            console.log("OLEN SIIN 3", this.imporditudAndmed);
            
            this.$store.commit('impordiAndmed', {
                    imporditudAndmed: this.imporditudAndmed
            });
            

            // Mängu valimine
            if(this.selectedGame === 'pealinnadeMäng') {
                console.log('Pealinnade mäng valitud');
                this.gameStartedPealinnad = true;
            }else{
                console.log('Mängu valimine ebaõnnestus');
            }
        }
    },
}
</script>