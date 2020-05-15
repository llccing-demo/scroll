<template>
  <div id="app">
    <h1>cube-ui vs Swiper</h1>
    <div class="nav">
      <h2>每日优鲜 <router-link to="/fresh">cube-ui</router-link> | <a href="http://static.llccing.cn/llccing-demo/scroll/swiper/fresh/index.html">Swiper</a></h2>
      <h2>淘宝世界 <router-link to="/taobao-world">cube-ui</router-link> | <a href="http://static.llccing.cn/llccing-demo/scroll/swiper/taobao-world/index.html">Swiper</a></h2>
    </div>
    <transition name="move">
      <router-view class="view" />
    </transition>
  </div>
</template>

<style lang="stylus">
#app
  padding-top 20px
h1
  text-align center
  font-size 24px
.nav
  display flex
  flex-flow column
  padding-top 20px
  h2
    margin 10px
  a
    color blue
.view
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 1
  background-color #fff
  &.move-enter, &.move-leave-active
    transform translate3d(100%, 0, 0)
  &.move-enter-active, &.move-leave-active
    transition transform .3s
</style>
