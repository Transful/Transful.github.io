<template>
    <div class="Test-Pealinnad">
        <div class="questionBoxiPeal">
            <h2>TEST: PEALINNAD</h2>
            <div class="question-counter">
                {{ currentQuestionIndex + 1 }} / {{ questions.length }}
            </div>
        </div>
        <div class="QuestionContainer">
            <div class="küsimus">
                <h2>{{ currentQuestion.question }}</h2>
            </div>
            <ul class="answer-grid">
                <li v-for="(choice, index) in currentQuestion.choices" :key="index">
                <input type="radio" :value="choice" v-model="selectedChoice" />
                {{ choice }}
                </li>
            </ul>
            <div class="kontrolliJajärgmineNupud">
                <button @click="submitAnswer">Kontrolli</button>
                <button v-if="hasNext" @click="nextQuestion">Järgmine küsimus</button>
            </div>
        </div>
    </div>
   </template>
  
   <script>
   export default {
    data() {
       return {
         questions: [
           {
             question: "Mis on Sambia pealinn?",
             choices: ["Lusaka", "Harare", "Gaborone", "Nairobi"],
             correctAnswer: "Lusaka"
           },
           {
            question: "Mis on Eesti pealinn?",
            choices: ["Tallinn", "Tartu", "Pärnu", "Narva"],
            correctAnswer: "Tallinn"
           },
           {
            question: "Mis on Saksamaa pealinn?",
            choices: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
            correctAnswer: "Berlin"
           },
           {
            question: "Mis on Fääri Saarte pealinn?",
            choices: ["Tórshavn", "Klaksvík", "Vágur", "Tvøroyri"],
            correctAnswer: "Tórshavn"
           },
           // Add more questions here
         ],
         currentQuestionIndex: 0,
         selectedChoice: ""
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
       submitAnswer() {
         alert(this.selectedChoice === this.currentQuestion.correctAnswer ? "Correct!" : "Incorrect.");
       },
       nextQuestion() {
         this.currentQuestionIndex++;
         this.selectedChoice = "";
       }
    }
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
    padding-right: 7ch;
    padding-left: 7ch;
    padding-bottom: 4ch;
    border-radius: 36px;
   }
   .küsimus{
    padding-bottom: 2ch;
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
    align-items: start;
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
   .answer-grid li {
    list-style: none;
   }
   body{
    padding-bottom: 100px;
   }
   </style>