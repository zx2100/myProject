<template>
  <div id="app">
    
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  create(){
    if (sessionStorage.getItem("store") ) {
    this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
