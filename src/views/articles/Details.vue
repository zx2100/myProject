<template>
    <Contents>
      <div ref="mdiv" slot="content">
         <!-- <Editor> </Editor> -->
         <mavonEditor 
          :subfield="false" defaultOpen="preview" navigation
          v-model="value" ref="md" @save="save" @navigationToggle="test"
                        
         />
        
      </div>
      
      
    
    </Contents>
</template>

<script>
import MarkViewVue from "./MarkView.vue";

import Editor from "@/utils/markdown/Read"
import Contents from "@/components/body/Contents"
import { mavonEditor } from 'mavon-editor'

export default {
  components: {
    Editor,
    Contents,
    mavonEditor,
  },
  data(){
    return {
      value: '### 拓扑说明 \n政务云防火墙把日志发送至19.130.210.50:514',
      content: ""
    }
  },
  methods:{
    save: function(){
      // 把字符串转成dom
      let htm = document.createElement("div");
      htm.innerHTML = this.$refs.md.d_render
      let first = htm.querySelectorAll('h3')
      console.log(first[0].innerText)
    },
    test: function(status,val){
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.v-note-navigation-wrapper{
  position: fixed;
  left: 0;
  font-size: 30px;
  }
  
</style>