<template>
  <div class="meituan">
    <img src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/top.png" alt />
    <div class="comment-list">
      <ul>
        <li>
          <div class="face">
            <img
              src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/face.png"
              alt
            />
          </div>
          <div class="guest">
            <div class="info">
              <h4 class="name">
                不是只有你许诺
                <span class="level">
                  <img
                    src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/level4.png"
                    alt
                  />
                </span>
              </h4>
              <div class="date">2020-5-19</div>
            </div>
            <div class="star">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/star.png"
                alt
              />
            </div>
            <div class="detail">以前去过这个店吧，不过不是在这，是另外一个分店，店里装修分格都可以，下单也方便，是立点立上的，不像其他地方是自己去挑选，菜品都可以</div>
            <div class="images-list">
              <img
                @click="showSlide(0, 0)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s1_1.jpg"
                alt="image"
              />
              <img
                @click="showSlide(0, 1)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s1_2.jpg"
                alt="image"
              />
              <img
                @click="showSlide(0, 2)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s1_3.jpg"
                alt="image"
              />
              <img
                @click="showSlide(0, 3)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s1_4.jpg"
                alt="image"
              />
            </div>
          </div>
        </li>
        <li>
          <div class="face">
            <img
              src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/face.png"
              alt
            />
          </div>
          <div class="guest">
            <div class="info">
              <h4 class="name">
                开心美女小静
                <span class="level">
                  <img
                    src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/level4.png"
                    alt
                  />
                </span>
              </h4>
              <div class="date">2020-4-19</div>
            </div>
            <div class="star">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/star.png"
                alt
              />
            </div>
            <div class="detail">非常好的吃烤肉的地方，我一定会去第二次。 就冲着他们新鲜的活碰乱跳的基围虾</div>
            <div class="images-list">
              <img
                @click="showSlide(1, 0)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s2_1.jpg"
                alt="image"
              />
              <img
                @click="showSlide(1, 1)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s2_2.jpg"
                alt="image"
              />
            </div>
          </div>
        </li>
        <li>
          <div class="face">
            <img
              src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/face.png"
              alt
            />
          </div>
          <div class="guest">
            <div class="info">
              <h4 class="name">
                美食大师张女士
                <span class="level">
                  <img
                    src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/level4.png"
                    alt
                  />
                </span>
              </h4>
              <div class="date">2020-3-19</div>
            </div>
            <div class="star">
              <img
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/img/star.png"
                alt
              />
            </div>
            <div
              class="detail"
            >首先我来说说优点，第一，就是大家都是手机点菜，这个很好避免过多浪费，第二就是基围虾很新鲜，这个我喜欢。不足之处，一是居然有苍蝇到处飞，可怕，二是，火太小了，三个人只烤了三轮</div>
            <div class="images-list">
              <img
                @click="showSlide(2, 0)"
                src="http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/s3_1.jpg"
                alt="image"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div ref="slideWrapper" class="cube-slide-wrapper">
      <div class="count">{{currentIndex}} / {{totalLength}}</div>
      <cube-slide
        v-if="ready"
        ref="cubeSlide"
        @click.native="onHideClick"
        @change="onChange"
        :initialIndex="initialIndex"
        :auto-play="false"
        :loop="false"
        :showDots="false"
        :refreshResetCurrent="true"
      >
        <cube-slide-item v-for="(img, idx) in currentImgs" :key="idx">
          <img :src="img" alt />
        </cube-slide-item>
      </cube-slide>
      <div class="upload-date">xxx上传于2020-05-19</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const baseUrl = 'http://static.llccing.cn/llccing-demo/scroll/swiper/meituan/uploads/'
    const floorImgs = [
      [
        'b1_1.jpg',
        'b1_2.jpg',
        'b1_3.jpg',
        'b1_4.jpg',
        'b1_5.jpg',
        'b1_6.jpg',
        'b1_7.jpg',
        'b1_8.jpg',
        'b1_9.jpg'
      ].map(item => baseUrl + item),
      [
        'b2_1.jpg',
        'b2_2.jpg'
      ].map(item => baseUrl + item),
      [
        'b3_1.jpg'
      ].map(item => baseUrl + item)
    ]
    return {
      floorImgs,
      currentImgs: [],
      currentIndex: 1,
      totalLength: 0,
      initialIndex: 0,
      ready: false
    }
  },
  methods: {
    showSlide(floorIndex, imgIndex) {
      this.ready = false
      const currentImgs = this.floorImgs[floorIndex]
      console.log(imgIndex)
      this.currentImgs = []
      this.currentImgs.push(...currentImgs)
      this.$nextTick(() => {
        this.ready = true
        this.currentIndex = imgIndex + 1
        this.totalLength = currentImgs.length
        this.initialIndex = imgIndex
      })
      const slideWrapper = this.$refs.slideWrapper
      slideWrapper.classList.add('active')
    },
    onChange(index) {
      this.currentIndex = index + 1
    },
    onHideClick() {
      console.log('hide cube-slide')
      const slideWrapper = this.$refs.slideWrapper
      slideWrapper.classList.remove('active')
    }
  }
}
</script>
<style lang="stylus">
.meituan
  img
    display block
    width  100%
  .comment-list
    li
      display flex
      margin-top 1.3em
    .face
      width 12%
      margin 0 2% 0 4%
    .guest
      width 82%
      border-bottom 1px solid #dbdbdb
      .info
        .name
          display inline-block
          font-size 1.2em
          font-weight 500
          .level
            img
              display inline
              width 0.8em
        .date
          float right
          margin-right 3%
          color #999
      .star
        margin-top 0.7em
        img
          width 23%
      .detail
        margin-top 0.3em
        line-height 1.5
      .images-list
        margin 1em 0
        display flex
        img
          width 23%
          margin-right 2%
          display inline-block
  .cube-slide-wrapper
    position fixed
    top 0
    left 0
    width 100%
    height 0
    background #000
    opacity 0
    animation opacity 1s ease-out
    &.active
      opacity 1
      height 100%
    .count
      position absolute
      top 21px
      width 100%
      color #fff
      text-align center
    .cube-slide
      .cube-slide-item
        display flex
        justify-content center
        align-items center
    .upload-date
      position absolute
      bottom 21px
      width 100vw
      color #fff
      margin-left 20px
</style>