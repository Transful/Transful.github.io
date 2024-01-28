<template>
    <div v-if="currentQuestion" class="Test-Pealinnad">
        <div v-if="lõpetatud == true">
            <h3>Sinu skoor on: {{ skoor }} / {{ küsimused.length }}</h3>
        </div>
        <div class="questionBoxiPeal">
            <h2>TEST: PEALINNAD</h2>
            <div class="question-counter">
                {{ praeguseKüsimuseIndeks + 1 }} / {{ küsimused.length }}
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
                    <input type="radio" :value="choice" v-model="valitudVastus" :id="'choice' + index" class="radio-input"/>
                    <label :for="'choice' + index" class="radio-label">{{ choice }}</label>
                </li>
            </ul>
        </div>  <!-- QuestionContainer -->
        <div class="kontrolliJajärgmineNupud">
            <button @click="kontrolliVastust">Kontrolli</button>
            <button v-if="kasOnOlemasJärgmineKüsimus" @click="järgmineKüsimus">Järgmine küsimus</button>
            <button v-if="!kasOnOlemasJärgmineKüsimus" @click="lõpetaTest">Lõpeta test</button>
        </div>
    </div>
   </template>
  
   <script>
   export default {
    data() {
       return {
         küsimused: [],
         isLoading: true,
         praeguseKüsimuseIndeks: 0,
         valitudVastus: "",
         skoor: 0,
         õigestiVastatud: [],
         lõpetatud: false,
         allChoices: ["Lomé", "Accra", "Ouagadougou", "Niamey", "Kopenhaagen", "Reykjavik",
         "Oslo", "Berliin", "Pariis", "Rooma", "Madrid", "Stockholm", "Riia", "Helsingi", "Tallinn",
         "Lusaka", "Harare", "Gaborone", "Nairobi", "Tirana", "Podgorica", "Sarajevo", "Skopje", "Vilnius",
          "Minsk", "Kiiev", "Ankara", "Teheran", "Male", "London", "Kigali", "Suva", "Ateena"],
       };
    },
    computed: {
        currentQuestion() {
            if (this.küsimused.length > 0) {
                return this.küsimused[this.praeguseKüsimuseIndeks];
            }
            return null;
        },
        kasOnOlemasJärgmineKüsimus() {
            return this.praeguseKüsimuseIndeks < this.küsimused.length - 1;
        }
    },
    async created() {
        console.log('Created lifecycle hook called - Võtan küsimused');
    
    try {
        /*
        const responseKatse = await fetch('/');
        console.log('ResponseKatse:', responseKatse); 

        console.log('Fetching data...'); // Add this line
        const response = await fetch('http://localhost:3000/api/riigid'); // Replace with your actual API endpoint

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log('Response:', response); // Add this line

        const data = await response.json();
        console.log('Data:', data); // Add this line

        this.küsimused = data.map(item => ({
            question: item.nimi,
            correctAnswer: item.pealinn,
        }));
        
        console.log('Transformed data:', this.küsimused); // Add this line
        } catch (error) {
            console.error('Error fetching data:', error); // Modify this line
        } finally {
            this.isLoading = false;
        }
        */
        const data = require('/public/riigid.json');

        console.log('Data:', data);

        this.küsimused = data.map(item => ({
            question: item.nimi,
            correctAnswer: item.pealinn,
        }));

        console.log('Created lifecycle hook called - Võtan suvalised vastused.');
        this.küsimused.forEach(question => {
            question.choices = this.võtaSuvalisedVastused(question.correctAnswer);
        });
    } catch (error) {
        console.error(error);
    } finally {
        this.isLoading = false;
    }
},
    methods: {
       kontrolliVastust() {
            if (this.isLoading) return;
            alert(this.valitudVastus === this.currentQuestion.correctAnswer ? "Õige vastus!" : "Vale vastus!");
            /* Kui on õige vastus ja ei ole veel selle küsimuse eest punkti saanud, siis suurendame skoori */
            if (this.valitudVastus === this.küsimused[this.praeguseKüsimuseIndeks].correctAnswer && !this.õigestiVastatud[this.praeguseKüsimuseIndeks]) {
                this.skoor++;
                this.õigestiVastatud[this.praeguseKüsimuseIndeks] = true;
            }
            /* console.log(this.skoor);*/

       },
        /* Kui vajutatakse "Järgmine küsimus" nuppu */
       järgmineKüsimus() {
        if (this.isLoading) return;
         this.kontrolliVastust();
         this.praeguseKüsimuseIndeks++;
         this.valitudVastus = "";
       },
       /* Kui vajutatakse "Lõpeta test" nuppu */
       lõpetaTest() {
         this.kontrolliVastust();
         this.lõpetatud = true;
         console.log("Test on lõpetatud, skoor on: " + this.skoor);
       },
       /* Võtan vastusevariantideks suvalised vastused */
       võtaSuvalisedVastused(correctAnswer) {
            if (this.isLoading) return;
            let choices = [...this.allChoices];
            choices = choices.filter(choice => choice !== correctAnswer);
            for (let i = choices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [choices[i], choices[j]] = [choices[j], choices[i]];
            }
            choices = choices.slice(0, 3).concat(correctAnswer);
            for (let i = choices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [choices[i], choices[j]] = [choices[j], choices[i]];
            }
            return choices;
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