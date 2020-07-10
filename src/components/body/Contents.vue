<template>
  <Row class="body_contents">
    <!-- 首页欢迎卡片 -->
    <Col span="16" offset="4">
      <slot name="content"></slot>
    </Col>

  </Row>
</template>

<script>
export default {

}
</script>

<style>
.body_contents{
  
  width: 100%;
  height: 100%;
  
}
</style>