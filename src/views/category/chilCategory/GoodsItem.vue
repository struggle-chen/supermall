<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.image" alt="">
      <div class="item-title">{{goodsItem.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 21.6vw;
  
  text-align: center;
  margin-bottom: 4vw;
  /* margin-right: 8px; */
}
.goods-item img {
  width: 17.067vw;
  height: 17.067vw;
}
.item-title {
  font-size: 3.2vw;
  margin-top: 4vw;
}
</style>