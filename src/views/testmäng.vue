<template>
    <div class="mänguMenüüContainer">
        <mänguValimine v-if="!gameStarted" @start-game="startGame"></mänguValimine>
        <LippudeMäng v-else :questionCount="questionCount" :selectedContinents="selectedContinents"></LippudeMäng>
    </div>  
</template>

<script>
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
            questionCount: 0,
            selectedContinents: []
        };
    },
    methods: {
        startGame({ questionCount, selectedContinents }) {
            this.gameStarted = true;
            this.questionCount = questionCount;
            this.selectedContinents = selectedContinents;
        }
    },
}
</script>