<template>
    <div class="mainContent">
        <div class="tabeliMenüü">
            <div>
                <h1>LIPUD</h1>
            </div>
            <div></div>
            <div class="tabeliMenüüFiltrid">
                <div class="tabeliMenüüInner">
                    <label class="labelAsukoht">Filtreeri asukoha järgi</label>
                    <select class="valiAsukoht" v-model="asukohtFilter">
                        <option value="">Kõik asukohad ({{ andmed.length }})</option>
                        <option v-for="option in asukohtOptions" :value="option">{{ option }} ({{ asukohtCounts[option] }})</option>
                    </select>
                </div>
                <div class="tabeliMenüüInner">
                    <label class="labelNimi">Filtreeri riigi nime järgi</label>
                    <input class="valiRiik" type="text" placeholder="Filtreeri riigi nime järgi..." v-model="filter"/>
                </div>
            </div>
        </div>

        <v-table class="table">
            <thead>
                <tr>
                    <th>LIPP</th>
                    <th>RIIK</th>
                    <th>LIPU SEOS</th>
                    <th>ASUKOHT</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredRows" :key="index">
                    <td>
                        <img class="lipuJaSeosePilt" :src="require(`@/assets/lipud/${item.lipp}`)" height="100" alt="Riigi lipp">
                    </td>
                    <td v-html="highlightMatches(item.riik)"></td>
                    <td>
                        <span class="seoseJutt">
                            <p v-html="item.seosJutt"></p>
                        </span>
                        <img class="lipuJaSeosePilt" :src="require(`@/assets/lipuseosed/${item.seosPilt}`)" height="250" alt="Seos Pilt">
                    </td>
                    <td>{{ item.asukoht }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            andmed: [],
            filter: '',
            rows: [],
            asukohtFilter: '',
        }
    },

    computed: {
        ...mapState({
            ajutineData: state => state.kõikRiigid
        }),

        asukohtOptions() {
            const options = new Set();
            this.andmed.forEach(item => options.add(item.asukoht));
            return Array.from(options);
        },

        asukohtCounts() {
            const counts = {};
            this.andmed.forEach(item => {
                if (!counts[item.asukoht]) {
                    counts[item.asukoht] = 0;
                }
                counts[item.asukoht]++;
            });
            return counts;
        },

        filteredRows(){
        return this.andmed.filter(item => {
            const riik = item.riik.toLowerCase();
            const searchTerm = this.filter.toLowerCase();
            const asukohtMatch = !this.asukohtFilter || item.asukoht === this.asukohtFilter;
            return riik.includes(searchTerm) && asukohtMatch;
        });
        }
    },

    methods: {
        highlightMatches(text) {
            const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
            if (!matchExists) return text;

            const re = new RegExp(this.filter, 'ig');
            return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
        }
    },
    created() {
        this.andmed = this.ajutineData.map(item => {  
            if(!item.nimi || !item.pealinn || !item.seosLipp || !item.seosLippPilt || !item.lipp || !item.asukoht) {
                console.log('Andmed on puudulikud');
            }
            return {
                riik: item.nimi,
                pealinn: item.pealinn,
                seosJutt: item.seosLipp,
                seosPilt: item.seosLippPilt,
                lipp: item.lipp,
                asukoht: item.asukoht
            }
        });
        this.rows = this.andmed.map(item => item.nimi);
    }
}
</script>

<style scoped>
.mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.table {
    width: 90%;
    border-collapse: collapse;
    border: 1px solid black;
}

.table th {
    background-color: #55E0E5;
    color: black;
    font-size: 25px;
}

.table td {
    background-color: white;
    font-size: 20px;
}

.table th, .table td {
    padding: 10px;
    border: 1px solid black;
}

.lipuJaSeosePilt{
    border: 1px solid black;
}

.tabeliMenüü {
    display: flex;
    justify-content: space-between;
    margin-top: 5ch;
    width: 90%;
}

.tabeliMenüüInner {
    float: right;
    display: flex;
    flex-direction: column;
}

.tabeliMenüüFiltrid{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 50%;
}

.tabeliMenüüFiltrid > div{
    margin: 10px;
}

.labelAsukoht {
    align-items: flex-start;
}
.labelAsukoht, .labelNimi {
    color:  #55E0E5;
    font-size: 20px;
    font-weight: bold;
}

.valiAsukoht {
    padding-left: 20px;
}

.valiRiik {
    align-self: flex-start;
}
.valiAsukoht, .valiRiik {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.seoseJutt {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
}


.pealinn {
    font-weight: bold;
    margin-right: 10px;
    text-decoration: underline;
}

</style>