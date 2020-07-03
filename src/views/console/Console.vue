<template>
   
  <div>
    <!-- 导航条 -->
    <HeaderContainer />
  </div>
 
   
   
 
</template>


<script>
import HeaderContainer from "./HeaderContainer.vue"
import SiderContainer from "./SiderContainer"

export default {
  components:{
    HeaderContainer,
    SiderContainer
  },
  data(){
    return {
      drawerFlag: false
    }
  }
}
</script>

<style scoped>
.avatar {
  /* 为了看上去整齐点 */
  margin-top: -5px; 
}
</style>