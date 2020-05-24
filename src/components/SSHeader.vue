<template>
  <div class="ss-head d-flex justify-content-between align-items-center flex-nowrap">
    <img src="/img/header.jpg" />
     <router-link to="/home" class="return-link btn border">返回主页</router-link>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
.ss-head {
  padding: 0 8rem;
  height: 7.25rem;
  width: 100%;
  > img{
    height: 7.25rem;
    transform: scale(0.9);
  }
}

.return-link {
  border: 0.5rem solid $ssGrayColor;
  color: #787d82;
}

.return-link:hover{
  background-color: #e8e5e5;
}

</style>