<template>
      <SSMainItem :use-context-margin="useContextMargin">
        <div class="ss-a-patner d-flex justify-content-around">
          <div v-for="(item,id) in patners" :key="id" class="d-flex flex-column justify-content-start item">
            <span class="ss-title-font">{{item.name}}</span>
            <img :src="item.imageUrl"/>
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
            name:"泰山慈善基金会",
            imageUrl:"/img/pic1.png"
          },
          {
            name:"木寸公益",
            imageUrl:"/img/pic1.png"
          },
          {
            name:"童年一课",
            imageUrl:"/img/pic1.png"
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
      height: 10rem;
    }
  }
}

</style>