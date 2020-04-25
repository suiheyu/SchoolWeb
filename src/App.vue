<template>
  <div id="app" class="container-fluid shadow-sm p-3 mb-5 bg-white rounded">
    <div class="row" >
      <SSHeader />
    </div>
    <div class="row">
      <SSNav />
    </div>
    <div class="row">
      <SSCarousel :pics="carouselPics"></SSCarousel>
    </div>
    <div class="row">
      <router-view />
    </div>
    <div class="row">
      <SSFooter />
    </div>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

console.log("publicPath",process.env.BASE_URL)
export default {
  data:function() {
    return {
      carouselPics : ["/img/pic1.png","/img/pic2.png","/img/pic3.jpg","/img/pic4.jpg","/img/pic5.jpg","/img/pic6.jpg"]
    };
  }
}
</script>
<style lang="scss">
html{
    font-size: 16px;
}
body{
    background-color: rgba(147, 224, 229, 0.14);
    line-height: 160%;
    letter-spacing: 0.02em;
}
#app{
  width: 80rem;
}
</style>
