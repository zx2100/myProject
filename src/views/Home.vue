<template>
  <div >
   
    
    <Button type="info">取人</Button>
    <Slider v-model="value2" show-input @on-change="test" ></Slider>
  </div>
</template>

<script>
// @ is an alias to /src
// 导入viewUI组件
import { Button, Slider  } from 'view-design'


export default {
  name: 'Home',
  components:{
    Button,
    Slider
  },
  data(){
    return {
      value2: [20, 50],
    }
  },
  methods:{
    test(va){
      console.log(va)
    }
  }
  
}
</script>
