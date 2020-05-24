<template>
  <div :id="tagId" class="carousel slide" data-ride="carousel" :style="{height: height,width: width}">
    <ol v-if="enableIndicator" class="carousel-indicators">
      <li v-for="(pic,id) in currentPics" :key="id" :data-target="'#'+tagId" :data-slide-to="id" :class="{active: id == 0}"></li>
    </ol>
    <div class="carousel-inner carouse-fg">
      <img class="carouse-fg" src="/img/pic_bg.png" />
      <div v-for="(pic,id) in currentPics" :key="pic" :class="{'carousel-item':true,active :id == 0}">
        <img class="d-block" :src="pic" :style="{height: height}" style="margin-left:35%">
      </div>
        <!-- <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide"> -->
    </div>
    <a v-if="enableControl" class="carousel-control-prev" :href="'#'+tagId" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a v-if="enableControl" class="carousel-control-next" :href="'#'+tagId" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
const idPrefiex = "carousel-";
export default {
  props: {
    height: {
      type: String,
      default: "25rem"
    },
    width: {
      type: String,
      default: "100%"
    },
    picId: {
      type: Number,
      required: false
    },
    pics: {
      type: [String, Array],
      required: true
    },
    enableControl: {
      type: Boolean,
      default: true
    },
    enableIndicator: {
      type: Boolean,
      default: true
    },
    tagId: {
      type: String,
      default: function() {
        return idPrefiex + (Math.random() * 1000).toFixed(0);
      }
    }
  },
  data() {
    return { menus: "teatDate" };
  },
  computed: {
    currentPics: function(){
      return this.picId != undefined && this.picId > 0 ? [this.pics[this.picId - 1]] : this.pics;
    }
  }
};
</script>
<style lang="scss" scoped>
.carouse-fg{
  position: absolute;
  width: 100%;
  height: 25rem;
  z-index: 10;
  display: block;
}
</style>
