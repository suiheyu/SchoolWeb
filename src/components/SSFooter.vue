<template>
  <div class="ss-footer container-fluid ss-bg-gray">
    <div class="row justify-content-start">
      <label class="ss-item ss-split-line">法律声明</label>
      <label class="ss-item ss-split-line">网站地图</label>
      <label class="ss-item ss-split-line">联系我们</label>
      <label class="ss-item">梦之队支教助学中心</label>
    </div>
    <div class="row justify-content-start">
      <label class="ss-item">网站统计</label>
    </div>
    <div class="row justify-content-start">
      <label class="ss-item">网络支持</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { menus: "testData" };
  }
};
</script>
<style lang="scss" scoped>
.ss-footer {
  widows: 100%;
  height: 5.75rem;
  color: $ssBlueColor;
  padding: 1rem 10rem;
  font-size: 0.8rem;
  margin: 0 0 3rem 0;
}

.ss-item {
  margin: 0 0 0 2.5rem;
  padding-right: 2.5rem;
  height: 1.38rem;
}

.ss-split-line {
  border-right: #7DC4DF solid 0.1rem;
}
</style>
