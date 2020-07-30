<template>
  
  <div class="writer">
    <NavigateBar class="console">
      <div slot="center" class="title">
        <!-- 标题和文章分类 -->
        <Input  style="width: 100%;" clearable maxlength="50" size="large" v-model="title" placeholder="文章标题" />
        <div class="subject_title" style="height: 10px">xxx</div>
      </div>
    </NavigateBar>

    <Editor class="editor" @save="save"  />

  </div>
</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"
// 导入编辑器
import Editor from "@/utils/markdown/Editor"
// 提交文档
import { postArticles } from "@/plugins/request.js"

export default {
  components: {
    NavigateBar,
    Editor
  },
  data(){
    return {
      title: ""
    }
  },
  methods:{
    save: function(value, render){
      postArticles(
        {
          "action": "post",
          "data": {
            "category": "基本分类",
            "title": "测试的",
            "brief": "文章简介文章简介",
            "content": value
          }
        }).then(value =>{
          console.log(value)
        }).catch(err =>{
          console.log(err)
        })

    }
  }
}
</script>

<style lang="less" scoped>

.title{
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-items: center;
  /deep/ .ivu-input-large  {
    border: 0;
    font-size: 18px
    
  };
  /deep/ ivu-input-type-text{
    width: 100% !important;
    border-bottom: 1px solid #666;
  };
}

.editor{
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 10px;
  }

.ivu-input{
  background-color: #000;
}

</style>