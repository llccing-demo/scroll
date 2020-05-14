<template>
  <div class="taobao-world">
    <ul class="top">
      <li>首页</li>
      <li>全球动态</li>
      <li>海外直播</li>
    </ul>
    <div class="container">
      <!-- 轮播 -->
      <cube-slide
        ref="slide"
        :options="slideOptions"
        @scroll="onScroll"
        :showDots="false"
        :loop="false"
        :autoPlay="false"
      >
        <cube-slide-item>
          <img
            src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/p_hk.png"
          />
        </cube-slide-item>
        <cube-slide-item>
          <img
            src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/p_au.png"
          />
        </cube-slide-item>
        <cube-slide-item>
          <img
            src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/p_en.png"
          />
        </cube-slide-item>
        <cube-slide-item>
          <img
            src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/p_jp.png"
          />
        </cube-slide-item>
        <cube-slide-item>
          <img
            src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/p_us.png"
          />
        </cube-slide-item>
      </cube-slide>
      <!-- 旋转的圆圈 -->
      <div ref="circle" class="circle">
        <ul>
          <li class="hk"></li>
          <li class="au"></li>
          <li class="en"></li>
          <li class="jp"></li>
          <li class="us"></li>
        </ul>
      </div>
      <div class="mask">
        <img src="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/txt.png">
      </div>
      <!-- 地球背景 -->
      <div class="container-bg"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideOptions: {
        listenScroll: true,
        probeType: 3
      }
    }
  },
  methods: {
    onScroll(pos) {
      const circle = this.$refs.circle
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const percent = -pos.x / slideWidth
      const deg = (180 / 4) * (percent / 0.2)
      console.log(circle.style)
      circle.style.transform = `rotate(-${deg}deg)`
    }
  }
}
</script>
<style lang="stylus">
.taobao-world
  .top
    display flex
    box-sizing border-box
    justify-content space-around
    position absolute
    top 2%
    z-index 1
    width 100%
    color #fff
  .container
    position relative
    height 123vw
    background linear-gradient(to right, rgb(147, 59, 255), rgb(253, 110, 244))
    overflow hidden
    // 这是一种效果
    // .cube-slide
    //   width 335px
    //   margin 0 auto
    //   overflow visible
    //   transform translateX(-5px)
    //   .cube-slide-item
    //     padding-left 10px
    // 这是淘宝世界的效果
    .cube-slide
      position absolute
      top 39%
      left 0
      right 0
      width 335px
      margin 0 auto
      height auto
      overflow visible
      transform translateX(-20px)
      z-index 3
      .cube-slide-item
        padding-left 10px
      img
        width 100%
        border-radius 2.5vw
    .circle
      position relative
      height 100%
      margin-top 15%
      z-index 2
      ul
        width 100%
        height 100%
        overflow hidden
        position relative
        li
          position absolute
          left 37%
          width 26%
          height 100%
          background-size 100% auto
          background-repeat no-repeat
      .hk
        background-image url('http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/hk.png')
        transform rotate(0deg)
      .au
        background-image url('http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/au.png')
        transform rotate(45deg)
      .en
        background-image url('http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/en.png')
        transform rotate(90deg)
      .jp
        background-image url('http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/jp.png')
        transform rotate(135deg)
      .us
        background-image url('http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/us.png')
        transform rotate(180deg)
    .mask
      position absolute
      bottom -11%
      z-index 2
      width 100%
      height 100vw
      background url(http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/mask.png) no-repeat left bottom /100% auto
      img
        margin-top 81%
    &-bg
      position absolute
      top 0
      z-index 1
      width 100%
      height 100%
      // background-image url(http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/bg.png)
      // background-size 100% 100%
      // background-repeat no-repeat
      background url(http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/images/bg.png) no-repeat left bottom/100% auto
</style>