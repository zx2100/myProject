<template>
  <div class="banner">
    <div class="banner_left">
      <slot name="left"></slot>
    </div>
    <div class="banner_right">
       <slot name="right"></slot>
    </div>
    
  </div>
    
      
</template>

<script>
export default {
  
}
</script>

<style scoped>
.banner {
  margin: 18px auto;
  height: 35px;
  /* font-weight: bolder ; */
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  /* border-radius: 15px; */
}

.banner_left{
  display: flex;
  align-items: center;
  width: 50%;
}

.banner_right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
}


</style>