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
.background{
  background-image: url("/src/assets/Veebilehe-taust.png");
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-attachment: fixed;
  height: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  justify-content: center;
  flex: 1;
}
</style>
