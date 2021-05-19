<template>
  <div id="Category">
    <NavBar class="cate-nav">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <Scroll class="tab-menu">
        <MenuList :menuList="menuList" @menuIndex="menuIndex"/>
      </Scroll>
      <Scroll class="tab-content" ref="scroll">
        <Goods :goods="goods"/>
        <TabControl :title="['综合', '新品', '销量']" />
        <GoodsList :goodsList="goodsList"/>
      </Scroll>
    </div>
  </div>
</template>

<script>
import {getCategory, getsubcategory, getCategoryDetail} from 'network/category'

import MenuList from './chilCategory/MenuList'
import Goods from './chilCategory/Goods'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/goodsList'
import Scroll from 'components/common/scroll/BScroll'

export default {
  name: 'Category',
  components: {
    NavBar,
    MenuList,
    Goods,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      menuList: [],
      currentIndex: 0,    
      maitKey: 0,
      miniWallkey: 0,
      goods: [],
      goodsList: [],
      menus: {
        'pop': {list:[]},
        'new': {list:[]},
        'sell': {list:[]},
      },
      currentType: 'pop'
    }
  },
  created() {
    // 获取商品菜单的数据   
    this.getCategory()
    
  },
  methods: {
    // 获取商品菜单的数据
     getCategory() {
       getCategory().then(res => {
       console.log(res);
       this.menuList = res.data.category.list
       this.maitKey = res.data.category.list[0].maitKey
       this.miniWallkey = res.data.category.list[0].miniWallkey
      //  获取正流行的商品数据
       this.getsubcategory(this.maitKey)
      //  获取商品数据的详情数据
      this.getCategoryDetail(this.miniWallkey)
      })
    },
    // 获取正流行的商品数据
    getsubcategory(maitKey) {
      getsubcategory(maitKey).then(res => {
        this.goods = res.data.list
      })
    },
    // 获取商品数据的详情数据
    getCategoryDetail(miniWallkey) {
      getCategoryDetail(miniWallkey).then(res => {
        // console.log(res);
        this.goodsList = res
        
      })
    },
    // 获取menuListItem的索引号
    menuIndex(index) {
      this.currentIndex = index
      this.maitKey = this.menuList[this.currentIndex].maitKey
      this.miniWallkey = this.menuList[this.currentIndex].miniWallkey
      // console.log(this.currentIndex);
      // 获取商品数据
      getsubcategory(this.maitKey).then(res => {
        console.log(res);
        this.goods = res.data.list
      }),
      // 获取商品详情的数据
      getCategoryDetail(this.miniWallkey).then(res => {
        // console.log(res);
        this.goodsList = res
        // console.log(this.goodsList);
      })
      // 切换左边tab栏返回顶部
      this.$refs.scroll.backTop(0, 0, 0)
    },
   
    
  }

}
</script>

<style scoped>
#Category {
  position: relative;
  height: 100vh;
}
.cate-nav {
  background: #ff8198;
  color: #fff;
  font-size: 4.267vw;
  font-weight: 700;
}
.content {
  display: flex;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;  
  
}
.tab-menu {
  width: 26.667vw;
  height: 100%;
  overflow: hidden;
 
}
.tab-content {
  height: 100%;
  flex: 1;
  overflow: hidden;
  
}
</style>