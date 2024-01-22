<template>
        <footer>
            <div class="footer-content">
                <div class="col1">
                    <img :src="require('@/assets/logo-transful.png')" alt="Transful logo" class="logo">
                    <a href="https://www.instagram.com/liisa@transful.ee/" target="_blank" class="instagram-link">
                        <img :src="require('@/assets/instagram.png')" alt="Instagram icon" class="instagram-icon">
                        liisa@transful.ee
                    </a>
                    <a href="mailto:liisa@transful.ee" class="contact-link">liisa@transful.ee</a>
                    <p class="copyright">Copyright © 2024 Transful</p>
                </div>
                <div class="col2">
                    <ul class="footer-links">
                        <li><router-link to="/seoste-andmebaasid">Seosed</router-link></li>
                        <li><router-link to="/blogi">Blogi</router-link></li>
                        <li><router-link to="/meist">Meie</router-link></li>
                        <li><router-link to="/kontakt">Kontakt</router-link></li>
                    </ul>
                </div>
              </div>
        </footer>
</template>

<script>
    export default {
    name: "getFooter",
}
</script>
<style scoped>
.col1{
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
}
.col2{
    display: flex;
    flex-direction: column;
    align-items: right;
    margin-bottom: 20px;
}

footer{
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    align-items: center;
    text-align: center;
    padding: 20px;

    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}
.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  
  .logo {
    width: 100px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .instagram-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    margin-bottom: 20px;
  }
  
  .instagram-icon {
    width: 170px;
    height: 100px;
  }
  
  .copyright {
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: left;
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }
  
  .footer-links li {
    margin: 10px 10px;
  }
  
  .footer-links a {
    color: #333;
    text-decoration: none;
  }
  
  .contact-link {
    color: #333;
    text-decoration: none;
  }
</style>