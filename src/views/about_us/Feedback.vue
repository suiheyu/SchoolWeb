<template>
  <SSMainItem :title="title" :use-context-margin="useContextMargin">
    <div class="ss-support-us">
      <p class="shadow-sm p-3 bg-light rounded">如果您有一般性咨询、建议或投诉，可以在线交流快速解决，请仔细填写下面表格，提交您的问题，我们将在收到信息后的2个工作日内与您电话联系或回复邮件</p>
      <hr/>
      <form>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">咨询主题</label>
            <input type="text" class="form-control" name="title" id="validationDefault01" placeholder="填入主题（必须）" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault02">联系人</label>
            <input type="text" class="form-control" name="name" id="validationDefault02" placeholder="您的名称（必须）" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault03">联系电话</label>
            <input type="text" class="form-control" name="phone" id="validationDefault03" placeholder="您的电话" >
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault05">邮箱</label>
            <input type="text" class="form-control" name="email" id="validationDefault05" placeholder="您的邮箱" >
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-10 mb-3">
            <label for="validationDefault04">详细内容</label>
            <textarea class="form-control" id="validationDefault04" name="detail" rows="5" placeholder="请输入详细内容（必须）" required></textarea>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">提交留言</button>
      </form>
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
.ss-support-us{
    font-size: $ssContentFontSize * 1.1;
    > form{
        padding-left: 10rem;
    }
    > p{
        margin: 0;
    }
}
</style>