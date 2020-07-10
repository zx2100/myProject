<template>
  <Contents>
    <div slot="content">
      <TitleBanner :isShowSwitch="true" switchTitle="测试" >
          <div slot="title"> 
            <span> 你好，世界</span>
          </div>  
        </TitleBanner>
        <Card class="hello_card" dis-hover :bordered="false">
          <div class="hello_box">
            <img src="@/assets/images/helloWorld.png" alt="" srcset="">
          </div>
        </Card>

    </div>
  </Contents>
  
  
  
  
</template>

<script>
import SiderContainer from "../SiderContainer"
// 
import TitleBanner from "@/components/body/TitleBanner"
import Contents from "@/components/body/Contents"
export default {
  components:{
    SiderContainer,
    TitleBanner,
    Contents
  },
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


</style>