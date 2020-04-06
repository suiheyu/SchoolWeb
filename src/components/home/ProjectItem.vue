<template>
    <div class="ss-project-item card">
        <div class="card-body">
            <span>{{name}}</span>
        </div>
        <router-link to="" >
            <img class="card-img-bottom" :src="imageUrl" >
        </router-link>
    </div>
</template>
<script>
export default {
    props: ["name","imageUrl"]
}
</script>
<style lang="scss" scoped>
.ss-project-item{
    // border: .2rem solid #BBBBBB;
    width: 20rem;
    text-align: center;
    font-size: 0.88rem;
    img{
        height: 13.38rem;
    }
}
</style>