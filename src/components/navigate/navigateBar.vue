<template>
  <!-- NavidateBar 是顶部导航条,通过格栅,分成左中右3部分 -->
  <!-- <div class=header> -->
    <Row class=header>
      <!-- =================================左================================ -->
      <Col span="4" offset="1">
        <div class="left" >
          <slot name="left"></slot>
        </div>
      </Col>

      <!-- ======= =========================中================================ -->
      <Col span="14" >
        <div class="center">
          <slot name="center"></slot>
        </div>
        
      </Col>

      <!-- =================================右================================ -->
      <Col span="4" >
        <div class="right">
             <slot name="right"></slot>
        </div>

      </Col>
    </Row>
  <!-- </div> -->
  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.left{
  width: 100%;
  height: 60px;
  text-align: center;
  /* background-color: #fff; */
}

.center{
  text-align: left;
  height: 60px;
}
.right{
  height: 60px;
  /* background-color: #fff; */
  line-height: 60px;
}
</style>