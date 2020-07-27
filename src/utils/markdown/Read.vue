<template>
     <mavon-editor :navigation="true" 
     :editable="false" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"
     fontSize="16px" codeStyle="vs2015" v-model="value"/>
</template>

<script>

export default {
  data(){
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>




</style>