<template>
  <div id="content-wrap">
    <div v-show="showCanvas" id="canvas-wrap" ref="canvas-wrap">
      <form v-show="showLogin" class="login" v-on:submit.prevent="submit">
        <div class="from-item"><span class="">账号：</span><input class="name" v-model="loginInfo.username" type="text"></div>
        <div class="from-item"><span>密码：</span><input class="password" v-model="loginInfo.password" type="text"></div>
        <div class="from-item"><button type="submit" class="submit">登录</button></div>
      </form>
      <button class="canvasBtn" @click="hideCanvas">i am canvas 点我消失</button>
      <canvas id="canvas1" ref="canvas1">your divice donot suport canvas</canvas>
      <canvas id="canvas2" ref="canvas2">222</canvas>
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
        <div><button @click="lookPhoto">查看图片集</button></div>
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
    window.setTimeout(this.init(), 100)
    window.setTimeout(this.initCanvas(), 100)
  },
  data () {
    return {
      msg: 'Welcome',
      ctx: {},
      ctxD: {},
      swiper: {},
      showSwiper: true,
      showCanvas: true,
      showArrow: false,
      showLogin: true,
      screen: {
        height: window.screen.availHeight,
        width: window.screen.availWidth
      },
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    initCanvas () {
      let self = this
      const canvas = this.$refs['canvas1']
      const ctx2d = canvas.getContext('2d')
      if (!ctx2d) {
        return 0
      } else {
        this.ctx = ctx2d
        const img = new Image(200, 300)
        canvas.height = this.screen.height
        canvas.width = this.screen.width
        img.src = '../assets/logo.png'
        img.onload = function () {
          self.ctx.drawImage(this, 0, 0)
        }
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
      })
      this.swiper = slider
    },
    submit () {
      let self = this
      const data = {
        username: this.loginInfo.username,
        password: this.loginInfo.password
      }
      try {
        this.$http.post('https://nodejs.bscstorage.com/api/users/login', data).then(
          (res) => {
            this.setUserStorage(data)
            console.log(data, res)
            self.$router.push('/')
          })
      } catch (error) {
        console.log(error)
      }
    },
    lookPhoto () {
      console.log('click')
      this.$router.push('/upload')
    },
    setUserStorage (data) {
      window.localStorage.setItem('bsc-username', data.username)
      window.localStorage.setItem('bsc-password', data.password)
    },
    removeUserStorage () {
      window.localStorage.removeItem('bsc-username')
      window.localStorage.removeItem('bsc-password')
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
  z-index: 1;
  .login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 2;
    .from-item {
      display: block;
    }
    span {
      display: inline-block;
      width: 100px;
      height: 70px;
    }
    input {
      border: #ccc 1px solid;
      display: inline-block;
      width: 300px;
      height: 70px;
    }
    button {
      display: block;
      width: 200px;
      height: 70px;
      margin: 0 auto;
    }
  }
  .canvasBtn {
    position:fixed;
    top:10%;
    left:20%;
    font-size:50px;
    z-index: 2;
  }
  #canvas1, #canvas2 {
    position: relative;
    z-index: 1;
  }
}
#outer-swiper {
  .arrow {
    position: fixed;
    height: 50px;
    z-index: 1;
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
