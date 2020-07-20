<template>
  <Card class="describe_card" dis-hover :bordered="false"> 
    <!-- 标题横幅 --> 
      <div>
         <Span class="describe_title">{{article.title}}</Span>
      </div>    
      <!-- 日期 -->
      <div class="describe_date">
        {{ date }}
      </div>
    
    <!-- 正文 -->
      <div class="describe_subject">
        {{ subject }}
      </div>
    
    <!--  底部横幅-->
    <TitleBanner class="foot_banner">
      <div slot="left">
        <Button type="primary" shape="circle" size="large" >阅读此文</Button>
      </div>

    </TitleBanner>

  </Card>
</template>

<script>
import TitleBanner from "./TitleBanner"

export default {
  components: {
    TitleBanner
  },
  props: {
    article: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    date(){
      // 只返回月日年，例如五月 24, 2020
      // 取出日期
      let arr = this.article.create.split(" ")[0]
      let [y,m,d] = arr.split("-")
      // 转换月份
      switch(m){
        case "01":
          m = "一月";
          break;
        case "02":
          m = "二月";
          break;
        case "03":
          m = "三月";
          break;
        case "04":
          m = "四月";
          break;
        case "05":
          m = "五月";
          break;
        case "06":
          m = "六月";
          break;
        case "07":
          m = "七月";
          break;
        case "08":
          m = "八月";
          break;
        case "09":
          m = "九月";
          break;
        case "10":
          m = "十月";
          break;
        case "11":
          m = "十一月";
          break;
        case "12":
          m = "十二月"
      }
      return m+" "+d+", "+y
    },
    subject(){
      let length = this.article.content.length
      // 取出不超过52个字符
      let cut_length = parseInt(length % 52) 
      // 如果结果小于20，则+30
      if (cut_length <15){
        cut_length+=30;
      } 
      console.log(cut_length,length)
      return this.article.content
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/base.less';
.describe_card {
  margin-bottom: 1.25rem;

  height:  12.5rem;
  padding-bottom: 0;
  transform:translate(0,0);
  
  .describe_title {
      font-size: 18px;
  }
  
  .describe_subject{
    line-height: 30px;
    display:-webkit-box;
    width: 80%;
    padding: .625rem 0;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .describe_date{
    font-size: 13px;
    color: @font-color;
    // margin-top: .625rem;
  }
  
}



.foot_banner{
  position: fixed;
  bottom: 0;
}
</style>

