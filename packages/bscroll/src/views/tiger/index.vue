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
      <cube-slide-item class="slide1">
        <img
          ref="slide1_title"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/004.png"
          alt="title"
          style="margin-top: 50px"
        />
        <img
          ref="slide1_sub_title"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/005.png"
          alt="sub-title"
          style="margin-top: 50px"
        />
        <img
          ref="slide1_content"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/006.png"
          alt="content"
          style="margin-top: 50px"
        />
      </cube-slide-item>
      <cube-slide-item class="slide2">
        <img
          ref="slide2_title"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/007.png"
          alt="title"
          style="margin-top: 50px"
        />
        <img
          ref="slide2_content1"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/009.png"
          alt="content1"
          style="margin-top: 50px"
        />
        <img
          ref="slide2_content"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/008.png"
          alt="content"
          style="margin-top: 50px"
        />
        <img
          class="content2"
          ref="slide2_content2"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/010.png"
          alt="content2"
        />
      </cube-slide-item>
      <cube-slide-item class="slide3">
        <img
          ref="slide3_title"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/001.jpg"
          alt="title"
          style="margin-top: 50px"
        />
        <img
          ref="slide3_content"
          src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/002.jpg"
          alt="content"
          style="margin-top: 50px"
        />
      </cube-slide-item>
    </cube-slide>
    <img class="arrow" src="http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/images/arrow.png" alt="arrow">
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

    slide1Animation(isShow = true) {
      const {
        slide1_title,
        slide1_sub_title,
        slide1_content
      } = this.$refs
      if (isShow) {
        slide1_title.classList.add('bounce')
        slide1_sub_title.classList.add('fadeIn')
        slide1_content.classList.add('zoomInDown')
      } else {
        slide1_title.classList.remove('bounce')
        slide1_sub_title.classList.remove('fadeIn')
        slide1_content.classList.remove('zoomInDown')
      }
    },

    slide2Animation(isShow = true) {
      const {
        slide2_title,
        slide2_content1,
        slide2_content,
        slide2_content2
      } = this.$refs
      if (isShow) {
        slide2_title.classList.add('bounce')
        slide2_content1.classList.add('zoomIn')
        slide2_content.classList.add('bounceInLeft')
        slide2_content2.classList.add('bounceInRight')
      } else {
        slide2_title.classList.remove('bounce')
        slide2_content1.classList.remove('zoomIn')
        slide2_content.classList.remove('bounceInLeft')
        slide2_content2.classList.remove('bounceInRight')
      }
    },

    slide3Animation(isShow = true) {
      const {
        slide3_title,
        slide3_content
      } = this.$refs
      if (isShow) {
        slide3_title.classList.add('fadeInDown')
        slide3_content.classList.add('zoomInLeft')
      } else {
        slide3_title.classList.remove('fadeInDown')
        slide3_content.classList.remove('zoomInLeft')
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
    // this._toast = this.$createToast(Object.assign({
    //   type: 'warn',
    //   txt: '已存在运输证，请勿重复提交已存在运输证，请勿重复提交已存在运输证，请勿重复提交已存在运输证，请勿重复提交已存在运输证，请勿重复提交',
    //   time: 2000
    // }, {}))
    // this._toast.show()
    this.onChange(0)
  }
}
</script>
<style lang="stylus">
.tiger
  img
    display block
    width 100%
  .cube-slide-item
    background-size 100% 100%
    background url('http://static.llccing.cn/llccing-demo/scroll/swiper/tiger/upload/bg.jpg') no-repeat left top
  .slide0
    position relative
    .zoomIn
      animation zoomIn 1.5s 0s both
    .fadeIn
      animation fadeIn 0.5s 1.5s both
    .rotateInDownLeft
      animation rotateInDownLeft 0.5s 2s both
    .bounceInDown
      animation bounceInDown 1.5s 2.5s both
    .fadeInUp
      animation fadeInUp 0.5s 4s both
    .tiger
      position absolute
      top 193px
  .slide1
    .bounce
      animation bounce 0.5s 0s both
    .fadeIn
      animation fadeIn 0.5s 0.5s both
    .zoomInDown
      animation zoomInDown 0.5s 1s both
  .slide2
    position relative
    .content2
      position absolute
      top 340px
    .bounce
      animation bounce 0.5s 0s both
    .zoomIn
      animation zoomIn 0.5s 0.5s both
    .bounceInLeft
      animation bounceInLeft 0.5s 1s both
    .bounceInRight
      animation bounceInRight 0.5s 1.5s both
  .slide3
    .fadeInDown
      animation fadeInDown 0.5s 0s both
    .zoomInLeft
      animation zoomInLeft 0.5s 0.5s both
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
  .arrow
    position fixed
    bottom 20px
    left 0
    right 0
    margin 0 auto
    width 20px
    height 20px
    animation start 1.5s infinite
  @keyframes start 
    0%, 30%
      opacity 0
      transform translate(0, 10px)
    60%
      opacity 1
      transform translate(0, 0)
    100%
      opacity 0
      transform translate(0, -8px)
</style>