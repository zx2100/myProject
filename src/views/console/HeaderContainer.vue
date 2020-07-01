<template>
  <Header class="header">
    <Row >
      <!-- 左边 -->
      <Col span="4" offset="1">
        <img class = "logo" src="@/assets/img/rishi.png" alt="logo" srcset="">
      </Col>

      <!-- 中间 -->
      <Col span="14">
       <Menu mode="horizontal"  active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                首页
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                文章
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                应用
            </MenuItem>            
          </div>
        </Menu>      
      </Col>


      <!-- 右边 -->
      <Col span="4" class="info">
        <Row>
          <!-- ===========头像==== -->
          <Col span=8>  
            <Dropdown>
              <Avatar  class= "avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  />
              <DropdownMenu slot="list">
                <DropdownItem>我的主页</DropdownItem>
                <DropdownItem >我的收藏</DropdownItem>
                
                <DropdownItem divided>               
                  设置
                  <Badge status="warning"  /> 
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <!-- =====================通知=========== -->
          <Col span=8>
            <Dropdown>
              <Icon :size="20" type="md-notifications-outline" />
               <DropdownMenu slot="list">
                  <Tabs value="name1">
                    <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                    <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                  </Tabs>
               </DropdownMenu>
            </Dropdown>
          
          </Col>
          <Col span=8>
            <!-- <a href="javascript:;" @click="changeDrawerFlag" >
              <svg class="icon" >             
                <use xlink:href="#icon-qianbi"></use>                        
              </svg>
            </a> -->
            
            <Icon type="md-brush" :size="20"   @click="drawerFlag = true" />
            <!-- <Icon type="md-brush" :size="20"   @click="drawerFlag = true" /> -->
            
            <Drawer :closable="false" v-model="drawerFlag" >
                <!-- 自定义标题 -->
                <div slot="header">
                  
                  <Avatar  class= "avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  />
                </div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                
                <p>Some contents...</p>
            </Drawer>
          </Col>
        </Row>
      
      </Col>
    </Row>
  </Header>
  
</template>

<script>
export default {
  data(){
    return {
      drawerFlag: false
    }
  }
}
</script>

<style scope>
.header{
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.logo{
  height: 50px;
  margin-top: 5px;
}
.ivu-menu-horizontal.ivu-menu-light:after{
  display: none;
}
.info{
  text-align: center;
  /* transform: translateY(-50%) */
  transition: all 300ms
}
.avatar {
  /* 为了看上去整齐点 */
  margin-top: -5px; 
}


</style>