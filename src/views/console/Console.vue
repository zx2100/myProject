<template>
   
  <div class="console">
    <!-- 导航条 -->
    <HeaderContainer />
    
    <!-- 侧边栏 -->
    <Body>
       <SiderContainer slot="left"/>
       <Contents slot="right" />
    </Body>
   
  </div>
 
   
   
 
</template>


<script>

import HeaderContainer from "./HeaderContainer.vue"
import SiderContainer from "./SiderContainer"
import Contents from "./Contents"
// 获取用户profile
import { getProfile } from "@/plugins/login_request"

import Body from "@/components/body/Body"

export default {
  components:{
    HeaderContainer,
    SiderContainer,
    Body,
    Contents
  },
  data(){
    return {
      drawerFlag: false
    }
  },
  mounted(){
    let uid = this.$store.getters.getUserProfile.userid
    getProfile(2).then(value =>{
      console.log(value)
    })
  }
}
</script>

<style scoped>
.avatar {
  /* 为了看上去整齐点 */
  margin-top: -5px; 
}
.console{
  width: 100%;
  height: 100%;
}
</style>