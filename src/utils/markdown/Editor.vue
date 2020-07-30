<template>
     <mavon-editor fontSize="16px" codeStyle="vs2015" v-model="value" @save="save" />
</template>

<script>

export default {
  data(){
    return {
      value: ''
    }
  },
  methods: {
    save: function(value, render){
      this.$emit('save', value, render)
    }
  }
}
</script>

<style lang="less" scoped>




</style>