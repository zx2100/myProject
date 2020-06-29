<template>
  <div>
    <Menu>
      <MenuItem to="/home">Home</MenuItem>
      <MenuItem to="/less">Less</MenuItem>

    </Menu>
    
  </div>
    
 
</template>


<script>
import { Row, Col, Icon,MenuItem,Layout, Menu }  from 'view-design'
export default {
  components:{
    Col,
    Row,
    Icon,
    MenuItem,
    Layout,
    Menu

  }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>