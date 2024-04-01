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
                <div class="täpsemadTulemused">
                    <div>
                        <h3>Valitud mäng:</h3>
                        <p>{{ selectedGame }}</p>
                    </div>
                    <div>
                        <h3>Valitud kontinendid:</h3>
                        <p>{{ selectedContinents.join(', ') }}</p>
                    </div>
                    <div>
                        <h3>Küsimuste arv:</h3>
                        <p>{{ questionCount }}</p>
                    </div>
                    <div>
                        <h3>Skoor:</h3>
                        <p>{{ skoor }}</p>
                    </div>
                    <div>
                        <h3>Õigesti vastatud protsent:</h3>
                        <p>{{ õigestiVastatudProtsent }}%</p>
                    </div>
                    <div>
                        <h3>Kas mängisid vihjetega?</h3>
                        <p>{{ vihjetegaMäng ? 'Jah' : 'Ei' }}</p>
                    </div>
                    <div>
                        <h3>Kasutatud vihjete arv:</h3>
                        <p>{{ kasutatudVihjeteArv }} - Hetkel veel ei tööta</p>
                    </div>
                    <br>
                </div>
                <div class="alumisedNupud">
                    <button @click="vaataTulemusi"> Tagasi</button>
                    <button @click="mineMänguMenüüsse">Mängi uuesti!</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: "getMänguLõpp",
        data() {
            return {
                mängValitud: false,
                täpsemadTulemused: false,
                /////////////
                selectedGame: null,
                questionCount: 0,
                selectedContinents: [],
                vihjetegaMäng: null,
                skoor: 0,
                kasutatudVihjeteArv: 0,
                õigestiVastatudProtsent: 0,


            };
        },
    computed: {
        ...mapGetters(['getTestInfo']),
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
        const { selectedGame, questionCount, selectedContinents, vihjetegaMäng, testResults } = this.getTestInfo;

        this.selectedGame = selectedGame;
        if(selectedGame === 'pealinnadeMäng'){
            this.selectedGame = 'Pealinnade mäng';
        }else if(selectedGame === 'lippudeMäng'){
            this.selectedGame = 'Lippude mäng';
        }else if(selectedGame === 'lippudeMäng2'){
            this.selectedGame = 'Lippude mäng 2';
        }
        this.questionCount = questionCount;
        this.selectedContinents = selectedContinents;
        this.vihjetegaMäng = vihjetegaMäng;
        this.skoor = testResults.skoor;
        this.kasutatudVihjeteArv = testResults.kasutatudVihjeteArv;
        this.õigestiVastatudProtsent = (testResults.skoor / questionCount) * 100;

        console.log('Selected game:', selectedGame);
        console.log('Question count:', questionCount);
        console.log('Selected continents:', selectedContinents);
        console.log('Vihjetega mäng:', vihjetegaMäng);
        console.log('Test results:', testResults);
        console.log('Skoor:', testResults.skoor);
        console.log('Kasutatud vihjete arv:', testResults.kasutatudVihjeteArv);
    
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

.täpsemadTulemused>div{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.täpsemadTulemused>div>h3{
    margin-right: 10px;
}
</style>
