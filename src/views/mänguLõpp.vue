<template>
    <div class="containerOuter">
        <div class="containerInner">
            <h1>Mäng on lõppenud</h1>
            <button @click="goToMänguMenüü">Mängi uuesti!</button>
        </div>
        
    </div>

</template>
<script>
export default {
    // ...
    methods: {
        goToMänguMenüü() {
            this.$router.push("/mänguMenüü");
        },
        // other methods...
    },
    // ...
};
</script>

<style scoped>
.containerOuter{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 5ch;
    color: #55E0E5;
    margin-bottom: 100px;
    user-select: none;
   }
.containerInner{

    background-color: #0B1C24;
    color: #55E0E5;
    border-radius: 36px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 10ch;
    padding-right: 10ch;    
  }
</style>
