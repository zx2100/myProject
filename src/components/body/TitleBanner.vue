<template>
  <div class="banner" >
    <Row>
      <Col class="banner_title" span="12">
        
        <slot name="title">未命名</slot>
      </Col>
      <Col span="12" class="banner_left" >
        <Switch1 v-show="isShowSwitch"  v-model="switchFlag" @on-change="change" />
        <span>{{switchTitle}}</span>
      </Col>
    </Row>
  </div>
    
      
</template>

<script>
export default {
  props:{
    isShowSwitch: false,
    switchTitle: {
      type: String,
      default: ""
    }
  },
  data(){
    return {
      switchFlag: false
    }
  },
  methods:{
    change(){

    }
  }
  
}
</script>

<style scoped>
.banner{
  background-color: #f5f7f9;
  font-size: 20px;
  padding: 16px 0;
  
}


.banner_left{
  text-align: end;
  
}
.banner_left span{
  margin-left: 10px;
  font-size: 14px;
  cursor: default;
}
.banner_title{
  cursor: default;
}
</style>