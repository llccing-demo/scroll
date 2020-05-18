<template>
  <div class="tiger">
    <cube-slide @change="onChange" :auto-play="false" direction="vertical" :loop="false">
      <cube-slide-item class="slide0">
        <img
          ref="slide0_title"
          style="margin-top: 50px"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/bonus_01.png"
          alt="title"
        />
        <img
          ref="slide0_sub_title"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/bonus_02.jpg"
          alt="title"
        />
        <img
          ref="slide0_content"
          style="margin-top: 50px"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/001.png"
          alt="content"
        />
        <img
          ref="slide0_tiger"
          class="tiger"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/002.png"
          alt="tiger"
        />
        <img
          ref="slide0_text"
          style="margin-top: 50px"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/003.png"
          alt="text"
        />
      </cube-slide-item>
      <cube-slide-item class="slide2"></cube-slide-item>
      <cube-slide-item class="slide3"></cube-slide-item>
      <cube-slide-item class="slide4"></cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
import 'animate.css'
export default {
  methods: {
    slide0Animation(isShow = true) {
      const {
        slide0_title,
        slide0_sub_title,
        slide0_content,
        slide0_tiger,
        slide0_text
      } = this.$refs
      if (isShow) {
        slide0_title.classList.add('zoomIn')
        slide0_sub_title.classList.add('fadeIn')
        slide0_content.classList.add('rotateInDownLeft')
        slide0_tiger.classList.add('bounceInDown')
        slide0_text.classList.add('fadeInUp')
      } else {
        slide0_title.classList.remove('zoomIn')
        slide0_sub_title.classList.remove('fadeIn')
        slide0_content.classList.remove('rotateInDownLeft')
        slide0_tiger.classList.remove('bounceInDown')
        slide0_text.classList.remove('fadeInUp')
      }
    },
    onChange(index) {
      this[`slide${index}Animation`] && this[`slide${index}Animation`]()
      setTimeout(() => {
        this[`slide${index}Animation`] && this[`slide${index}Animation`](false)
      }, 5000);
    }
  },
  mounted() {
    this.onChange(0)
  }
}
</script>
<style lang="stylus">
.tiger
  .zoomIn
    animation zoomIn 1.5s 0s
  .fadeIn
    animation fadeIn 0.5s 1.5s
  .rotateInDownLeft
    animation rotateInDownLeft 0.5s 2s
  .bounceInDown
    animation bounceInDown 1.5s 2.5s
  .fadeInUp
    animation fadeInUp 0.5s 4s
  img
    display block
    width 100%
  .cube-slide-item
    background-size 100% 100%
    background url('http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/bg.jpg') no-repeat left top
  .slide0
    position relative
    .tiger
      position absolute
      top 193px
  .cube-slide
    .cube-slide-dots
      left initial
      bottom initial
      top 50%
      transform translateY(-50%)
      > span
        // background #000
        display block
        border-radius 50%
        // opacity 0.4
        width 6px
        height 6px
        margin 5px 0
        &.active
          // background #fff
</style>