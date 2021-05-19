<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="desc">
        {{detailInfo.desc}}
      </div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list" :key="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailGoods",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      // console.log('111');
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 1.33333vw solid #f2f5f8;
}
.info-desc {
  padding: 0 4vw;
}
.desc {
  padding: 4vw 0;
  font-size: 3.733vw;
}
.info-desc:before {
  content: '';
}
.info-key {
  margin: 2.667vw 0 2.667vw 4vw;
  font-size: 4vw;
  color: #333;
}
.info-list img {
  width: 100%;
}
</style>