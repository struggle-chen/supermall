<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shops.shopLogo" alt="">
      <span class="title">{{shops.name}}</span>
    </div>
    <div class="shop-midden">
      <div class="shop-item-left">
        <div class="info-sell">
            <div class="sell-count">{{shops.cSells}}</div>
            <div class="sell-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">{{shops.cGoods}}</div>
            <div class="goods-text">全部宝贝</div>
          </div>
      </div>
      <div class="shop-item-right">
        <table>
          <div class="item-name">
          <tr v-for="item in shops.score" :key="item.name">
            <td>{{item.name}}</td>
          </tr>
        </div>
        <div class="item-scroe">
          <tr v-for="item in shops.score" :key="item.name">
            <td><span :class="{'scroe-better': item.isBetter, 'scroe-not-better': !item.isBetter}">{{item.score}}
              </span></td>
          </tr>
        </div>
        <div class="item-better">
          <tr v-for="item in shops.score" :key="item.name">
            <td><span :class="{'better': item.isBetter, 'not-better': !item.isBetter}">{{item.isBetter == false ? '低' : '高'}}</span></td>
          </tr>
        </div>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  /* height: 45px; */
  border-bottom: 1.33333vw solid #f2f5f8;
}
.shop-top img {
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
  vertical-align: middle;
}
.shop-top .title {
  font-size: 16px;
  color: #666;
  margin-left: 10px;
  /* vertical-align: top; */
  
}
.shop-midden {
  margin-top: 15px;
  display: flex;
  
}
.shop-item-left {
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: space-around;
  /* 侧轴上的的子元素居中对齐 */
  align-items: center;
  border-right: 1px solid rgba(0,0,0,.1);
}
.sell-count, .goods-count {
  font-size: 18px;
  color: #333;
}
.sell-text, .goods-text {
  font-size: 12px;
  color: #333;
  margin-top: 10px;
}
.shop-item-right {
  width: 50%;
  font-size: 13px;
  color: #333;
 
}
.shop-item-right table {
  display: flex;
  justify-content: space-around;
  margin: 0 0 0 30px;
}
.shop-item-right td{
   padding: 5px 0;
}
.scroe-better {
  color: #f13e3a;
}
.scroe-not-better {
  color: #5ea732;
}
.not-better {
  background: #5ea732;
  color: #fff;
}
.better {
  background: #f13e3a;
  color: #fff;
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.enter-shop {
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  background: #f2f5f8;
  color: #666;
  text-align: center;
  border-radius: 10px;
  

}
</style>