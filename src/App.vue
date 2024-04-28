<template>
    <getHeader />
    <div class="container">

      
      <router-view></router-view>

    </div>
    <getFooter />
</template>

<script>
import getFooter from '@/components/footer.vue';
import getHeader from '@/components/header.vue';
export default {
  name: "App",
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // Other meta tags can be added here if needed
    ],
  },
  components: {
   getFooter,
   getHeader
}
};
</script>

<style>
@font-face {
  font-family: 'Raleway';
  src: url('@/assets/fonts/Raleway/static/Raleway-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway-Bold';
  src: url('@/assets/fonts/Raleway/static/Raleway-Bold.ttf') format('truetype');
}
  /* Add similar lines for other font styles if available (e.g., Bold, Italic) */
  
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;
    width: 100%;
    align-content: start;
  }

#app {
  text-align: center;
  overflow: auto;

}
body{
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url("@/assets/Veebilehe-taust.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

h1, h2, h3, h4, h5, h6{
  font-family: Raleway-Bold, sans-serif;
  color: #55E0E5;
}


</style>
