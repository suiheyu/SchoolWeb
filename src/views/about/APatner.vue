<template>
      <SSMainItem :use-context-margin="useContextMargin">
        <div class="ss-a-patner d-flex justify-content-around align-items-baseline">
          <div v-for="(item,id) in patners" :key="id" class="d-flex flex-column justify-content-center item">
            <span class="ss-title-font">{{item.name}}</span>
            <img :src="item.imageUrl" :style="item.imageStyle"/>
          </div>
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        useContextMargin: true,
        patners:[
          {
            name:"木寸公益",
            imageUrl:"/img/page/about/patner_mcgy.jpg"
          },
          {
            name:"泰山慈善基金会",
            imageUrl:"/img/page/about/patner_tscsjjh.jpg",
            imageStyle: {
              marginTop: "2.8rem",
              height: "4.5rem"
            }
          },
          {
            name:"童年一课",
            imageUrl:"/img/page/about/patner_tnyk.jpg",
            imageStyle: {
              marginTop: "1.8rem",
              height: "6.5rem"
            }
          }
        ]
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-a-patner{
  > div{
    height: 14rem;

    > span{
      margin: 1rem 0;
      text-align: center;
    }
    > img{
      height: 7rem;
      margin-top: 1rem;
    }
  }
}

</style>