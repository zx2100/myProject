<template>
  <NavigateBar>
      <img slot="left" class = "logo" src="@/assets/img/rishi.png" alt="logo" srcset="">
    
    
  </NavigateBar>
</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"
export default {
  components: { 
    NavigateBar
  }
}
</script>

<style>
  .logo{
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }
</style>