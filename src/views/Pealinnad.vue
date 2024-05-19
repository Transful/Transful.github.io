<template>
    <div>
        <p>Pealinnad</p>
        <table class="table">
            <thead>
                <tr>
                    <th>LIPP</th>
                    <th>RIIK</th>
                    <th>PEALINNA SEOS</th>
                    <th>ASUKOHT</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in andmed" :key="index">
                    <td>
                        <img :src="require(`@/assets/lipud/${item.lipp}`)" height="100" alt="Riigi lipp">
                    </td>
                    <td>{{ item.riik }}</td>
                    <td>
                        <span><p>{{ item.pealinn }}: </p><p v-html="item.seosJutt"></p></span>
                        <img :src="require(`@/assets/seosed/${item.seosPilt}`)" height="250" alt="Seos Pilt">
                    </td>
                    <!--
                    <td>{{ item.pealinnAsukoht }}</td>
                    -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            ajutineData: state => state.kõikRiigid
        })
    },
    data() {
        return {
            andmed: []
        }
    },
    created() {
        this.andmed = this.ajutineData.map(item => {  
            if(!item.nimi || !item.pealinn || !item.seosPealinn || !item.seosPealinnPilt || !item.lipp) {
                console.log('Andmed on puudulikud');
            }
            return {
                riik: item.nimi,
                pealinn: item.pealinn,
                seosJutt: item.seosPealinn,
                seosPilt: item.seosPealinnPilt,
                lipp: item.lipp,
            }
        });
    }
}
</script>

<style scoped>
.table {
    width: 80%;
    border-collapse: collapse;
    margin: 20px;
}

.table th {
    background-color: lightblue;
    color: black;
}

.table td {
    background-color: white;
}

.table th, .table td {
    padding: 10px;
    border: 1px solid black;
}
</style>