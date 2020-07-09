<template>
  <Row class="content">

    <Col span="4" >
        <div class="left" >
          <slot name="left"></slot>
        </div>
    </Col>

    <Col span="20" >
        <div class="right" >
          <slot name="right"></slot>
        </div>
    </Col>


  </Row>
</template>

<script>
export default {

}
</script>

<style>
  .content{
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }
</style>