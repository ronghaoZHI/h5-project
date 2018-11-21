<template>
  <div id="app">
    <div id="orientation-tips">
      <div id="tips-text"><p>竖屏效果更佳</p></div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <div id="body-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import './styles/common.css';
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media screen and (orientation:portrait) {
    /* 竖屏 */
    #orientation-tips {
      display: none;
    }
    #body-container {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
    }
}
@media screen and (orientation:landscape) {
    /* 横屏 */
     #orientation-tips {
      display: flex;
      width: 100%;
      height: 100%;
      background: #ccc;
      #tips-text {
        margin: auto;
        z-index: 1;
        font-size: 30px;
      }
    }
    #body-container {
      display: none;
    }
}
</style>
