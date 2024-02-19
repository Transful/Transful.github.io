<template>
    <br><br><br><br><br>
    <!-- Game Menu Container -->
    <div class="mänguMenüüContainer">
        <div class="mänguMenüü">
            <h1>TESTID</h1>
            <!-- Game  Mode Selector -->
            <div class="radio-container">
                <div>
                    <input type="radio" id="pealinnadeMäng" value="pealinnadeMäng" v-model="selectedGame" class="hidden-radio">
                    <label for="pealinnadeMäng" class="radio-label">
                        <span class="custom-radio"></span>
                        Pealinnade mäng
                    </label>
                </div>
                <div>
                    <input type="radio" id="lippudeMäng" value="lippudeMäng" v-model="selectedGame" class="hidden-radio">
                    <label for="lippudeMäng" class="radio-label">
                        <span class="custom-radio"></span>
                        Lippude mäng
                    </label>
                </div>
            </div>
            <!-- Question Count Selector -->
            <div>
                <label id="labeliteTekst" for="questionCount">Küsimuste arv:</label>
                <select id="questionCount" v-model="questionCount">
                    <option v-for="n in 50" :key="n" :value="n">{{ n }}</option>
                </select>
            </div>

            <!-- Continent Selector -->
            <div>
                <label class="valiRiigidLabel" id="labeliteTekst" for="questionCount">Vali riigid:</label>
            </div>
            <div class="mänguMenüüNupud">
                <div class="checkbox-container" v-for="continent in continents" :key="continent">
                    <label :for="continent" class="checkbox-label">
                        <input type="checkbox" :id="continent" :value="continent" v-model="selectedContinents">
                        <span class="checkmark" :style="{ 'background-color': selectedContinents.includes(continent) ? '#55E0E5' : '#eee' }"></span>
                        {{ continent }}
                    </label>
                </div>
            </div>

            <!-- Start Game Button -->
            <button @click="startGame">Alusta mänguga</button>
        </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
    export default {
        name: "getMänguValimine",
        data() {
            return {
                questionCount: 10,
                continents: ['Põhja-Ameerika', 'Lõuna-Ameerika', 'Euroopa','Aafrika', 'Aasia', 'Kõik riigid'],
                selectedContinents: [],
                selectedGame: '',
                mängValitud: false
            };
        },
        methods: {
            startGame() {
                console.log(`\nStarting ${this.selectedGame} with ${this.questionCount} questions and continents: ${this.selectedContinents.join(', ')}`);
                this.$store.commit('startGame', {
                    selectedGame: this.selectedGame,
                    questionCount: this.questionCount,
                    selectedContinents: this.selectedContinents,
                    mängValitud: this.mängValitud
            });
            }
        },
    }
</script>

<style scoped>
    .mänguMenüüContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0B1C24;
        padding: 20px;
        border-radius: 20px;
    }

    .mänguMenüü {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0B1C24;
        padding: 4ch;
        padding-top: 2ch;
        border-radius: 10px;
    }
    
    .mänguMenüü div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }

    .mänguMenüüNupud {
        flex-direction: column;
        padding-top: 1ch;
    }

    .mänguMenüü label {
        color: #55E0E5;
        padding-right: 2ch;
    }
    #labeliteTekst{
        font-size: 22px;
        align-self: flex-start;
        text-decoration: none;
        user-select: none;
    }

    .mänguMenüü > button {
        background-color: #55E0E5;
        margin-top: 30px;
        border-radius: 36px;
        border: 0;
        font-weight: 700;
        font-size: 1em;
        padding: 10px 16px;
        letter-spacing: 2px;
        cursor: pointer;
        transition: background-color 0.3s;
        width: 100%;
    }

    .mänguMenüü > button:hover {
        background-color: #33d9ff;
    }

    .valiRiigidLabel {
        padding-top: 1ch;
    }

    
    /* Radio nupud */
    .radio-container {
        display: flex;
        justify-content: space-between;
    }

    .hidden-radio {
        display: none;
    }

    .radio-label {
        font-size: 22px;
        position: relative;
        padding-left: 35px;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        white-space: nowrap;
    }

    .custom-radio {
        position: absolute;
        top: 0;
        left: 0;
        height: 22px;
        width: 22px;
        background-color: #fff;
        border-radius: 50%;
        border: 2px solid #55E0E5;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
    }

    .hidden-radio:checked ~ .radio-label .custom-radio {
        background-color: #55E0E5;
    }

    .hidden-radio:checked ~ .radio-label .custom-radio::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        background: #fff;
    }

    /* Custom Checkbox */
    .checkbox-container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        user-select: none;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    /* checkmark kastid */
    .checkmark {
        position: relative;
        top: 0;
        left: 0;
        padding-right: 0px;
        margin-right: 1ch;
        height: 25px;
        width: 25px;
        background-color: white;
        border-radius: 4px;
    }

    .checkbox-container:hover input ~ .checkmark,
    .checkbox-container input:focus ~ .checkmark {
        background-color: white;
    }

    .checkbox-container input:checked ~ .checkmark {
        background-color: #55E0E5;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox-container input:checked ~ .checkmark:after,
    .checkbox-container input:focus ~ .checkmark:after {
        display: block;
    }

   .checkbox-container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    
    
</style>