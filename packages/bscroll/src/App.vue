<template>
  <div id="app">
    <div id="nav">
      <router-link to="/refresh">refresh</router-link>
    </div>
    <transition name="move">
      <router-view class="view" />
    </transition>
  </div>
</template>

<style lang="stylus">
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
