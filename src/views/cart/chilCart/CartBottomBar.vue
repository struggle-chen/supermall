<template>
  <div class="cart-bottom">
    <div class="select-all">
      <CheckButton :isActive="isSelectAll" @click.native="SelectAll"/>
      <span class="select">全选</span>
      <span class="total-price">合计:￥{{totalPrice}}</span>
      <span class="total-count">去计算({{totalCount}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  name: "CartBottomBar",
  data() {
    return {
      isChecked: false
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
         return item.isActive
      }).reduce((preValue, item) => {
        return  preValue + item.count * item.price
      }, 0).toFixed(2) 
    },
    totalCount() {
      return this.cartList.filter(item => {
         return item.isActive
      }).length
    },
    // 判断是否全选中
    isSelectAll() {
      if(this.cartLength == 0) return false
      // 长度=0为true，其他为false
      // return !this.cartList.filter(item => !item.isActive).length
      return !this.cartList.find(item => !item.isActive)
    }
  },
  methods: {
    SelectAll() {
      // 1.判断是否有未选中的按钮
      // console.log(this.isSelectAll);
      // 如果全部选中为false
      if(this.isSelectAll) {
        this.cartList.forEach(item => {
          item.isActive = false
        });
      } else {
        this.cartList.forEach(item => {
          item.isActive = true
        });
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom {
 position: absolute;
 bottom: 49px;
 width: 100%;
 height: 11.733vw;
 background: #eee;
 line-height: 11.733vw;
}
.select-all {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 2.667vw;
}
.select {
  margin-left: 1.333vw;
}
.total-price {
  margin-left: 4vw;
}
.total-count {
 position: absolute;
 right: 0;
 padding: 0 4vw;
 background: #ff4500;
 color: #fff;
}
</style>