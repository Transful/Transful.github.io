<template>
    <div class="blog-view">
      <h1>iBlog</h1>
      <p class="centered-text">
        Kas mäletad Harry Potteri filmist seda Tom Riddle’i päevikut, kuhu sulepeaga kirjutades ilmus sinna kohe ka vastus? Noh, see 2002. aasta versioon ChatGPT-st? Kihvt oleks sellist raamatut omada, aga isegi seal poleks vist kõiki vastuseid kirjas, seega tuleb ise eksperimenteerida. Siin saad aimu sellest, kuidas meil õnnestub meie idu ehitamine ja mälutehnikate maailma kaardistamine.       </p>
      <div class="blog-post-container">
        <div class="blog-post" v-for="post in posts" :key="post.id" @click="valiPostitus(post.postitus)">
            <div class="postituse-pilt">
                <img :src="require(`@/assets/blogiPildid/${post.pilt}`)" alt="Postituse pilt" width="200" height="200">
            </div>
            <br>
            <div class="postituse-sisu">
                <div class="filtriDisain">
                    <a href="">{{ post.filter}}</a>
                </div>
                <div class="kuupäevJaKalendriIkoon">
                    <img :src="require('@/assets/kalender.png')" alt="Kalendri ikoon" width="40" height="40">
                    <p>{{ post.kuupäev}}</p>
                </div>
                <h2>{{ post.pealkiri }}</h2>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    methods: {
        valiPostitus(postitus) {
            this.$router.push({ name: 'postitus', params: {postitus: postitus } });
        },
    },
    async created() {
        console.log('Created, laen postitused');

        let ajutinePosts =  this.$store.getters.getPostitused;

        //imporditudAndmed = JSON.parse(JSON.stringify(imporditudAndmed));
        
        //let ajutineData = imporditudAndmed.muudetudAndmed;

        this.posts = ajutinePosts.map(item => {
            if(!item.id || !item.pilt || !item.filter || !item.kuupäev || !item.pealkiri || !item.postitus) {
                console.log('Andmed on puudulikud');
            }
            return{
                id: item.id,
                pilt: item.pilt,
                filter: item.filter,
                kuupäev: item.kuupäev,
                pealkiri: item.pealkiri,
                postitus: item.postitus
            }

        }).reverse();
        console.log('Postitused:', this.posts);

    },
  };
  </script>
  
  <style scoped>
  .blog-view {
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
    padding: 2rem;
  }
  
  .centered-text {
    text-align: left;
    font-size: 18px;
    margin-bottom: 2rem;
    color: white;
    padding-left: 15ch;
    padding-right: 15ch;
  }
  
  .blog-post-container {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: center;*/
  }
  
  .blog-post {
    background-color: #f5f5f5;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    width: calc(25% - 20px);
    margin: 0 10px 20px 10px;
  }

  .postituse-pilt {
    overflow: hidden;
  }
  
  .blog-post .postituse-pilt {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
}

.blog-post .postituse-pilt img {
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
    width: 100%;
}


  .blog-post:hover {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .blog-post:hover .postituse-pilt img {
    transform: scale(1.15);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  @media (max-width: 1248px) {
    .blog-post {
      width: calc(33% - 20px);
    }
    .centered-text{
        padding-left: 5ch;
        padding-right: 5ch;
        
    }
  }
  
  @media (max-width: 1020px) {
    .blog-post {
      width: calc(50% - 20px);
    }
  }
  
  @media (max-width: 700px) {

    .blog-post {
      width: 100%;
    }
    .centered-text{
        padding-left: 1ch;
        padding-right: 1ch;
    }

    /* KATKINE KARUSELL*/
    /*
    .blog-post-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-left: 500px;
    }
    .blog-post {
        flex: 0 0 auto;
        flex-wrap: wrap;
        max-width: calc(100% - 20px);
        margin: 0 10px; 
    }
    .blog-post:first-child {
        padding-left: 0;
    }
    .blog-post:last-child {
        margin-right: 0;
    }
    */
  }

  .filtriDisain > a{
    color: black;
    background-color: #55E0E5;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    text-decoration: none;
    line-height: 16px;
    letter-spacing: 0.6px;
    word-spacing: 0px;
    padding: 4px 4px 4px 4px;
    border-radius: 7px;
  }

  .kuupäevJaKalendriIkoon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .postituse-sisu > h2 {
    color: black;
  }
  </style>