<template>
  <div class="wrapper" ref="wrapper">
    <div class="contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
// better-bscroll 2.x中需要引用ObserveDom插件
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)
export default {
  name: 'BScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      // 0: 不显示位置
      // 1,2: 显示位置，快速拖动时不显示
      // 3: 快速拖动时显示
      // probeType: 3
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    }),
    // console.log(this.scroll);
    // 监听滚动事件
    this.scroll.on('scroll', position => {
      // console.log(position);
      this.$emit('showBtn', position)
    })  
    // 监听上拉加载更多事件,pullingUp只触发一次
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })  
  },
  methods: {
    // 页面返回顶部
    backTop(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time) 
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    saveY(){
      // console.log(this.scroll.y);
      return this.scroll.y
    }
  }
}
</script>

<style>


</style>