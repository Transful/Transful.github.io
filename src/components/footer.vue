<template>
        <footer>
            <div class="footer-content">
                <div class="col1">
                  <div class="TransfulJaLogo">
                      <img :src="require('@/assets/logo-transful.png')" alt="Transful logo">
                      <h1>TRANSFUL</h1>
                  </div>
                  <div v-if="screenWidth < 600">
                    <ul class="footer-links">
                      <li><router-link to="/tehnnikad">TEHNIKAD</router-link></li>
                      <li><router-link to="/meie">MEIE</router-link></li>
                    </ul>
                  </div>
                  <div class="InstaJaMeil">
                      <div class="Instagram">
                          <a href="https://www.instagram.com/transful_/" target="_blank">
                          <img :src="require('@/assets/instagram.png')" 
                          class="instagram-icon">
                          Instagram</a>
                      </div>
                      <div class="Meil">
                        <a href="mailto:liisa@transful.ee" target="_blank">
                          <img :src="require('@/assets/mail.png')" class="instagram-icon">
                          liisa@transful.ee</a>
                      </div>
                  </div>
                  <p class="copyright">Copyright © 2024 Transful</p>
                </div>
                <div class="col2" v-if="screenWidth >= 600">
                    <ul class="footer-links">
                        <li><router-link to="/tehnnikad">TEHNIKAD</router-link></li>
                        <li><router-link to="/meie">MEIE</router-link></li>
                    </ul>
                </div>
              </div>
        </footer>
</template>

<script>
    export default {
    name: "getFooter",
    data() {
      return {
        screenWidth: 0
      };
    },
    methods: {
      updateWidth() {
        this.screenWidth = window.innerWidth;
      }
    },
    mounted() {
      this.updateWidth();
      window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  }
}
</script>

<style scoped>

.footer-content {
  display: flex;
  position: static;
  width: 100%;
  flex-wrap: wrap;
}

.col1{
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-right: 4ch;
}
.col2{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
}

footer{
    position: static;
    font-family: Raleway-Bold, sans-serif;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    text-align: center;
    padding-top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 600px) {
  .footer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.InstaJaMeil{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 3ch;
  padding-top: 2ch;
}

.TransfulJaLogo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}
.TransfulJaLogo>img{
  width: 100px;
  height: auto;
}
.TransfulJaLogo>h1{
  color: #55E0E5;
}

.Instagram{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.Instagram>a{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #55E0E5;
  text-decoration: none;
  padding-right: 2ch;
}

.instagram-icon {
  width: 35px;
  height: 35px;
  margin-right: 1ch;
}

.Meil>a{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #55E0E5;
  text-decoration: none;
  padding-right: 2ch;
}

.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  list-style: none;
  margin-bottom: 20px;
  font-size: 20px;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links-small ul {
  padding-left: 14px;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.copyright{
  font-size: 14px;
  color: white;
  text-align: left;
  text-decoration: none;
  margin-left: 4ch;
}
</style>