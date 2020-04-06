<template>
<nav aria-label="breadcrumb">
  <ol id="breadcrumb" class="breadcrumb bg-transparent justify-content-end">
    <li class="breadcrumb-item">
      <router-link to="/">首页</router-link>
    </li>
    <li  class="breadcrumb-item">{{sub1}}</li>
    <li class="breadcrumb-item">{{sub2}}</li>
  </ol>
</nav>
</template>
<script>
export default {
  data() {
    console.log("route", this.$route, this.$router);
    return { sub1: this.$route.matched[0].name, sub2: this.$route.matched[1].name };
  }
};
</script>
<style lang="scss" scoped>
$breadcrumb-divider: quote("|");
nav{
  font-size: 0.88rem;
}
#breadcrumb > .breadcrumb-item::before{
  content: "|";
}
#breadcrumb > .breadcrumb-item:nth-child(1)::before{
  content: "";
}
</style>
