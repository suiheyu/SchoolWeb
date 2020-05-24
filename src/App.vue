<template>
  <div id="app" class="container-fluid shadow-sm p-3 mb-5 bg-white rounded">
    <div class="row" v-if="!isWelcom">
      <SSHeader />
    </div>
    <div class="row" v-if="!isWelcom">
      <SSNav />
    </div>
    <div class="row" v-if="!isWelcom">
      <SSCarousel :pics="carouselPics" :pic-id="moduleId" />
    </div>
    <div class="row">
      <router-view @ss-change="ssChangeListner" />
    </div>
    <div class="row" v-if="!isWelcom">
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
    console.log("route :",this.$route);
    return {
      moduleId: -1,
      carouselPics : ["/img/pic1.gif","/img/pic2.gif","/img/pic3.gif","/img/pic4.gif","/img/pic5.gif","/img/pic6.gif"]
    };
  },
  computed: {
    isWelcom:function(){
      return this.$route.path == "/";
    }
  },
  methods:{
    ssChangeListner:function(id){
      this.moduleId = id;
      console.log('ss change ',id);
    }
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
