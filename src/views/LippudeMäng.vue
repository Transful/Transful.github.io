<template>
    <div v-if="currentQuestion && kasAndmedOnLaetud" class="Test-Lipud">
        <div class="questionBoxiPeal">
            <h2>TEST: LIPUD</h2>
            <div class="question-counter">
                {{ praeguseKüsimuseIndeks + 1 }} / {{ andmed.length }}
            </div>
            
        </div>
        <div class="test-progress">
          <progress class="progress-bar" :value="praeguseKüsimuseIndeks" :max="andmed.length-1"></progress>
        </div>
        <div class="KeskmineContainer">
          <div class="QuestionContainer" :style="{ 'padding-right': vihjetegaMäng ? '20px' : '10ch' }">
                <div>
                    <div class="küsimusJaVastusevariandid">
                            <h2 class="küsimus" v-if="currentQuestion">{{currentQuestion.question }}</h2>
                    </div>
                    <div class="valikuVariandid">
                        <ul class="answer-grid">
                            <li v-for="(choice, index) in currentQuestion.choices" :key="index" class="answer-option">
                              <!-- siin nüüd choices on 2D array, mille elemendid siis 2-el arrayd riigi nime ja lipuga -->
                              <!-- pos 0 on lipp, pos 1 on riigi nimi, saame selle anda hover effectile kaasa, et kuvada riigi nime -->
                                <button class="radio-button" @click="valitudVastus = choice[0]"
                                    :class="{'green': kontrollitud && choice[0] === this.currentQuestion.lipp,
                                             'red': kontrollitud && choice[0] !== this.currentQuestion.lipp && choice[0] === valitudVastus}"
                                    :disabled="kontrollitud"
                                    :data-country-name="choice[1]">
                                    <img :src="require(`@/assets/lipud/${choice[0]}`)" :alt="choice[0]">
                                  </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vihjeDiv" v-if="vihjetegaMäng">
                    <button class="näitaVihjetNupp" @click="näitaVihjet">Vihje</button>
                    <div v-if="vihje || kasOnValeVastus" class="vihjeContainer">
                      <p v-html="currentQuestion.seosLipp"></p>
                        <img v-if="!kasNäitanVihjePilti" class="vihjePilt" :src="require(`@/assets/avaVihje.png`)" @click="näitaVihjePilti" alt="Ava vihje pilt">
                        <img v-if="kasNäitanVihjePilti" class="vihjePilt" :src="require(`@/assets/lipuseosed/${currentQuestion.seosLippPilt}`)" alt="Seose pilt">
                    </div>
                </div>
            </div>  <!-- QuestionContainer -->
            <div class="kontrolliJajärgmineNupud">
                <button v-if="!kontrollitud" @click="kontrolliVastust">Kontrolli</button>
                <button v-if="kontrollitud && kasOnOlemasJärgmineKüsimus" @click="järgmineKüsimus">Järgmine küsimus</button>
                <button v-if="kontrollitud && !kasOnOlemasJärgmineKüsimus" @click="lõpetaTest">Lõpeta test</button>
            </div>
        </div>
    </div>
   </template>
  
   <script>
export default {
    data() {
       return {
         andmed: [],
         kasAndmedOnLaetud: false,
         kasTestOnLõpetatud: false,
         vihje: false,
         kontrollitud: false,
         praeguseKüsimuseIndeks: 0,
         valitudVastus: "",
         skoor: 0,
         kasutatudVihjeteArv: 0,
         õigestiVastatud: [],
         allChoices: [],
         seosLipp: 'ei ole seost',
         seosLippPilt: '',
         kasNäitanVihjePilti: false,
         progressValue: 0,
         vihjetegaMäng: null,
       };
    },
    computed: {
        currentQuestion() {
            if (this.andmed != null && this.andmed.length > 0) {
                return this.andmed[this.praeguseKüsimuseIndeks] || null;
            }
        },
        kasOnOlemasJärgmineKüsimus() {
            if (this.andmed != null)
                return this.praeguseKüsimuseIndeks < this.andmed.length - 1;
        },
        kasOnÕigeVastus(){
            return this.valitudVastus === this.currentQuestion.lipp;
        },
        kasOnValeVastus(){
          return this.valitudVastus !== null && this.valitudVastus !== this.currentQuestion.lipp && this.kontrollitud;
        }

    },
    async created() {
        console.log('Created, Jõudsin lippudeMängu');
    
    try {
       
        //ANDMEBAASIGA ANDMETE VÕTMINE
        
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

        this.andmed = data.map(item => ({
            question: item.nimi,
            correctAnswer: item.pealinn,
        }));
        this.allChoices = this.andmed.map(question => question.correctAnswer);

        console.log('Created lifecycle hook called - Võtan suvalised vastused.');

        this.andmed.forEach(question => {
            question.choices = this.võtaSuvalisedVastused(question.correctAnswer);
        });
        console.log('Transformed data:', this.andmed); // Add this line
        } catch (error) {
            console.error('Error fetching data:', error); // Modify this line
        } finally {
            this.kasAndmedOnLaetud = true;
        }
        
        */

        //const data = require('/public/riigid.json');

        //Kasutatud vihjete arvu nullimine
        this.kasutatudVihjeteArv = 0;

        // Teen selgeks, kas mäng tuleb vihjetega või ilma
        this.vihjetegaMäng = this.$store.getters.getKasKasutanVihjeid;

        // ANDMED TULEVAD JSON FAILIST läbi store'i
        let kõikAndmed = require('/public/riigid.json');
        
        let imporditudAndmed = this.$store.getters.getMuudetudAndmed;
        console.log('Imporditud andmed:', imporditudAndmed);

        //Unwrappin proxy objecti, et pääseda ligi arrayle
        imporditudAndmed = JSON.parse(JSON.stringify(imporditudAndmed));
        
        let ajutineData = imporditudAndmed.muudetudAndmed;

        this.andmed = ajutineData.map(item => {
            if(!item.nimi || !item.pealinn || !item.lipp || !item.seosLipp || !item.seosLippPilt) {
                console.log('Andmed on puudulikud');
            }
            return{
                question: item.nimi,
                pealinn: item.pealinn,
                lipp: item.lipp,
                seosLipp: item.seosLipp,
                seosLippPilt: item.seosLippPilt,
            }

        });
        console.log('Andmed:', this.andmed);


        // Vastusevariantideks on kõikide teiste riikide lipud.
        // lisab kahe elemendilise array, kus on nii lipp, kui riigi nimi
        for (let i = this.andmed.length - 1; i > 0; i--) {
            kõikAndmed.forEach(question => {
                this.allChoices.push([question.lipp, question.nimi]);
            });
        }

        // Märgin ära iga "küsimuse" õige vastuse
        this.andmed.map(question => question.lipp);

        // Panen paika iga küsimuse vastusevariandid (mis sisaldab õiget vastust ja kolme suvalist vale vastust)
        this.andmed.forEach(question => {
            question.choices = this.võtaSuvalisedVastused([question.lipp, question.nimi]);
        });

    } catch (error) {
        console.log("Tekkis error")
        console.error(error);
    } finally {
        this.kasAndmedOnLaetud = true;
    }

},
    methods: {
      
        /* Kui vajutatakse vihje pilti */
        näitaVihjePilti() {
            this.kasNäitanVihjePilti = true;
            console.log('Vihje pilti vajutati')
;        },

        /* Kui vajutatakse "Vihje" nuppu */
        näitaVihjet() {
            console.log('Vihje nuppu vajutati');
            if(this.vihje){
                this.vihje = false;
            }else{
              if (this.isLoading) return;
              this.vihje = true;
            }
        },
        /* Kui vajutatakse "Kontrolli" nuppu */
       kontrolliVastust() {
            if (this.isLoading) return;

             // Kontrollin, kas kasutaja on vastuse valinud
             if (this.valitudVastus === "") {
                alert("Palun vali vastus!");
                return;
            }
            //alert(this.valitudVastus === this.currentQuestion.correctAnswer ? "Õige vastus!" : "Vale vastus!");
            
            this.kontrollitud = true;

            /* Kui on õige vastus ja ei ole veel selle küsimuse eest punkti saanud, siis suurendame skoori */
            if (this.valitudVastus === this.andmed[this.praeguseKüsimuseIndeks].lipp && !this.õigestiVastatud[this.praeguseKüsimuseIndeks]) {
                this.skoor++;
                this.õigestiVastatud[this.praeguseKüsimuseIndeks] = true;
            }
       },

        /* Kui vajutatakse "Järgmine küsimus" nuppu */
       järgmineKüsimus() {
        if (this.isLoading) return;
         this.praeguseKüsimuseIndeks++;
         this.vihje = false;
         this.kasNäitanVihjePilti = false;
         this.valitudVastus = "";
         this.kontrollitud = false;
       },

       /* Kui vajutatakse "Lõpeta test" nuppu */
       lõpetaTest() {
         this.kasTestOnLõpetatud = true;
         console.log("Test on lõpetatud, skoor on: " + this.skoor);
         this.$emit('test-lõpetatud', true);

        //Salvestan mängu andmed, et neid näidata lõpu ekraanil
          this.$store.commit('saveTestResults', {
          skoor: this.skoor,
          kasutatudVihjeteArv: this.kasutatudVihjeteArv,
          });
       },

       /* Võtan vastusevariantideks suvalised vastused */
       /* Võtab kaheelemendilise array, kus on lipp ja nimi argumendina*/

       võtaSuvalisedVastused(oige) {
            if (this.isLoading) return;
            let choices = [...this.allChoices];
            choices = choices.filter(choice => choice[0] !== oige[0]);
            for (let i = choices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [choices[i], choices[j]] = [choices[j], choices[i]];
            }
            choices = choices.slice(0, 5).concat([oige]);
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
   .Test-Lipud{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 5ch;
    color: #55E0E5;
    margin-bottom: 100px;
    user-select: none;
   }
   .QuestionContainer {
     display: grid;
    grid-template-columns: 1fr auto;
    background-color: #0B1C24;
    color: #55E0E5;
    border-radius: 36px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 10ch;
  }
  .keskmineContainer {
    display: inline-flex;
}
  .küsimus {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  h2.küsimus {
    background-color: #55E0E5;
    color: black;
    border-radius: 15px; 
    text-transform: uppercase;
    padding: 8px;
    user-select: none;
  }
  .näitaVihjetNupp {
    background-color: #55E0E5;
    border-radius: 10px;
    border: 0;
    font-weight: 700;
    font-size: 0.8em;
    display: block;
    padding: 10px 16px;
    letter-spacing: 1px;
    align-items: right;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .näitaVihjetNupp:hover {
    background-color: #33d9ff;
  }
  .vihjeContainer{
    border-radius: 20px;
    background-color: black;
    border: 2px solid #55E0E5;
    padding: 20px;
    max-width: 300px;
}
  .vihjePilt{
    width: 200px;
    height: auto;
    border-radius: 15px;
  }
  .küsimusJaVastusevariandid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2ch;
    border-radius: 15px;
    background-color: #0B1C24;
    color: #55E0E5;
    font-size: 16px;
  }

  .vihjeDiv{
    margin-left: 20px;
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
   .kontrolliJajärgmineNupud > button {
    background-color: #55E0E5;
    margin-right: 20px;
    margin-top: 30px;
    border-radius: 36px;
    border: 0;
    font-weight: 700;
    font-size: 0.8em;
    display: block;
    padding: 10px 16px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .kontrolliJajärgmineNupud > button:hover {
    background-color: #33d9ff;
  }

   .answer-grid {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    row-gap: 1ch; /* vertical gap */
    column-gap: 4ch; /* horizontal gap */
    list-style-type: none;

   }
   ul.answer-grid {
    padding-left: 0;
  }
  
  .answer-option{
    display: flex;
    align-items: center;
    text-align: center;
   }


   /* Vastusevalikute nupud*/
   .radio-button {
    display: block;
    width: 100%;
    padding: 10px;
    border: 2px solid #55E0E5;
    border-radius: 15px;
    background-color: black;
    color: #55E0E5;
    font-size: 16px;
    cursor: pointer;
  }
  .green{
    background-color: green;
    border: 2px solid black;
  }
  .red{
    background-color: red;
    border: 2px solid black;
  }

  .red:hover::after {
    content: attr(data-country-name); /* Hover effekti jaoks nime kuvamine*/
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

  .radio-button:hover {
    background-color: #55E0E5;
    color: black;
  }
  .radio-button:focus {
    background-color: #55E0E5;
    color: black;
  }
  .radio-button:checked {
    background-color: #55E0E5;
    color: black;
  }
  li::marker{
    visibility: hidden;
    position: absolute;
  }
  .test-progress{
    width: 100%;
    height: 10px;
    border-radius: 5px;
    overflow: hidden; 
  }
  progress[value] {
    --color:  /* the progress color */
      linear-gradient(#fff8,#fff0),
      repeating-linear-gradient(135deg,#0003 0 10px,#0000 0 20px),
      #55E0E5; 
    --background: lightgrey; /* the background color */

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    margin: 0 10px;
    border-radius: 10em;
    background: var(--background);
  }
  progress[value]::-webkit-progress-bar {
    border-radius: 10em;
    background: var(--background);
  }
  progress[value]::-webkit-progress-value {
    border-radius: 10em;
    background: var(--color);
  }
  progress[value]::-moz-progress-bar {
    border-radius: 10em;
    background: var(--color);
  }
   </style>