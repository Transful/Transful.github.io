<template>
    <br><br><br><br><br>
    <!-- Game Menu Container -->
    <div class="mänguMenüüContainer">
        <div class="mänguMenüü">
            <h1>TEST: Pealinnad</h1>

            <!-- Question Count Selector -->
            <div>
                <label id="küsimusteArvLabel" for="questionCount">Küsimuste arv:</label>
                <select id="questionCount" v-model="questionCount">
                    <option v-for="n in 50" :key="n" :value="n">{{ n }}</option>
                </select>
            </div>

            <!-- Continent Selector -->
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
                selectedContinents: []
            };
        },
        methods: {
            startGame() {
                console.log(`Starting game with ${this.questionCount} questions and continents: ${this.selectedContinents.join(', ')}`);
                //TODO emit event to parent and start the game with specific chosen data.
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
    }


    .mänguMenüü label {
        color: #55E0E5;
        padding-right: 5px;
    }
    #küsimusteArvLabel{
        font-size: 22px;
        align-self: flex-start;
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
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 4px;
    }

    .checkbox-container:hover input ~ .checkmark,
    .checkbox-container input:focus ~ .checkmark {
        background-color: #ccc;
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