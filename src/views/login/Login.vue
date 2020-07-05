<template>
  <div class="login_container">
  
    <div class="login_div">
         <img src="@/assets/img/rishi.png" class = "logo" alt="logo" srcset="" >

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
            <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
        </FormItem>
       
      </Form>
    </div>
    
  </div>



</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"
export default {
  components: { 
    NavigateBar
  },
  data () {
    return {
      formInline: {
        user: '',
        password: ''
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
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        
        if (valid) {
            this.$Message.success('Success!');
        } else {
            this.$Message.error('Fail!');
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
    background-color: #2b85e4 ;
    /* text-align: center; */
  }
  .navigate{
    
    background-color: #2b85e4 !important;
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