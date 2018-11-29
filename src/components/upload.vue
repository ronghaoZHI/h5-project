<template>
  <div id="upload-wrap">
    <div class="wrap">
      <p>上传图片</p>
      <div class="input-wrap">
        <img class="imgTag" src="imgTag">
        <input type="file" :onchange="upload">
        <span class="tips">*目前仅支持单张上传</span>
      </div>
      <canvas id="img-canvas"></canvas>
      <div class="img-list" :key="item" v-for="item in imgs">
        <img :src="item.src" alt="无法显示">
      </div>
    </div>
  </div>
</template>
<script>
import { config } from '@/helper/util.js'

export default {
  name: 'upload',
  created () {
    // this.getImgs()
  },
  data () {
    return {
      imgs: []
    }
  },
  methods: {
    getImgs () {
    },
    upload (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="less" scoped>
#upload-wrap {
  position: relative;
  width: 100%;
  .wrap {
    width: 100%;
    p {
      margin: 0 auto;
    }
   .input-wrap {
      display: flex;
      position: relative;
      width: 300px;
      height: 300px;
      border: #ccc 1px solid;
      .imgTag {
        position: absolute;
        margin: auto;
        z-index: 0;
      }
      input {
        position: absolute;
        width: 300px;
        height: 300px;
        opacity: 0;
        z-index: 1;
      }
      .tips {
        position: fixed;
        top: 350px;
        left: 0;
        display: inline-block;
      }
    }
    #img-canvas {
      display: none;
    }
    .img-list {
      display: flex;
      img {
        margin: auto;
        flex: 1;
        display: inline-block;
        width: 33vw;
        height: 33vw;
      }
    }
  }
}
</style>
