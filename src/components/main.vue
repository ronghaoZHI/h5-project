<template>
  <div id="content-wrap">
    <div v-show="showCanvas" id="canvas-wrap" ref="canvas-wrap">
      <button class="canvasBtn" @click="hideCanvas">i am canvas 点我消失</button>
      <canvas id="canvas1">your divice donot suport canvas</canvas>
      <canvas id="canvas2">222</canvas>
    </div>
    <div v-show="showSwiper" id="outer-swiper" ref="outer-swiper">
      <div v-show="showArrow" class="arrow" ref="arrow">^ ^ ^</div>
      <section id="swiper1" ref="swiper1">
        <div><h1>i am swiper</h1></div>
      </section>
      <section id="swiper2" ref="swiper2">
        <div><h1>222</h1></div>
      </section>
      <section id="swiper3" ref="swiper3">
        <div><h1>333</h1></div>
      </section>
    </div>
    <div id="content-end">
      <div>
        <p>end</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'islider.js'

export default {
  name: 'main-content',
  created () {
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      msg: 'Welcome',
      ctx: {},
      ctxDouble: {},
      swiper: {},
      showSwiper: true,
      showCanvas: true,
      showArrow: false
    }
  },
  methods: {
    initCanvas () {
      const ctx = this.$refs['canvas1'].getContext('2d')
      if (!ctx) {
        return null
      } else {
        this.ctx = ctx
        const img = new Image()
        img.src = '@/assets/logo.png'
        this.ctx.drawImage(img)
      }
    },
    hideCanvas () {
      this.showArrow = true
      this.showCanvas = false
    },
    init () {
      let dom = this.$refs['outer-swiper']
      let data = [{
        content: this.$refs['swiper1']
      }, {
        content: this.$refs['swiper2']
      }, {
        content: this.$refs['swiper3']
      }]
      const slider = new Slider(
        dom,
        data,
        {
          isVertical: true,
          isLooping: true,
          isDebug: true,
          isAutoplay: false,
          animateType: 'default',
          fixPage: true,
          isTouchable: true,
          initIndex: 0,
          isOverspread: false,
          fillSeam: false
        }
      )
      slider.on('slideChange', (e) => {
        console.log(e)
        e === (data.length - 1) && (this.showSwiper = false)
      })
      this.swiper = slider
      try {
        // this.$http.get('').then(() => {})
      } catch (error) {
      }
    }
  }
}
</script>

<style lang='less' scoped>
#content-wrap, #outer-swiper, #swiper1, #swiper2,
#swiper3, #content-wrap, #canvas-wrap, #content-end {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
@keyframes arrow
{
    from {
      bottom: 25px;
    }
    to {
      bottom: 80px;
      opacity: 0.5;
    }
}
#canvas-wrap {
  position: absolute;
  background: #fff;
  z-index: 10;
  .canvasBtn {
    position:fixed;
    top:50%;
    left:20%;
    font-size:50px;
    z-index: 20;
  }
  #canvas1, #canvas2 {
    width: 100%;
    height: 50%;
    z-index: 10;
  }
}
#outer-swiper {
  .arrow {
    position: fixed;
    height: 50px;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: arrow;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  #swiper1 {
    background: rgb(113, 224, 200);
  }
  #swiper2 {
    background: rgb(96, 82, 228);
  }
  #swiper3 {
    background: rgb(197, 228, 88);
  }
}
#content-end {
  display: flex;
  & > div {
    margin: auto;
    font-size: 50px;
  }
}
</style>
