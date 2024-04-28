<template>
    <div class="blog-view">
      <h1> iBlog</h1>
      <p class="centered-text">
        Kas mäletad Harry Potteri filmist seda Tom Riddle’i päevikut, kuhu sulepeaga kirjutades ilmus sinna kohe ka vastus? Noh, see 2002. aasta versioon ChatGPT-st? Kihvt oleks sellist raamatut omada, aga isegi seal poleks vist kõiki vastuseid kirjas, seega tuleb ise eksperimenteerida. Siin saad aimu sellest, kuidas meil õnnestub meie idu ehitamine ja mälutehnikate maailma kaardistamine.       </p>
      <div class="blog-post-container">
        <div class="blog-post" v-for="post in posts" :key="post.id">
            <!--
                <img src="@/assets/tehnikad.jpg" alt="Tehnikad" width="200" height="200">
            -->
            <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'EdTech HACK "The of L alons- he pool"',
            excerpt: 'Mälutehnikad märts 16, 2024 TÕSISELT ? SA ÕPPISID 100 PII KOMAKOHTA PÄHE ? YEAHHH.',
          },
          {
            id: 2,
            title: 'Mälutehnikad veebruar 9, 2024',
            excerpt: 'MISSION POSSIBLE: 195+ PEALINNA MEELDEJÄTMINE',
          },
          {
            id: 3,
            title: 'PROTOTÜÜBI PROOV NUMBER 123 "EDTECH HACK 2023"',
            excerpt: 'Ettevõtlus november 7, 2023',
          },
          {
            id: 4,
            title: 'EdTech HACK "The of L alons- he pool"',
            excerpt: 'Mälutehnikad märts 16, 2024 TÕSISELT ? SA ÕPPISID 100 PII KOMAKOHTA PÄHE ? YEAHHH.',
          },
          {
            id: 5,
            title: 'Mälutehnikad veebruar 9, 2024',
            excerpt: 'MISSION POSSIBLE: 195+ PEALINNA MEELDEJÄTMINE',
          },
          {
            id: 6,
            title: 'PROTOTÜÜBI PROOV NUMBER 123 "EDTECH HACK 2023"',
            excerpt: 'Ettevõtlus november 7, 2023',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  
  .centered-text {
    text-align: center;
    font-size: 18px;
    margin-bottom: 2rem;
    color: red;
  }
  
  .blog-post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .blog-post {
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    width: calc(25% - 20px);
    margin: 0 10px 20px 10px;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
  }
  
  .blog-post:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    .blog-post {
      width: calc(50% - 20px);
    }
  }
  
  @media (max-width: 480px) {
    .blog-post {
      width: 100%;
    }
  }
  </style>