<template>
    <div class="containerOuter">
        <div class="containerInner">
            <div v-if="!täpsemadTulemused">
                <h1>Mäng on lõppenud</h1>
                <h2>Sinu tulemus: {{õigestiVastatudProtsent}}%</h2>

                <div v-if="õigestiVastatudProtsent >= 50 && õigestiVastatudProtsent <= 100">
                    <img class="tulemusePildid" :src="require('@/assets/tulemusHea.png')" alt="First Image">
                    <h2>Päris osav oled :)</h2>
                </div>
                <div v-else>
                    <img class="tulemusePildid" :src="require('@/assets/tulemusHalb.png')" alt="Second Image">
                    <h2>Harjuta veel :)</h2>
                </div>
                
                <br>
                <br>
                <div class="alumisedNupud">
                    <button @click="vaataTulemusi"> Vaata tulemusi</button>
                    <button @click="mineMänguMenüüsse">Mängi uuesti!</button>
                </div>
            </div>
            <div v-if="täpsemadTulemused">
                <h1>Sinu tulemused</h1>

                <div class="alumisedNupud">
                    <button @click="vaataTulemusi"> Tagasi</button>
                    <button @click="mineMänguMenüüsse">Mängi uuesti!</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "getMänguLõpp",
        data() {
            return {
                questionCount: 10,
                continents: ['Põhja-Ameerika', 'Kesk-Ameerika', 'Lõuna-Ameerika', 'Euroopa', 'Aafrika', 'Aasia', 'Okeaania', 'Kõik riigid'],
                selectedContinents: [],
                selectedGame: null,
                mängValitud: false,
                vihjetegaMäng: null,
                õigestiVastatudProtsent: 51,
                /////////////
                täpsemadTulemused: false,
            };
        },
    methods: {
        mineMänguMenüüsse() {
            this.$router.push("/mänguMenüü");
        },
        vaataTulemusi(){
            if(!this.täpsemadTulemused){
                this.täpsemadTulemused = true;
            }else{
                this.täpsemadTulemused = false;
            }
        }
    },
    async created() {
        console.log('Created, jõudsin mänguLõpp.vue-sse');
    
        // Võtan lõppenud mängu tulemused

        let kõikAndmed = require('/public/riigid.json');
        
        let imporditudAndmed = this.$store.getters.getMuudetudAndmed;
        console.log('Imporditud andmed:', imporditudAndmed);

        // Teen selgeks, kas mäng tuleb vihjetega või ilma
        this.vihjetegaMäng = this.$store.getters.getKasKasutanVihjeid;

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
    
    }, // created
    
};
</script>

<style scoped>
.containerOuter{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 5ch;
    color: #55E0E5;
    margin-bottom: 100px;
    user-select: none;
   }
.containerInner{
    background-color: #0B1C24;
    color: #55E0E5;
    border-radius: 36px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 10ch;
    padding-right: 10ch;    
  }
  .alumisedNupud {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .alumisedNupud button {
    margin: 0 10px;
  }
  button {
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
}

button:hover {
    background-color: #33d9ff;
}
.tulemusePildid{
    width: 250px;
    height: auto;
}
</style>
