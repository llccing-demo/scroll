<template>
  <div class="refresh">
    <div ref="top" class="top" v-show="isShowTop">
      <img
        src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/top.png"
        class="addr"
      />
      <img
        src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/search.png"
        class="search"
      />
      <div class="nav">
        <cube-scroll direction="horizontal">
          <cube-tab-bar :showSlider="true" v-model="current" :data="labels" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
    </div>

    <div class="container" ref="container">
      <cube-scroll :scroll-events="['scroll']" @scroll="onContainerScroll">
        <cube-slide
          @change="onContainerSlideChange"
          ref="containerSlide"
          :loop="false"
          :autoPlay="false"
          :showDots="false"
        >
          <cube-slide-item>
            <cube-slide :options="slideImagesOptions" class="image-slide" :data="slideImages"></cube-slide>
            <div class="img">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/index1.png"
              />
              <img src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/hot.png" />
            </div>
            <ul class="img">
              <li v-for="(item, idx) in productImages" :key="idx">
                <img :src="item" />
              </li>
            </ul>
            <div class="img">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/bottom.png"
              />
            </div>
          </cube-slide-item>
          <cube-slide-item>
            <cube-slide :options="slideImagesOptions" class="image-slide" :data="slideImages"></cube-slide>
            <ul class="img">
              <li v-for="(item, idx) in productImages" :key="idx">
                <img :src="item" />
              </li>
            </ul>
            <div class="img">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/images/bottom.png"
              />
            </div>
          </cube-slide-item>
          <cube-slide-item>slide 3</cube-slide-item>
          <cube-slide-item>slide 4</cube-slide-item>
          <cube-slide-item>slide 5</cube-slide-item>
          <cube-slide-item>slide 6</cube-slide-item>
          <cube-slide-item>slide 7</cube-slide-item>
          <cube-slide-item>slide 8</cube-slide-item>
          <cube-slide-item>slide 9</cube-slide-item>
          <cube-slide-item>slide 10</cube-slide-item>
          <cube-slide-item>slide 11</cube-slide-item>
          <cube-slide-item>slide 12</cube-slide-item>
          <cube-slide-item>slide 13</cube-slide-item>
          <cube-slide-item>slide 14</cube-slide-item>
        </cube-slide>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const labels = [
      '热卖',
      '水果',
      '乳品',
      '零食',
      '肉蛋',
      '蔬菜',
      '酒饮',
      '熟食',
      '水产',
      '粮油',
      '轻食',
      '火锅',
      '日百'
    ].map((label, value) => ({ label, value: value }))

    const productImages = [
      'product1.png',
      'product2.png',
      'product3.png',
      'product4.png',
      'product5.png',
      'product3.png',
      'product4.png',
      'product5.png',
      'product3.png',
      'product4.png',
      'product5.png',
      'product3.png',
      'product4.png',
      'product5.png',
      'product3.png',
      'product4.png',
      'product5.png',
    ].map(name => `http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/uploads/${name}`)

    return {
      current: 0,
      labels,
      slideImages: [
        {
          image: 'http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/uploads/banner1.jpg'
        },
        {
          image: 'http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/uploads/banner2.jpg'
        },
        {
          image: 'http://static.llccing.cn/llccing-demo/scroll/swiper/refresh/uploads/banner3.jpg'
        }
      ],
      slideImagesOptions: {
        stopPropagation: true
      },
      productImages,
      isShowTop: true
    }
  },
  methods: {
    changeHandler(cur) {
      this.current = cur
      const containerSlide = this.$refs.containerSlide
      containerSlide._goToPage(cur, 0)
    },
    onContainerScroll({ y }) {
      let con = this.$refs.container
      let top = this.$refs.top
      const topHeight = 36
      if (y < -5) {
        con.style.transform = `translateY(-${topHeight}px)`
        top.style.transform = `translateY(-${topHeight}px)`
      } else {
        con.style.transform = 'translateY(0px)'
        top.style.transform = 'translateY(0px)'
      }
    },
    onContainerSlideChange(index) {
      this.current = index
    }
  }
}
</script>
<style lang="stylus">
$active-color = #ff4891
.refresh
  height 100%
  .img img 
    width 100%
    display block
  .fade-enter-active, .fade-leave-active
    transition all .5s
  .fade-enter, .fade-leave-to
    transform translateY(-68px)
  .top
    position relative
    transition all .5s
    .addr
      height 36px
      margin 0 auto
      display block
    .search
      position absolute
      top 0
      right 0
      height 36px
      display block
    .nav
      .cube-scroll-content
        display inline-block
        .cube-tab
          width 53px
          margin 0 5px
        .cube-tab_active
          color $active-color
        .cube-tab-bar-slider
          background-color $active-color
          margin-right 5px
  .container
    height 100%
    padding-bottom 50px
    transition all .5s
    .image-slide
      img
        width 375px
</style>