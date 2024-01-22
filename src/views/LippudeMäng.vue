<template>
    <div class="QuestionContainer">
       <h2>{{ currentQuestion.question }}</h2>
       <ul class="answer-grid">
         <li v-for="(choice, index) in currentQuestion.choices" :key="index">
           <input type="radio" :value="choice" v-model="selectedChoice" />
           {{ choice }}
         </li>
       </ul>
       <button @click="submitAnswer">Submit</button>
       <button v-if="hasNext" @click="nextQuestion">Next Question</button>
    </div>
   </template>
  
   <script>
   export default {
    data() {
       return {
         questions: [
           {
             question: "What is the capital of Sambia?",
             choices: ["Lusaka", "Harare", "Gaborone", "Nairobi"],
             correctAnswer: "Lusaka"
           },
           {
            question: "What is the capital of Estonia?",
            choices: ["Tallinn", "Tartu", "Pärnu", "Narva"],
            correctAnswer: "Tallinn"
           },
           {
            question: "What is the capital of Germany?",
            choices: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
            correctAnswer: "Berlin"
           },
           {
            question: "What is the capital of Faroe Islands?",
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
   .QuestionContainer{
    background-color: bisque;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
   }
   .answer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
   }
   .answer-grid li {
    list-style: none;
   }
   </style>