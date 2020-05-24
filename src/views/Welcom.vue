<template>
    <div class="ss-welcom">
        <img src="/img/paper_fly_bg.png" />
        <img id="fly-paper" :class="{'do-fly': !isShowSpan}" src="/img/paper_fly.png" />
        <span @click="doLink" v-if="isShowSpan" >进入首页</span>        
    </div>
</template>
<script>

export default {
    data() {
        return {
            moduleId: 3,
            needShowSpan: true
        }
    },
    computed:{
        isShowSpan: function(){
            return this.needShowSpan;
        }
    },
    methods:{
        doLink:function(){
            this.needShowSpan = false;
            let that = this;
            setTimeout(function(){
                that.$router.push("/home");
            }, 3.2 * 1000);
        }
    }
}
</script>
<style lang="scss" scoped>
.ss-welcom{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    min-width: 40rem;
    min-height: 30rem;
    z-index: 100;
    background-color: #e6f5fa;
    margin: 0 auto;
    > img{
        z-index: 101;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        &:nth-child(1){
            min-height: 30rem;
            height: 100vh;
        }
        &:nth-child(2){
            min-height: 10rem;
            height: 60vh;
        }
    }
    > span{
        z-index: 103;
        position: relative;
        margin-left: 56vw;
        margin-top: 64vh;
        display: block;
        cursor: pointer;
        &::before{
            position: absolute;
            content: "";
            width: 0.8rem;
            height: 0.8rem;
            display: block;
            background-color: white;
            border-radius: 0.4rem;
            left: -1.5rem;
            top: 0.5rem;
        }
    }
}

.do-fly{
    animation: fly 4s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes fly{
    45% {
        transform: translate(25vw, 11vh) scale(0.7) rotate3d(-333, -62, -71.3, 53deg);
    }

    47%{
        transform: translate(25vw, 11vh) scale(0.7) rotate3d(-333, -62, -71.3, 53deg);
    }

    100% {
        transform: translate(-60vw, -40vh) scale(0.01) rotate3d(-333, -62, -71.3, 53deg);
    }
}
</style>