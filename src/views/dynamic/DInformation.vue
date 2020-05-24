<template>
    <div class="ss-d-information d-flex align-items-center flex-column">
        <div class="d-flex align-items-center align-items-center">
            <div><img src="/img/page/dynamic/information/1.png"/></div>
            <div class="ss-g"></div>
            <div><img src="/img/page/dynamic/information/2.jpg"/></div>
        </div>
        <div>
            <p>   梦之队由会长于2018年和北京童年一课开始谈关于云教室线上支教活动，于2018年11月3日正式组织团队和童年一课云教室负责人进行第一次会议，
                现阶段团队正在准备2019年春季学期志愿者培训，这是梦之队第一次以线上支教的形式进行公益支教，
                同时也是第一次和北京童年一课进行合作，希望取得圆满成功。</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.ss-d-information{
    > div{
        width: 42rem;
        font-size: 0.88rem;
        margin: 2rem 0;
        &:nth-child(1){
            img{
                width: 9.88rem;
                height: 9.88rem;
                margin: 0 4rem;
            }
        }
    }
    p{
        text-indent: 1.76rem;
    }
}
.ss-g{
    width: 9.38rem;
    height: 1rem;
    position: relative;
    border-top: black 0.06rem solid;
    border-bottom: black 0.06rem solid;
    &::before {
        content: "";
        width: 1.31rem;
        height: 0.7rem;
        position: absolute;
        border-left: black 0.09rem solid;
        transform: skew(63deg, 0deg);
        bottom: -0.7rem;
        left: 0.56rem;
    }
    &::after {
        content: "";
        width: 1.31rem;
        height: 0.7rem;
        position: absolute;
        border-right: black 0.09rem solid;
        transform: skew(63deg, 0deg);
        top: -0.7rem;
        right: 0.56rem;
    }
}
</style>