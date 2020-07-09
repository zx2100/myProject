<template>
   <NavigateBar>
      <!-- 左 -->
      <img slot="left" class = "logo" src="@/assets/img/rishi.png" alt="logo" srcset="">
     
      <!-- 中间 -->
      <div slot="center">
        <Menu mode="horizontal"  active-name="1">
            <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                文章
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                应用
            </MenuItem>
                 
        </Menu>     
      </div>

      <!-- 右边 -->
      <div slot="right">
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
            <Icon type="md-brush" :size="20"   @click="drawerFlag = true" />
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
      
      </div>
    </NavigateBar>

</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"

export default {
  components:{
    NavigateBar,
  },
  data(){
    return {
      drawerFlag: false
    }
  }
}
</script>

<style scope>
.avatar {
  /* 为了看上去整齐点 */
  margin-top: -5px; 
}

.logo{
  height: 60px;
}

</style>