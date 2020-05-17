<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
        <div class="d-flex flex-column align-items-center">
          <img v-for="(imageUrl,id) in imageUrls" :key="id" :src="imageUrl" />
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "",
        useContextMargin: true,
        imageUrls:[
          "/img/page/support/sale1.png",
          "/img/page/support/sale2.png",
          "/img/page/support/sale3.png",
          "/img/page/support/sale4.png"
        ]
      }
    }
}
</script>
<style lang="scss" scoped>

</style>