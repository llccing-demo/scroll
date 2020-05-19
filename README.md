# scroll

移动端屏幕很小，所以需要各种滑动功能来优化体验。

## swiper 能干的事情，better-scroll 也能干么？

### 使用 better-scroll 实现 swiper 的 example

* [x] fresh -- 每日优鲜
* [x] taobao-world -- 淘宝地球
* [ ] tiger -- 打虎幻灯片

#### fresh

这个页面的布局很复杂，涉及到多层嵌套，处理的时候需要注意。


#### taobao-world

这个 slide 两边留白的效果在很多的APP中都出现过，是个很有用的效果。并且这个效果能够扩展为其他很多效果，可以尝试。

地球的滚动的效果主要是监听 slide 滚动的距离，计算百分比，这个可以考虑放到 slide 的组件内部做为事件的回调参数来使用会更加方便。


#### tiger

首先使用了 animate.css 类库实现效果。

**有个默认展示的问题**，解决方式如下，类似幻灯片的效果实现，一个特别有用的属性是 `animation-fill-mode: none | forwards | backwards | both`， none 表示不改变默认行为；forwards 表示当动画执行完成后，保持最后一个属性值（在最后一个关键帧中定义）；backwards 表示在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）；both 表示向前和向后填充模式都被应用。

- [https://segmentfault.com/q/1010000003867335](https://segmentfault.com/q/1010000003867335) 如何理解 animation-fill-mode 使用
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) MDN animation-fill-mode