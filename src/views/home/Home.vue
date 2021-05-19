<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物车</div>
    </NavBar>
    <TabControl :title="['流行', '新款', '精选']" @TabClick="changeTab" ref="topTab" class="fixed" v-show="isFixed"></TabControl>
    <Scroll class="content" ref="scroll" @showBtn="showBackTop" :probe-type="3" :pullUpLoad="true" @pullingUp="pullingUp">     
       <HomeSwiper :banner="banner" @swiperLoad.once="swiperLoad" ></HomeSwiper>
       <HomeRecommend :recommend="recommend"></HomeRecommend>
       <HomeFeature/>
       <TabControl :title="['流行', '新款', '精选']" @TabClick="changeTab" ref="tabControl" class="fixed"></TabControl>
       <GoodsList :goodsList="showGoods"></GoodsList>    
    </Scroll>
    <!-- 组件中获取点击事件需要加native -->
    <BackTop @click.native="backTop" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/goodsList'
import Scroll from 'components/common/scroll/BScroll'
// import BackTop from 'components/content/backtop/BackTop'

import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommend from 'views/home/childComps/HomeRecommend'
import HomeFeature from 'views/home/childComps/HomeFeature'

import {getHomeMultiData, getProductData} from 'network/home'
import {backTopMixin} from 'common/mixin'

export default {
  mixins:[backTopMixin],
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop
  },
  data() {
    return {
      banner: {},
      recommend: {},
      goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]},
      },
      currentType: 'pop',
      // tabOffsetTop: 0,
      tabControlHeight: 0,
      // isFixed: false,
      saveY: 0
    }
  },
  // 当Home组件生成时执行
  // 请求多方数据
  created() {
    // 调用方法中获取的数据
    // 请求轮播图数据
    this.getHomeMultiData()
    // 请求商品数据
    this.getProductData('pop')
    this.getProductData('new')
    this.getProductData('sell')
  },
  mounted() {
    // 事件总线： 获取goodsItem.vue中的loadImg()
    this.$bus.$on('loadImg', () => {
      // console.log('----');
      this.$refs.scroll.refresh()
      
    })
    // 通过$el来获取组件里的标签
      // console.log(this.$refs.tabControl.$el);
      // 获取的值不准确
      // console.log(this.$refs.tabControl.$el.offsetTop);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // destroyed() {
  //   console.log('home destroyed');
  // },
  activated() {
    // console.log('activated');
    // console.log(this.saveY);
    this.$refs.scroll.backTop(0, this.saveY, 500)
    this.$refs.scroll.refresh()

  },
  // 离开home.vue使
  deactivated() {
    // console.log('deactivated');
    // 保存滚动的距离
    this.saveY = this.$refs.scroll.saveY()
    // console.log(this.saveY);
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(res => {
      // console.log(res);
      
      this.banner = res.data.banner
      // console.log(this.banner);   
      this.recommend = res.data.recommend
      // console.log(this.recommend);
      })
    },
    getProductData(type) {
      // console.log();
      const page = this.goods[type].page + 1
        getProductData(type, page).then(res => {
        console.log(res);       
        let newList = res.data.list
        // 把一个数组push到另一个数组中
        this.goods[type].list.push(...newList) 
        this.goods[type].page += 1
        // 结束上拉加载行为。
        this.$refs.scroll.finishPullUp()
      })  
    },
    changeTab(index) {
      switch(index) {
        case 0: this.currentType = 'pop'
        break;
        case 1: this.currentType = 'new'
        break;
        case 2: this.currentType = 'sell'
        break;
      }
      // console.log(this.currentType);
      // this.type = this.currentType
      this.tabControlHeight = this.$refs.tabControl.$el.offsetHeight
      this.$refs.tabControl.currentIndex = index;
      this.$refs.topTab.currentIndex = index
      this.$refs.scroll.backTop(0, -(this.tabOffsetTop + this.tabControlHeight), 0)
    },
    // 通过$emit('backTop')传递过来使用的方法
    // backClick() {
    //   console.log('backClick');
    //   this.$refs.scroll.backTop()
    // },
    
    // 上拉加载更多
    pullingUp() {
      // console.log('上拉加载更多');
      this.getProductData(this.currentType)
      
      // this.$refs.scroll.refresh()
    },
    // 轮播图加载完成
    swiperLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      
    }
  }
}
</script>

<style scoped>
.nav {
  background: #ff8198;
}
/* vh--视口高度 */
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* better-scroll中的translateY会影响fix属性 */
.fixed {
  position: relative;
 
  z-index: 999; 
} 
</style>

