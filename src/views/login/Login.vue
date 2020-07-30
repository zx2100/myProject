<template>
  <div class="login_container"> 
    <div class="login_div">
         <img src="@/assets/images/rishi.png" class = "logo" alt="logo" srcset="" >

      <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <Row> 
          <Col span="22" offset="1">
            <FormItem prop="user">
            <Input type="text" v-model="formInline.user"  placeholder="用户名">
                <Icon type="md-contact" size="18" slot="prepend"></Icon>
            </Input>
            </FormItem>
          </Col>
        </Row>

        <Row> 
          <Col span="22" offset="1">
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码">
                  <Icon type="md-lock" size="18" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </Col>
        </Row>
        
        <FormItem>
            <Button :disabled="formInline.isButtonAllow" type="primary" @click="handleLogin('formInline')">登陆</Button>
        </FormItem>
       
      </Form>
    </div>
    
  </div>



</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"
import { Login } from "@/plugins/request.js"
import axios from 'axios'

export default {
  components: { 
    NavigateBar
  },
  data () {
    return {
      formInline: {
        user: 'admin',
        password: '523569',
        isButtonAllow: false
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin(name) {
      let data = new FormData()
      this.$refs[name].validate((valid) => {
        if (valid) {
          Login(this.formInline.user, this.formInline.password).then( result =>{
            this.formInline.isButtonAllow = false
            // 取消显示正在登录
            setTimeout(msg,0);
            // 显示登录结果
            result.meta.status == "200"? this.$Message.success(result.meta.msg+",正在跳转"): this.$Message.error("登录失败")
            // 登录成功会返回Token,需要保存下来
            window.sessionStorage.setItem("token", result.data.token)
            // 保存到vuex中
            this.$store.commit('setUserProfile', result)
            this.$router.push("/console")
          }).catch(result =>{
            console.log(result)
            setTimeout(msg,0);
            this.formInline.isButtonAllow = false
            this.$Message.error('认证失败');
          })
          
          // 禁止点击登录按钮
          this.formInline.isButtonAllow = true
          // 显示正在登录
          const msg = this.$Message.loading({
                    content: '正在登录...',
                    duration: 0
                });
          
        } else {
          // 
          this.formInline.isButtonAllow = false
          this.$Message.error('验证不通过');
        }
    })
}
  }
}
</script>

<style scope>
  .logo{
    /* width: 50px; */
    height: 70px;
    transform: translateY(-50%);
    /* margin-top: 5px; */
    
  }

  .login_container{
    width: 100%;
    height: 100%;
    background-color: #17233d ;
    /* text-align: center; */
  }
 
  .center{
    text-align: center;  
  }

  .login_div{

    position:fixed;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:400px;
    height:250px;
    border-radius: 5px;
    text-align: center;

    background-color: #f8f8f9;
  }
</style>