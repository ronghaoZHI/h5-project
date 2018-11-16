<template>
  <div id="app">
    <div id="demo">111<br><img alt="Vue logo" src="./assets/logo.png"></div>
    <div id="body">
      <Main />
    </div>
  </div>
</template>

<script>
import Main from '@/components/index.vue'
export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
html, body, #app, #demo, #body{
  width: 100%;
  height: 100%;
  background: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#demo {
  border: 2px black solid;
}
</style>
