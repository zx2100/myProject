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
        <Button shape="circle" size="large" >
          
          阅读此文</Button>
       
      </div>
      <div slot="right" class="foot_banner_right">
        <!-- <div> -->
       <ButtonGroup >
        <Button type="text" shape="circle" >
            <Icon size="24" type="md-eye" > </Icon>
            <span>
              123
            </span>
        </Button>

         <Button type="text" shape="circle" >
          <Icon size="24" type="md-heart" />
        </Button>
         <Button type="text" shape="circle" >
          <Icon size="24" type="md-chatbubbles" />
        </Button>
      </ButtonGroup>
        <!-- </div> -->
        
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
      return this.article.brief
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/base.less';
.describe_card {
  margin-bottom: 1.25rem;
  padding-bottom: 0;
  transform:translate(0,0);
  .describe_title {
      font-size: 18px;
  }
  
  // 只显示2行
  .describe_subject{
    width: 100%;
    padding: 1rem 0;
    padding-bottom: 56px;
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
  left: 16px;
  right: 16px;
  width: 100% -16px;

  .foot_banner_right{
    // background-color: #000;
    display: flex;
    width: 100%;
    // flex-direction: r;
    // flex:1;
    justify-content: flex-end;
    flex-grow: 1;
    align-items: center;
    
  }
}
</style>

