<template>
  <div class="shop-item"> 
    <div class="item-selector">
      <CheckButton :isActive="itemInfo.isActive" @checkClick="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-bottom">
        <div class="item-price">￥{{itemInfo.price}}</div>
        <div class="item-count">×{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      return this.itemInfo.isActive = !this.itemInfo.isActive
    }
  }
}
</script>

<style scoped>
.shop-item {
  display: flex;
  width: 100%;
  padding: 1.333vw;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  display: flex;
  align-items: center;
}
.item-img img {
  width: 21.333vw;
  height: 26.667vw;
  padding: 1.333vw;
  border-radius: 2.667vw;
}
.item-info {
  font-size: 4.533vw;
  color: #333;
  padding: 1.333vw 2.667vw;
  overflow: hidden;
}
.item-title { 
  /* 不换行 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc {
  font-size: 3.733vw;
  color: #666;
  margin-top: 4vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 4vw;
}
.item-price {
  color: #ff4500;
}
</style>