<template>
  <div class="detailBottom">
    <div class="bar-left bar-item">
      <div class="div">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="div">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="div">
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  methods: {
    addCart() {
     this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.detailBottom {
  display: flex;
  height: 15.467vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}
.bar-item {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.icon {
  display: block;
  width: 5.86667vw;
  height: 5.86667vw;
  margin: 2.66667vw auto 0.8vw;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.service {
  background-position: 0 -14.4vw;
}
.shop {
  background-position: 0 -26.133vw;
}
.cart {
  flex: 1;
  height: 15.467vw;
  line-height: 15.467vw;
  text-align: center;
  background: #ffe817;
  font-size: 4vw;
  color: #333;
}
.buy {
  flex: 1;
  height: 15.467vw;
  line-height: 15.467vw;
  text-align: center;
  font-size: 4vw;
  color: #fff;
  background: #ff6699;
}
</style>