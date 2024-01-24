<template>
  <div class="background">
    <getHeader />
    <div class="container">

      <RouterView/>

    </div>
    <getFooter />
  </div>
</template>

<script>
import getFooter from '@/components/footer.vue';
import getHeader from '@/components/header.vue';
export default {
  name: "App",
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
  /* Add similar lines for other font styles if available (e.g., Bold, Italic) */
}
.background{
  background-image: url("/src/assets/Veebilehe-taust.png");
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  height: 100%;
  min-height:100vh;
}
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  flex: 1;
}
</style>
