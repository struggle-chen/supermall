<template>
  <div id="Detail" >
    <detailNav @TitleClick="TitleClick" ref="detailNav"/>
    <Scroll class="content" ref="scroll" @showBtn="showBackTop" :probe-type="3">
      <DetailSwiper :images="TopImages"></DetailSwiper>
      <DetailBase :goods="goods" />
      <DetailShop :shops="shops" />
      <DetailGoods :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <DetailParams :detailParams="detailParams" ref="params"/>
      <DetailComment :DetailComment="DetailComment" ref="comment"/>
      <GoodsList :goodsList="DetailGoods" ref="goods" />
    </Scroll> 
    <BackTop @click.native="backTop" v-show="isShow"/> 
    <DetailBottom @addCart="addCart"/>
    <Toast ref="toast"/>
  </div>
</template>

<script>
import {getDetailIdd,getRecommend, Goods, Shops, Params} from 'network/detail'
import {backTopMixin} from 'common/mixin'
import Scroll from 'components/common/scroll/BScroll'
// import BackTop from 'components/content/backtop/BackTop'

import detailNav from './chilDetail/detailNav'
import DetailSwiper from './chilDetail/DetailSwiper'
import DetailBase from './chilDetail/DetailBase'
import DetailShop from './chilDetail/DetailShop'
import DetailGoods from './chilDetail/DetailGoods'
import DetailParams from './chilDetail/DetailParmas'
import DetailComment from './chilDetail/DetailComment'
import GoodsList from 'components/content/goods/goodsList'
import DetailBottom from './chilDetail/DetailBottom'
import Toast from 'components/common/toast/Toast'
export default {
  mixins:[backTopMixin],
  name: 'Detail',
  data() {
    return {
      iid: '',
      TopImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      detailParams: {},
      DetailComment: {},
      Rate: {},
      DetailGoods: [],
      // isShow: false,
      navHeight: 0,
      PoffsetTop: 0,
      CoffsetTop: 0,
      GoffsetTop: 0

    }
  },
  components: {
    detailNav,
    DetailSwiper,
    DetailBase,
    DetailShop,
    DetailGoods,
    DetailParams,
    DetailComment,
    GoodsList,
    Scroll,
    // BackTop
    DetailBottom,
    Toast
  },
  created() {
    // console.log(this.$route.query.iid);
    this.iid = this.$route.query.iid
    this.getDetailIdd(this.iid) 
    // 获取推荐的数据
    this.getRecommend()
  },
  // mounted() {
  //   this.$bus.$on('detailloadImg', () => {
  //     // console.log('----');
  //     this.$refs.scroll.refresh()
      
  //   })
  // },
  methods: {
    getDetailIdd(iid) {          
      getDetailIdd(this.iid).then(res => {
      console.log(res);
      // 获取轮播图数据
      this.TopImages = res.result.itemInfo.topImages
      // 获取DetailBase信息数据
      let data = res.result
      console.log(data);     
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
      // 获取DetailShop信息数据
      this.shops = new Shops(data.shopInfo)
      // 获取DetailGoods信息数据
      this.detailInfo = data.detailInfo
      // 获取DetaiParams信息数据
      this.detailParams = new Params(data.itemParams)
      // 获取DetailComment信息数据
      if(data.rate.list) {
        this.DetailComment = data.rate.list[0]
      }
     })
    },
    // 获取推荐的数据
    getRecommend() {
      getRecommend().then(res => {
        console.log(res);
        this.DetailGoods = res.data.list
      })
    },
    
    TitleClick(index) {
      
      switch(index) {
       case 0: this.$refs.scroll.backTop(0, 0, 500)
       break;
       case 1: this.$refs.scroll.backTop(0, -this.PoffsetTop, 500)
       break;
       case 2: this.$refs.scroll.backTop(0, -this.CoffsetTop, 500)
       break;
       case 3: this.$refs.scroll.backTop(0, -this.GoffsetTop, 500)
      }
    },
    imgLoad() {
      // console.log('---');
      // console.log(index);
      // console.log(this.PoffsetTop);
      // console.log(this.$refs.detailNav.$el.offsetTop);
      // console.log(this.$refs.detailNav.$el.offsetHeight);
      // 导航栏自身的高度
      this.navHeight = this.$refs.detailNav.$el.offsetHeight
      // 参数的顶部距离
      this.PoffsetTop = this.$refs.params.$el.offsetTop + this.navHeight
      // console.log(this.PoffsetTop);
      // 评论的顶部距离
      this.CoffsetTop = this.$refs.comment.$el.offsetTop + this.navHeight
      // console.log( this.CoffsetTop);
      // 推荐的顶部距离
      this.GoffsetTop = this.$refs.goods.$el.offsetTop + this.navHeight
      // console.log(this.GoffsetTop);
      this.$refs.scroll.refresh()
    },
    addCart() {
      // 将信息添加到store中
      // console.log(this.goods);
      const obj = {}
      obj.idd = this.iid
      obj.imgURL = this.TopImages[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.price = this.goods.lowPrice
      obj.count = 0
      this.$store.dispatch('addToCart', obj).then(res => {
        this.$refs.toast.message = res
        this.$refs.toast.isShow = true
        setTimeout(() => {
          this.$refs.toast.message = ''
          this.$refs.toast.isShow = false
        }, 1500)
      })
      // this.$store.commit('addToCart', obj)
    }
  }
}
</script>

<style scoped>
#Detail {
  height: 100vh;
  position: relative;
  z-index: 9999; 
  background: #fff;
}
 .content {
  position: fixed;
  top: 11.733vw;
  bottom: 15.467vw;
  left: 0;
  right: 0;
  overflow: hidden;
  /* position: absolute;
  height: calc(100% - 44px); */
 }
 
</style>