<template>
  <div class="ss-school-item py-2">
    <div class="school-name py-2">
      <p class="head m-0"><span><span><span>{{`${id}、${name}`}}</span></span></span></p>
    </div>
    <div class="intro py-2">
      <p class="wrap-text m-0">{{introduction}}</p>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="school-pic mt-4 mb-2">
        <img :src="imageUrl" />
      </div>
      <p class="mt-1 md-1 school-name-pic"><span>{{name}}</span></p>
    </div>
    <div class="job-info">
      <p class="wrap-text mt-1 md-1">{{jobOffers}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:["id","name","imageUrl","introduction","jobOffers"],
  data() {
    return { menus: "testData" };
  }
};
</script>
<style lang="scss" scoped>
.wrap-text{
  word-wrap: break-word;
}
.ss-school-item{
  .head{
    span{
      color: #00afcd;
    }
    $baseRem: 0.3rem;
    > span{
      background-color: #cef1fe;
      display: inline-flex;
      transform: translate(-1 * $baseRem, -1 * $baseRem);
      > span{
        background-color: #cef1fe;
        display: inline-flex;
        transform: translate(0.4rem, 0.6rem);
        > span{
          background-color: #b6ebfe;
          transform: translate(-1 * ($baseRem + 0.1rem), -1 * $baseRem);
        }
      }
    }
  }
  .school-name{
    font-size: $ssTitleFontSize * 1.15;
  }
  .school-name-pic{
    font-size: $ssTitleFontSize * 0.9;
    position: relative;
    $bigR: 0.46rem;
    $smallR: 0.3rem;
    $bigColor: #e2f5ff;
    $smallColor: #ffeae4;
    &::before{
      display: block;
      position: absolute;
      width: $bigR * 2;
      content: "";
      height: $bigR * 2;
      border-radius: $bigR;
      background-color: $bigColor;
      top: 0.4rem;
      left: -2rem;
    }
    &::after{
      display: block;
      position: absolute;
      width: $bigR * 2;
      content: "";
      height: $bigR * 2;
      border-radius: $bigR;
      background-color: $bigColor;
      top: 0.4rem;
      right: -2rem;
    }
    > span{
      &::before{
        z-index: 1;
        display: block;
        position: absolute;
        width: $smallR * 2;
        content: "";
        height: $smallR * 2;
        border-radius: $smallR;
        background-color: $smallColor;
        top: 0.55rem;
        left: -1.3rem;
      }
      &::after{
        z-index: 1;
        display: block;
        position: absolute;
        width: $smallR * 2;
        content: "";
        height: $smallR * 2;
        border-radius: $smallR;
        background-color: $smallColor;
        top: 0.55rem;
        right: -1.3rem;
      }
    }
  }
  .school-pic{
    >img{
      $transfrom: 0.4rem;
      transform: translate($transfrom, $transfrom * -1);
    }
    background-color: #c5e3d3;
  }
  .intro{
    margin-left: 0.8rem;
    padding-left: 0.6rem;
    border-left: 0.1rem dashed #a19fa1;
    font-size: $ssContentFontSize;
  }
  .job-info{
    border-top: 0.05rem solid #7799c1;
    border-bottom: 0.05rem solid #7799c1;
    > p{
      text-indent: 2rem;
    }
  }
}
</style>
