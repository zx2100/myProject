<template>
  <Contents>
    <div slot="content">
      <TitleBanner :isShowSwitch="true" switchTitle="测试" >
          <div slot="left"> 
            <span>你好，世界</span>
          </div>
          <!-- <div slot="right">
            <Switch1 ></Switch1>
            <span>测试</span>
          </div> -->
        </TitleBanner>
        <Card class="hello_card" dis-hover :bordered="false">
          <div class="hello_box">
            <img src="@/assets/images/helloWorld.png" alt="" srcset="">
          </div>
        </Card>


      <!-- 左边 -->
      <Row :gutter="16">
        <Col span="16">
          <!-- 标题横幅 -->
          <TitleBanner >
            <div slot="left">
              文章列表
            </div>

              <div slot="right" class="hello_banner_right" >
                <Switch1 >               
                </Switch1>
                <span style="margin-left: 10px">热门</span>
              </div>
             
            
          </TitleBanner>

          <DescribeCard v-for="(item,index) in article" :key="index" :article="item" />

          <!-- 文章卡片 -->
        </Col >


        <!-- 右边 -->
        <Col span="8">
           <TitleBanner >
            <div slot="left">
              标签
            </div>

              
            
          </TitleBanner>

        </Col >

      </Row>

    
      
    </div>
    
  </Contents>
  
  
  
  
</template>

<script>
import SiderContainer from "../SiderContainer"
// 
import TitleBanner from "@/components/body/TitleBanner"
import Contents from "@/components/body/Contents"
// 导入描述卡片
import DescribeCard from '@/components/body/DescribeCard'


// ************函数导入
import{ getArticle } from "@/plugins/login_request"
export default {
  components:{
    SiderContainer,
    TitleBanner,
    Contents,
    DescribeCard
  },
  data(){
    return {
      article: []
    }
  },
  mounted () {
    
    getArticle().then(val => {
      console.log(val)
      if (val) {
        this.article = val
      }
    })
    console.log(this.article)
  }
  
}
</script>

<style scope>

.hello_box{
  height: 191px;
  width: 336px;
  margin: 0 auto;
  

}

.hello_box img{
  height: 100%;
  width: 100%;
}

.hello_card{
  height: 400px;
  background-color: #17233d;
}

.hello_banner_right{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  color: #515a6e;
  font-weight: normal;
}

</style>