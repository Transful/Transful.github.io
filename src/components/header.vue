<template>
<header class="header">
    
    <ul class="nav">
        <li><router-link to="/">Avaleht</router-link></li>
        <li><router-link to="/seoste-andmebaasid">Seosed</router-link></li>
        <li><router-link to="/blogi">Blogi</router-link></li>
        <li><router-link to="/meist">Meist</router-link></li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
    
      </ul>

</header>
</template>

<script>
    export default {
    name: "getHeader",
}
</script>
<style scoped>
.header{
    top: 0;
    position: sticky;
    padding-top: .5em;
    padding-bottom: .5em;
    border: 1px solid #938f8f;
    margin-top: 0px;
    background-image: linear-gradient(0,#86A789,#405041);/* #86A789*/
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.75);
    border-radius: 15px;
    width: 100%;
    
    
}
.nav{
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: center;
    display: flex;
    list-style-type: none;
}
.nav a:hover {
    background-color: rgb(196, 185, 185);
}

.nav a {
    padding: 10px 15px;
    text-align: center;
    display: block;
    color: #000000;
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
@media(min-width: 768px){
  .header, .nav{
    display: flex;
  }
  .header{
    flex-direction: row;
    justify-content: space-between;
  }
}

@media(max-width: 767px){
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
</style>