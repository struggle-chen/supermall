// 混入(mixin)来分发Vue组件中的可复用功能，一个混入对象可包含任意组件选项
// import scroll from 'components/common/scroll/BScroll'
import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false,
      isFixed: false,
      tabOffsetTop: 0
    }
  },
  methods: {
    // 返回到顶部
    backTop() {
      // console.log('backClick');
      this.$refs.scroll.backTop(0, 0, 500)
    },
    // 返回顶部按钮是否显示
    showBackTop(position) {
      // console.log(-position.y);
      this.isShow = -position.y > 405
      // 判断tabControl是否为fixed
      // console.log(-(position.y));
      // console.log(this.tabOffsetTop);
      if(this.tabOffsetTop !== 0) {
        this.isFixed = -(position.y) >= this.tabOffsetTop + 40
      }
      // console.log(-position.y);
      // console.log(this.tabOffsetTop);     

    },
  }
}