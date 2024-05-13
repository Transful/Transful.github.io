<template>
    <img :src="require('@/assets/postitused/postitus2/header.png')" alt="Headeri pilt" height="300">
    <div class="columnLayout3">
        <div></div> <!-- Column 1-->
        <div class="mainContent"> <!-- Column 2-->
            <div></div> <!-- Inner Column 1-->
            <div><!-- Inner Column 2-->
                <h1>KREEKA TÄHESTIKU MEELDE JÄTMINE KASUTADES OMAENDA KODU</h1>
                <p>Kui me kohtame inimest, kes tundub meile tuttav, aga me ei suuda päris täpselt välja mõelda, kes ta on, hakkame me mõtlema, 
                    <span class="erilineTekst">kus</span> me seda inimest näinud oleme. Kui me astume mingisse tuppa eesmärgiga midagi teha, 
                    aga tuppa sisenemisel on mõte lendu läinud, liigume tavaliselt tagasi kohtadesse, kus olime mõned hetked tagasi viibinud, 
                    lootes kaduma läinud mõtte saba taas üles leida. Inimesele on omane mõelda asukohtade kontekstis, sest meie visuaalne mälu 
                    saab nii täistuuridel toimetada.
                    <br><br>
                    <span class="erilineTekst">Teekonna meetod</span> on mälutehnika, mille puhul millegi meelde jätmiseks kujutatakse ette mingit 
                    tuttavat teerada, millele lisatakse peatused, kuhu asetatakse näiteks mingid esemed, mis on vaja meelde jätta. Järgnevalt näitan, 
                    kuidas saaks seda meetodit kasutada kreeka tähestiku meelde jätmiseks.
                </p>

                <div class="columnLayout2">
                    <div> <!-- Inner Inner Column 1-->
                        <h1>1. PANE PAIKA TEEKOND</h1>
                        <p class="pildiKõrvalTekst">
                            Kreeka tähestikus on 24 tähte ehk vaja läheb <span class="erilineTekst">24 peatusega teekonda.</span> Mina kasutasin näiteks
                             oma kunagist koolimaja, aga alustuseks toimib hästi ka enda kodu. Seda oskavad kõik selgelt visualiseerida. Alustada võiks
                              kindlast alguspunktist (näiteks välisuks) ja edasi liikuda peatusest peatusesse <span class="erilineTekst">päripäeva</span>
                               nii, et teekond omavahel ei lõikuks. Näiteks võivad peatused olla sellised: nagi, riidekapp, televiisor, tugitool, vaip.
                        </p>
                    </div>
                    <div> <!-- Inner Inner Column 2-->
                        <img :src="require('@/assets/postitused/postitus2/pilt1.png')" alt="Pilt 1">
                        <p class="pildiAluneTekst">
                            Kehaosade valikuvõimalused
                        </p>
                    </div>
                </div>

                <div> <!-- Normal column layout-->
                    <h1>2. JAGA TÄHED PEATUSTE VAHEL ÄRA</h1>
                    <p class="pildiKõrvalTekst">
                        Kui kirjutasid kõik peatused endale välja (näiteks paberile või ehk lausa Excelisse), siis nüüd kirjuta iga peatuse järele üks täht 
                        kreeka tähestikust. <span class="erilineTekst">Kreeka tähestik:</span> ALFA, BEETA, GAMMA, DELTA, EPSILON, ZEETA, EETA, TEETA, IOOTA, KAPA, LAMBDA, MÜÜ, NÜÜ, KSII, OMIKRON, PII, ROO, SIGMA, TAU, ÜPSILON, FII, HII, PSII, OOMEGA.
                    </p>
                </div>
                <!-- JÄTKA SIIT-->
            </div>
        </div>
        <div></div> <!-- Column 3-->
    </div>
</template>
<script>

</script>

<style scoped>

.columnLayout3{
    display: grid;
    grid-template-columns: 0.5fr 10fr 0.5fr;
    grid-template-rows: auto;
}

.columnLayout2{
    display: grid;
    grid-template-columns: 50% 50%;
}

.columnLayout2 img{
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 25px;
}

.mainContent{
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: auto;
    background-color: rgb(0, 0, 0, 0.7);
    
}

h1{
    font-size: 40px;
    text-align: center;
}

p{
    font-size: 20px;
    text-align: justify;
    padding: 20px;
    margin-left: 10ch;
    margin-right: 10ch;
    color: white;
}

.erilineTekst{
    color: #55E0E5;
    font-size: 19px;
    font-weight: bold;
}

.pildiAluneTekst{
    font-size: 15px;
    text-align: center;
    color: #FFFFFFA1;
    font-size: 20px;
}

.pildiKõrvalTekst{
    letter-spacing: 0.8px;
}

.link{
    color: #55E0E5;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;

}
</style>