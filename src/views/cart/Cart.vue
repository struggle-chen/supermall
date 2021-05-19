<template>
  <div id="Cart">
    <CartNav class="cartNav"><div slot="center">购物车({{cartLength}})</div></CartNav>
    <Scroll class="content" ref="scroll">
      <CartList :cartList="$store.state.cartList"/>
    </Scroll>
    <CartBottomBar />
  </div>
</template>

<script>
// 将getters转换为计算属性
import {mapGetters} from 'vuex'
import CartNav from 'components/common/navbar/NavBar'
import CartList from './chilCart/CartList'
import CartBottomBar from './chilCart/CartBottomBar'
import Scroll from 'components/common/scroll/BScroll'
export default {
  name: 'Cart',
  components: {
    CartNav,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed: {
    // cartLength() {
    //   return this.$store.state.cartList.length
    // }
    ...mapGetters(['cartLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#Cart {
  height: 100vh;
  position: relative;
}
.cartNav {
  background: #ff8198;
  color: #fff;
  font-size: 4.267vw;
  font-weight: 700;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>