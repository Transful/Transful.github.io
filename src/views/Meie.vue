<template>
    <div class="container">
        <div>
            <div id="meeskond">
                <h1 class="pealkiri" id="meeskondH1">MEESKOND</h1>
                <div class="veergudeLayout">
                    <div class="meeskonnaLiige">
                        <img src="@/assets/kai.jpg" alt="Kai" width="200" height="200">
                        <h2>Kai-Melli Kapten</h2>
                        <p>Turundus- ja koolitusjuht</p>
                    </div>
                    <div class="meeskonnaLiige">
                        <img src="@/assets/liisa.jpg" alt="Liisa" width="200" height="200">
                        <h2>Liisa Peterson</h2>
                        <p>Andmebaasi projektijuht</p>
                    </div>
                    <div class="meeskonnaLiige">
                        <img src="@/assets/lija.jpg" alt="Lija" width="200" height="200">
                        <h2>Lija Jegisman</h2>
                        <p>Operatiivjuht</p>
                    </div>
                    <div class="meeskonnaLiige">
                        <img src="@/assets/sander.jpg" alt="Sander" width="200" height="200">
                        <h2>Sander Truu</h2>
                        <p>Arendaja</p>
                    </div>
                    <div class="meeskonnaLiige">
                        <img src="@/assets/jaanis.jpg" alt="Jaanis" width="200" height="200">
                        <h2>Jaanis Soosaar</h2>
                        <p>Arendaja</p>
                    </div>
                </div>
            </div>
            <div class="juttJaPilt">
                <div class="jutuDiv">
                    <h1 class="pealkiri">MEIE LUGU</h1>	
                    <p align="justify">
                        Transful sai alguse 2022. aasta sügisel Tartu Ülikooli kursuse <strong>“Ettevõtluse alused”</strong>
                        ja <strong>STARTERtartu</strong> raames kui kolm majandustudengit ja üks psühholoogia tudeng otsustasid,
                        et teeme ära.
                        <br>
                        Idee sai alguse Delta raamatukogust, kus maadeldes ingliskeelse sotsioloogia õpikuga, avastas Kai-Melli,
                        et lööb tõlkemootorisse sõnu, mida oli just paar minutit tagasi tõlkinud. <strong>Haugimälu, või mis?</strong>
                        <br>
                        See märkamine pani aluse kestvale uurimisretkele aju, õpi- ja mälutehnikate maailmas,
                        selgitamaks välja õppimise põhitõed. Põhitõde? Õppimine ei koosne vaid mehaanilisest tuupimisest.
                        Tuleb luua ka seoseid. Aga miks mitte luua seoste andmebaasi, mis aitaks seostamist kergemaks muuta?
                    </p>
                </div>
                <div class="kontaktiPilt">
                    <img class="pilt" src="@/assets/kontaktiPilt.jpg" alt="kontaktiPilt" width="500" height="300">
                </div>
            </div><!--juttJaPilt-->
            <h1 class="pealkiri">KOOSTÖÖPARTNERID</h1>
            <div class="koostööpartnerid">
                <div class="partneriteLogoVasak">
                    <img src="@/assets/startupLab.png" alt="sTARTUpLab" width="150" height="150">
                </div>
                <div class="partneriteLogoParem">
                    <img src="@/assets/universityofTartu.png" alt="University Of Tartu" width="250" height="47.96">
                </div>
            </div>
        </div>
    </div>
  </template>
  
<style scoped>
.pealkiri{
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #55E0E5;
}
#meeskondH1{
    margin-top: 2em;
    margin-bottom: 2em;
}
#meeskond{
    margin-top: 2em;
    margin-bottom: 2em;
}
.veergudeLayout{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
.meeskonnaLiige{
    align-items: center;
    margin-bottom: 2em;
}
.meeskonnaLiige h2{
    color: #55E0E5;
    text-align: center;
}
.meeskonnaLiige p{
    text-align: center;
    font-size: 1.2em;
    color: white;
}
.meeskonnaLiige img{
    border-radius: 10%;
    border: black 3px solid;
    box-shadow: 0 0 10px #55E0E5;

}

.juttJaPilt{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    /*
    background-color: rgb(0, 0, 0, 0.5);
*/
}
.jutuDiv{
    width: 100%;
    margin-left: 2em;
    margin-bottom: 4em;
    color: white;
}
.jutuDiv p{
    font-size: 1.4em;
}

.kontaktiPilt{
    margin-top: 4em;;
    margin-right: 2em;
    margin-bottom: 4em;
    user-select: none;

}
.pilt{
    border-radius: 10px;
    width: 80%;
    height: auto;
    user-select: none;
}
.koostööpartnerid{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4em;
}
.partneriteLogoVasak{
    margin-right: 2em;
}
.partneriteLogoParem{
    margin-left: 2em;
}
</style>

<script>

</script>