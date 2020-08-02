<template>
  
  <div class="writer">
    <NavigateBar class="console">
      <div slot="center" class="title">
        <!-- 标题和文章分类 -->
        <Input  style="width: 100%;" clearable maxlength="50" size="large" v-model="title" placeholder="标题" />
        <div class="subject_title" >
          xxx
        </div>
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
      // 弹出上传提示
      const msg = this.$Message.loading({
        content: '保存中...',
        duration: 0
      })
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
          // 保存成功
          setTimeout(msg,0);
          // 打印成功
          this.$Message.success('保存成功')
        }).catch(err =>{
          // 保存失败
          setTimeout(msg,0);
          this.$Message.success('保存失败')
        })

    }
  }
}
</script>

<style lang="less" scoped>

.title{
  height: 100%;
  padding: 0;
  /deep/ .ivu-input-large  {
    border: 0;
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    border-style: none;

    
  };
  /deep/ ivu-input-type-text{
    width: 100% !important;
    
  };
  // 标题栏
  /deep/ .ivu-input{
    padding: 0;
    margin-top: 5px;
    border: 0;
    
    
  }

  /deep/ .ivu-input:focus{
    box-shadow: none;
  }
    
  

  .subject_title{
    height: 25px;
    color: #808695;
  }
}

.editor{
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 10px;
  }


</style>