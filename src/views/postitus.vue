<template>
    <postitus1></postitus1>
    <h1>TULEB JÄRGMINE POSTITUS</h1>
    <postitus2></postitus2>
</template>

<script>
import postitus1 from '../components/postitused/postitus1.vue';
import postitus2 from '../components/postitused/postitus2.vue';


export default {
    name: "App",
    components: {
        'postitus1': postitus1,
        'postitus2': postitus2
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
    methods: {},
}
</script>