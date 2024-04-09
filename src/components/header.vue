<template>
<header>
    <div class="transfulLogoJaNimi" v-if="!isNavVisible">
      <img @click="pealehele()" :src="require('@/assets/logo-transful.png')" alt="Transful logo">
      <h1 @click="pealehele()">TRANSFUL</h1>
    </div>
    
    <div class="hamburger" @click="toggleNav($event)" v-if="screenWidth <= 800">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div v-if="isNavVisible">
      <ul>
        <li><router-link to="/pealinnad">PEALINNAD</router-link></li>
        <li><router-link to="/lipud">LIPUD</router-link></li>
        <li><router-link to="/tehnikad">TEHNIKAD</router-link></li>
        <li><router-link to="/meie">MEIE</router-link></li>
        <li><router-link to="/mänguMenüü">Mängu menüü</router-link></li>
        <li><router-link to="/mänguLõpp">Testimine</router-link></li>
      </ul>
    </div>
    
      <ul class="nav" v-if="screenWidth > 800">
          <!--
            <li class="dropdown">
            <router-link to="/seoste-andmebaasid">Seosed <img class="dropdownpicture" :src="require('@/assets/dropdown.png')"></router-link>
            <div class="dropdown-menu">
              <router-link to="/">PEALINNAD</router-link>
              <router-link to="/">LIPUD</router-link>
            </div>
          </li>
        -->
          <li><router-link to="/pealinnad">PEALINNAD</router-link></li>
          <li><router-link to="/lipud">LIPUD</router-link></li>
          <li><router-link to="/tehnikad">TEHNIKAD</router-link></li>
          <li><router-link to="/meie">MEIE</router-link></li>
          <li class="dropdown">
            <router-link to="/seoste-andmebaasid">Mängud <img class="dropdownpicture" :src="require('@/assets/dropdown.png')"></router-link>
            <div class="dropdown-menu">
              <router-link to="/mänguMenüü">Mängu menüü</router-link>
              <router-link to="/">Mäng 2</router-link>
              <router-link to="/">Mäng 3</router-link>
              <RouterLink to="/mänguLõpp">Testimine</RouterLink>
            </div>
          </li>
      </ul>
</header>
</template>

<script>
    export default {
    name: "getHeader",
    data() {
      return {
        isNavVisible: false,
        screenWidth: 0
      };
    },
    methods: {
      pealehele(){
        return this.$router.push('/');
      },
      toggleNav(event) {
        this.isNavVisible ? this.isNavVisible = false : this.isNavVisible = true;
        event.target.classList.toggle("change");
      },
      updateWidth() {
        this.screenWidth = window.innerWidth;
      }
    },
    mounted() {
      // Navigatsioonist klikitud lingi taustavärv muutub mustaks / ei tea kas on vajalik? :) Sest ei tööta ka täiesti korralikult
      let links = this.$el.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', function() {
          links.forEach(lnk => lnk.style.backgroundColor = '');
          this.style.backgroundColor = 'black';
        });
      });
      this.updateWidth();
      window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  }
}

</script>


<style scoped>

/*Hamburger menu*/
.hamburger {
  display: inline-block;
  cursor: pointer;
}
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #55E0E5;
  margin: 6px 0;
  transition: 0.15s;
}

.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}


@media (max-width: 400px) {
  .nav {
    display: none;
  }
}

/*----------------------------*/


/*Dropdown menu*/
.dropdown {
  position: relative;
}
.dropdownpicture{
  width: 18px;
  height: auto;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  width: 200%;
  background-color: #55E0E5;
  display: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #55E0E5;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/*****************************/
header{
    top: 0;
    position: static;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Raleway-Bold, sans-serif;

}
.transfulLogoJaNimi{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding-left: 15ch;
  padding-top: 2ch;
}
.transfulLogoJaNimi>img:hover, .transfulLogoJaNimi>h1:hover{
  cursor: pointer;
}

.transfulLogoJaNimi>img{
  width: 100px;
  height: auto;
  padding-right: 2ch;
}

.transfulLogoJaNimi>h1{
  color: #55E0E5;
  text-decoration: none;
  user-select: none;

}
.nav{
    padding-top: 2ch;
    justify-content: center;
    display: flex;
    list-style-type: none;
    padding-right: 15ch;
}
.nav a:hover {
    background-color: rgb(0, 0, 0);
    color: #55E0E5;
}

.nav a {
    padding: 10px 15px;
    text-align: center;
    display: block;
    color: #ffffff;
    font-size: .99em;
    text-transform: uppercase;
    text-decoration: none;
}

ul.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

/*
max-width: 600px - töötab medial mis on 600px või väiksem
min-width: 600px - töötab medial mis on 600px või suurem

*/
@media(max-width: 250px){
  .logoButton{
    display: none;
  }
}
/*

@media(min-width: 921px){
  .header, .nav{
    display: flex;
  }
  .header{
    flex-direction: row;
    justify-content: space-between;
  }
}

@media(max-width: 920px){
  .logoButton{
    display: none;
  }
  .nav {
    text-align: center;
  }

  .nav a {
    padding: 10px;
    font-size: 1em;
  }
  .header{
    display: block;
  }
}
*/
@media(max-width: 1120px){ /* 1120 ja väiksem*/
  .transfulLogoJaNimi{
    padding-left: 5ch;
  }
}

@media(max-width: 1021px){ /* 1021 ja väiksem*/
  .transfulLogoJaNimi{
    padding-left: 1ch;
  }
  .nav{
    padding-right: 10px;
  }
  
}
@media(max-width:845){ /* 845 ja väiksem*/

  /*
  Siit maalt hakkab ka taustapilt liikuma??
  ja läheb katki?
  ja siit peaks ka headeri ja nav-i kujundust muutma?
  */
}
</style>