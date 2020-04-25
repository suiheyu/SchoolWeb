<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
          <div class="ss-fund-donation">
            <p class="ss-blue">乡村公益教育并不仅仅只是要存在，还要被看见，更要被关注。</p>
            很多人好奇我们没收入怎么运作，其实梦之队八成以上的开支都是通过跟财务部申请项目（把义教等等设计成项目），由财务部拨款开展活动的，其余的小部分则是捐款等。</br>
            可是跟财务部申请项目并不稳定，也不可持续，我需要有更多元的造血方式，让我能做更多想做的事，比如红包，或者，月捐。</br>
            支持方式：</br>
            一. 给我发红包</br>
            支付宝转账或发红包到梦之队账号xxxxxxxxx@126.com，请备注出处。</br>
            二. 参加以下活动</br>
            梦之队月捐计划</br>
            每月定额向灯塔捐款，保持对梦之队的关注，同时获取梦之队的近况资讯。</br>
            </br>
            募捐对象：梦之队志愿者，及了解梦之队的朋友。</br>
            </br>
            有这样的规则：</br>
            <ol>
            <li>在网络平台上阅读并同意相关规则；</li>
            <li>加入相应微信群，定期接收相关信息和梦之队动态；</li>
            <li>每月1号定额转账捐款到指定支付宝账户；</li>
            <li>加入自愿，退出自由，退出时需告知相关工作人员。</li>
            </ol>
            参加的方式：
            <ol>
            <li>添加工作人员（财务：13xxxxxxxx9）微信，获取月捐者编号；</li>
            <li>由工作人员拉入对应微信群（套餐群和月捐交流群），并修改群名片；</li>
            <li>每月1号由工作人员在微信群通知小天使转账捐款（入群请捐当月款）；</li>
            </ol>
            月捐套餐：</br>
            每月1号定时向财务捐款固定金额；</br>
            你的每一分支持，都将用在梦之队的工作里。</br>
            我们一起见证滋养生命的教育。</br>
          </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "",
        useContextMargin: true
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-fund-donation{
    font-size: $ssContentFontSize * 1.1;

    ol{
        padding-left: $ssContentFontSize * 1.1;
    }
    > .ss-blue{
        font-size: $ssContentFontSize * 1.2;
    }
}
</style>