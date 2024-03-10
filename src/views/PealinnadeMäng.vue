<template>
    <div v-if="currentQuestion && kasAndmedOnLaetud" class="Test-Pealinnad">
        <div v-if="kasTestOnLõpetatud">
            <h3>Sinu skoor on: {{ skoor }} / {{ andmed.length }}</h3>
        </div>
        <div class="questionBoxiPeal">
            <h2>TEST: PEALINNAD</h2>
            <div class="question-counter">
                {{ praeguseKüsimuseIndeks + 1 }} / {{ andmed.length }}
            </div>
        </div>
        <div class="KeskmineContainer">
            <div class="QuestionContainer">
                <div>
                    <div class="küsimusJaVastusevariandid">
                            <h2 class="küsimus" v-if="currentQuestion">{{currentQuestion.question }}</h2>
                    </div>
                    <div class="pealinnaAsukoht">
                        <img :src="require(`@/assets/asukohad/${currentQuestion.pealinnAsukoht}`)" alt="pealinna asukoht">
                    </div>
                    <div class="valikuVariandid">
                        <ul class="answer-grid">
                            <li v-for="(choice, index) in currentQuestion.choices" :key="index" class="answer-option">
                              <button class="radio-button" @click="valitudVastus = choice"
                              :class="{'green': kontrollitud && choice === this.currentQuestion.correctAnswer,
                                       'red': kontrollitud && choice !== this.currentQuestion.correctAnswer && valitudVastus === choice}" 
                                    :disabled="kontrollitud">{{ choice }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vihjeDiv">
                    <button class="näitaVihjetNupp" @click="näitaVihjet">Vihje</button>
                    <div v-if="vihje || kasOnValeVastus" class="vihjeContainer">
                      <p v-html="currentQuestion.seosJutt"></p>
                        <img v-if="!kasNäitanVihjePilti" class="vihjePilt" :src="require(`@/assets/avaVihje.png`)" @click="näitaVihjePilti" alt="Ava vihje pilt">
                        <img v-if="kasNäitanVihjePilti" class="vihjePilt" :src="require(`@/assets/seosed/${currentQuestion.seosPilt}`)" alt="Seose pilt">
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
         õigestiVastatud: [],
         allChoices: [],
         seosJutt: 'ei ole seost',
         seosPilt: '',
         kasNäitanVihjePilti: false,
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
            return this.valitudVastus === this.currentQuestion.correctAnswer;
        },
        kasOnValeVastus(){
          return this.valitudVastus !== null && this.valitudVastus !== this.currentQuestion.correctAnswer && this.kontrollitud
        }
    },
    async created() {
        console.log('Created, jõudsin pealinnadeMängu');
    
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
  
        //IMPORDITUD ANDMETEGA MÄNGIMINE

        let kõikAndmed = require('/public/riigid.json');
        
        let imporditudAndmed = this.$store.getters.getMuudetudAndmed;
        console.log('Imporditud andmed:', imporditudAndmed);

        //Unwrappin proxy objecti, et pääseda ligi arrayle
        imporditudAndmed = JSON.parse(JSON.stringify(imporditudAndmed));
        
        let ajutineData = imporditudAndmed.muudetudAndmed;

        this.andmed = ajutineData.map(item => {  
          if(!item.nimi || !item.pealinn || !item.seosPealinn || !item.seosPealinnPilt || !item.pealinnAsukoht) {
            console.log('Andmed on puudulikud');
          }
          return{
          question: item.nimi,
          correctAnswer: item.pealinn,
          seosJutt: item.seosPealinn,
          seosPilt: item.seosPealinnPilt,
          pealinnAsukoht: item.pealinnAsukoht,
          }
        });

        console.log('Andmed:', this.andmed);

        // Vastusevariantideks on kõikide teiste riikide pealinnad.

        for (let i = this.andmed.length - 1; i > 0; i--) {
            kõikAndmed.forEach(item => {
                this.allChoices.push(item.pealinn);
            });
        }

        // Märgin ära iga "küsimuse" õige vastuse
        this.andmed.map(question => question.correctAnswer);

        // Panen paika iga küsimuse vastusevariandid (mis sisaldab õiget vastust ja kolme suvalist vale vastust)
        this.andmed.forEach(question => {
            question.choices = this.võtaSuvalisedVastused(question.correctAnswer);
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
            if (this.valitudVastus === this.andmed[this.praeguseKüsimuseIndeks].correctAnswer && !this.õigestiVastatud[this.praeguseKüsimuseIndeks]) {
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
    /*
    HARDCODED WIDTH, KUNI EI OLE PAREMAT LAHENDUST
    */ 
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
  .pealinnaAsukoht > img{
    width: 250px;
    height: 250px;
    border-radius: 25px; 
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
    width: auto;
   }
   .kontrolliJajärgmineNupud > button {
    background-color: #55E0E5;
    align-items: center;
    justify-content: center;
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
    align-items: center;
  }
  .kontrolliJajärgmineNupud > button:hover {
    background-color: #33d9ff;
  }

   .answer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
   </style>