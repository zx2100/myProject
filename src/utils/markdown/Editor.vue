<template>
     <mavon-editor fontSize="16px" codeStyle="vs2015" v-model="value" @save="post" />
</template>

<script>

export default {
  data(){
    return {
      value: ''
    }
  },
  methods: {
    post: function(value, render){
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>




</style>