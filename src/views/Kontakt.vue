<template>
    <div class="container">
        <div>
        <h1 class="kutsuMeidKooli">KUTSU MEID KOOLI PROOVITUNDE ANDMA!</h1>
        <div class="juttJaPilt">
            <div class="jutuDiv">
                <p>
                    Kui sind köidab mälutehnikate maailm sama palju kui meid, oleme hea meelega nõus tulema
                     koolidesse üle Eesti, et viia õpilastele läbi tasuta mälutehnikate teemalisi proovitunde,
                     olgu need siis kas mõne aine spetsiifilised või hoopis töötoa vormis.
                </p>
                <p>
                    Kuigi rännak mäluteemade maailmas on alles alguses, oleme selle kohta juba palju õppinud
                    (loe ka meie blogi) ning oleks hea meel seda õpitut ka teistega jagada. 
                </p>
                <p>
                    Töötubade ja seostamistalgute läbiviimine aitaks meil <strong>täiendada oma õppeplatvormi andmebaasi</strong>
                     ning saada tagasisidet juba seal eksisteerivatele seostele. See aitab väga kaasa Transfuli
                      arengule!
                </p>
            </div>
            <div class="kontaktiPilt">
                <img class="pilt" src="@/assets/kontaktiPilt.jpg" alt="kontaktiPilt" width="500" height="300">
            </div>

        </div>
          

          <p>
            Pista kiri siia posti: <a href="mailto:kaimelli.kapten@gmail.com">kaimelli.kapten@gmail.com</a>
          </p>
        </div>
    </div>
  </template>
  
<style scoped>
.kutsuMeidKooli{
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #55E0E5;
    margin-top: 2em;
    margin-bottom: 2em;
}
.juttJaPilt{
    display: flex;
    justify-content: space-between;
    width: 60%;
    padding:5px, 5px, 5px, 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(0, 0, 0, 0.5);
}
.jutuDiv{
    width: 100%;
    margin-top: 1em;
    margin-left: 2em;
    margin-bottom: 4em;
    color: white;
}
.jutuDiv p{
    font-size: 1em;
    text-align: left;
}

.kontaktiPilt{
    margin-top: 1em;;
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
</style>

<script>

</script>