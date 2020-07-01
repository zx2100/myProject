<template>
  <!-- 侧边栏 -->
  <Row>
    <!-- 暂时这样用 -->
    <Col span="24" >
      <Sider class="sider" width="240" :class="{'sider-hide':isCollapsed}" @on-collapse="collapse" collapsible v-model="isCollapsed">
         <Menu theme="dark" class="sider-menu" active-name="option1">
            <MenuItem name="option1">
              <icon type="ios-search" />
              <span>option1</span>
            </MenuItem>

            <MenuItem name="option2" >
              <icon type="ios-search" />
              <span>option2</span>
            </MenuItem>
          </Menu>
      </Sider>

    </Col>
  </Row>
  
</template>

<script>
export default {
  data(){
    return {
      isCollapsed: false
    }
  },
  methods:{
    collapse(){
      console.log(this.isCollapsed)
    }
  }
}
</script>

<style scope>
.sider{
  position: fixed;
  height: 100%;
  top: 60px; 
  overflow: hidden;
}

.sider-menu{
  width: 100%;
}

.sider-hide{
  width: 100px important;
  
}
.sider-hide  span{
  display: none;
}


</style>