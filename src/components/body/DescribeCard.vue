<template>
  <Card class="describe_card" dis-hover :bordered="false"> 
    
    <!-- 标题横幅 --> 
      <div>
         <Span class="describe_title">{{article.title}}</Span>
      </div>    
      <!-- 日期 -->
      <div>
        {{ article.create }}
      </div>
    
    <!-- 正文 -->
      <div class="describe_subject">
        {{ article.content }}
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
  
}
</script>

<style lang="less" scoped>

.describe_card{
  margin-bottom: 1.25rem;
  height: 15.625rem;
  padding-bottom: 0;
  transform:translate(0,0)
  
}


.describe_card:chil

.describe_title{
  font-size: 18px;
}

.describe_subject{
  width: 70%;
  height: 60px;
  text-overflow: ellipsis;
  white-space  : nowrap;
  overflow: hidden;
}


.foot_banner{
  position: fixed;
  bottom: 0;
}
</style>

