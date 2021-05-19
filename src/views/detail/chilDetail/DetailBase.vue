<template>
  <!-- object.keys()传入对象，返回对象可枚举属性和方法 -->
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.nPrice}}</span>
      <span class="o-price">{{goods.oPrice}}</span>
      <span :class="{'discount': goods.discount !== ''}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="index in goods.columns.length-1" :key="index">{{goods.columns[index-1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBase',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 4vw;
  padding: 0 2.133vw;
  border-bottom: 1.33333vw solid #f2f5f8;
}
.info-title {
  font-size: 4.267vw;
  color: #222;
}
.info-price {
  margin-top: 2.667vw;
  
}
.n-price {
  font-size: 6.4vw;
  color: #ff577f;
}
.o-price {
  font-size: 3.467vw;
  color: #999999;
  margin-left: 1.333vw;
  text-decoration: line-through;
}
.discount {
  font-size: 3.2vw;
  color: #fff;
  background: #ff577f;
  margin-left: 1.333vw;
  border-radius: 3.2vw;
  padding: 0.533vw 1.333vw;
  /* 实现上对齐 */
  vertical-align: top;
}
.info-other {
  display: flex;
  /* 先两边贴边,再平分剩余空间 */
  justify-content: space-between;
  font-size: 3.467vw;
  height: 8vw;
  line-height: 8vw;
  margin-top: 4vw;
  color: #999;
  /* text-align: center; */
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  height: 16vw;
  line-height: 16vw;
  font-size: 3.467vw;
  color: #333;
}
.info-service img {
  width: 3.733vw;
}
</style>