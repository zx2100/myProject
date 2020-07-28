<template>
    <Contents class="details" >
      <div ref="mdiv" slot="content">
         <!-- <Editor> </Editor> -->
        <mavonEditor class="mavon_editor"
        navigation  :subfield="false" defaultOpen="preview" :toolbarsFlag="false"
          v-model="value" ref="md"                
         > </mavonEditor>
        
        
   
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
    mavonEditor
  },
  data(){
    return {
      value: '撒旦 \n # 11ElK集群程\n ## 二级 \n ### 三级 \n #### 四级 \n # 一级2 \n ## 二级2 \n ###### 六级 \n阿松大',
      content: "",
    }
  }
};
</script>

<style lang="less" scoped>
.details{
  position: fixed;
  top: 70px;
  bottom:0;
  
  .mavon_editor{
    width: 100%;
    height: 100%;
  }
}
</style>