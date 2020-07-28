<template>
  
  <div class="writer">
    <NavigateBar class="console">
      <div slot="center">
        xxxx
      </div>
    </NavigateBar>

    <Editor class="editor" @save="post" />

  </div>
</template>

<script>
import NavigateBar from "@/components/navigate/navigateBar"
// 导入编辑器
import Editor from "@/utils/markdown/Editor"
export default {
  components: {
    NavigateBar,
    Editor
  },
  methods: {
    post: function(value, render){
      console.log(value, render)
    }
  }
}
</script>

<style lang="less" scoped>


NavigateBar{
  z-index: 22;
}
.editor{
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 10px;
  }

</style>