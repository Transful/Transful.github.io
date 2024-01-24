<template>
    <div class="Test-Pealinnad">
        <div v-if="lõpetatud == true">
            <h3>Sinu skoor on: {{ score }} / {{ questions.length }}</h3>
        </div>
        <div class="questionBoxiPeal">
            <h2>TEST: PEALINNAD</h2>
            <div class="question-counter">
                {{ currentQuestionIndex + 1 }} / {{ questions.length }}
            </div>
        </div>
        <div class="QuestionContainer">
            <div class="küsimusJaNäitaSeost">
                <div class="küsimuseDiv">
                    <h2 class="küsimus" v-if="currentQuestion">{{ currentQuestion.question }}?</h2>
                </div>
                <div class="näitaseost">
                    <button class="näitaSeostNupp">Näita seost</button>
                </div>
            </div>
            <ul class="answer-grid">
                <li v-for="(choice, index) in currentQuestion.choices" :key="index" class="answer-option">
                    <input type="radio" :value="choice" v-model="selectedChoice" :id="'choice' + index" class="radio-input"/>
                    <label :for="'choice' + index" class="radio-label">{{ choice }}</label>
                </li>
            </ul>
        </div>  <!-- QuestionContainer -->
        <div class="kontrolliJajärgmineNupud">
            <button @click="kontrolliVastust">Kontrolli</button>
            <button v-if="hasNext" @click="nextQuestion">Järgmine küsimus</button>
            <button v-if="!hasNext" @click="lõpetaTest">Lõpeta test</button>
        </div>
    </div>
   </template>
  
   <script>
   export default {
    data() {
       return {
         questions: [
           {
            question: "Sambia",
            choices: ["Lusaka", "Harare", "Gaborone", "Nairobi"],
            correctAnswer: "Lusaka"
           },
           {
            question: "Eesti",
            choices: ["Stockholm", "Riia", "Helsingi", "Tallinn"],
            correctAnswer: "Tallinn"
           },
           {
            question: "Saksamaa",
            choices: ["Berliin", "Pariis", "Rooma", "Madrid"],
            correctAnswer: "Berliin"
           },
           {
            question: "Fääri Saared",
            choices: ["Kopenhaagen", "Reykjavik", "Tórshavn", "Oslo"],
            correctAnswer: "Tórshavn"
           },
           {
            question: "Burkina Faso",
            choices: ["Lomé", "Accra", "Ouagadougou", "Niamey"],
            correctAnswer: "Ouagadougou"
           }
           // Add more questions here
         ],
         currentQuestionIndex: 0,
         selectedChoice: "",
         score: 0,
         answeredCorrectly: [],
         lõpetatud: false,
       };
    },
    computed: {
       currentQuestion() {
         return this.questions[this.currentQuestionIndex];
       },
       hasNext() {
         return this.currentQuestionIndex < this.questions.length - 1;
       }
    },
    methods: {
       kontrolliVastust() {
            alert(this.selectedChoice === this.currentQuestion.correctAnswer ? "Correct!" : "Incorrect.");
            /* Kui on õige vastus ja ei ole veel selle küsimuse eest punkti saanud, siis suurendame skoori */
            if (this.selectedChoice === this.questions[this.currentQuestionIndex].correctAnswer && !this.answeredCorrectly[this.currentQuestionIndex]) {
                this.score++;
                this.answeredCorrectly[this.currentQuestionIndex] = true;
            }
            console.log(this.score);

       },
        /* Kui vajutatakse "Järgmine küsimus" nuppu */
       nextQuestion() {
         this.kontrolliVastust();
         this.currentQuestionIndex++;
         this.selectedChoice = "";
       },
       /* Kui vajutatakse "Lõpeta test" nuppu */
       lõpetaTest() {
         this.kontrolliVastust();
         this.lõpetatud = true;
         console.log("Test on lõpetatud, skoor on: " + this.score);
       },
    },
   };
   </script>

   <style scoped>
   .Test-Pealinnad{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 5ch;
    color: #55E0E5;
    margin-bottom: 100px;
   }
   .QuestionContainer{
    background-color: #0B1C24;
    color: #55E0E5;
    padding-bottom: 6ch;
    padding-top: 2ch;
    padding-left: 6ch;
    padding-right: 6ch;
    border-radius: 36px;

    }
   .küsimus{
    /*padding-bottom: 2ch;*/
   }
   .näitaSeostNupp{
    background-color: #55E0E5;
    border-radius: 36px;
    border:0;
    font-weight: 700;
    font-size: 0.6em;
    display: block;
    padding: 10px 16px;
    letter-spacing: 1px;
    align-items: right;
   }
   .küsimusJaNäitaSeost{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 2ch;
}
    .näitaseost{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .küsimuseDiv{
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
   .questionBoxiPeal{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 0;
   }
   
   .question-counter{
    padding-right: 1ch;
    font-size: 25px;
   }
   .kontrolliJajärgmineNupud{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
   }
   .kontrolliJajärgmineNupud>button{
    background-color:#55E0E5;
    margin-right: 20px;
    margin-top: 30px;
    border-radius: 36px;
    border:0;
    font-weight: 700;
    font-size: 0.8em;
    display: block;
    padding: 10px 16px;
    letter-spacing: 2px;
   }
   .answer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
   }
   .answer-option{
    display: flex;
    align-items: center;
   }
   .answer-grid li {
    list-style: none;
   }
   body{
    padding-bottom: 100px;
   }

/* Radio buttonid*/
.radio-input {
    display: none;
  }
  
  .radio-label {
    position: relative;
    padding-left: 25px;
  }
  
  .radio-label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #55E0E5;
    border-radius: 50%;
  }
  
  .radio-input:checked + .radio-label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    width: 8px;
    height: 8px;
    background: #55E0E5;
    border-radius: 50%;
  }
   </style>