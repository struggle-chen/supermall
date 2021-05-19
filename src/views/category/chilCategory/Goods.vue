<template>
  <div class="Goods">
    <GoodsItem v-for="(item, index) in goods" :key="index" :goodsItem="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: "Goods",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.Goods {  
  padding: 5.333vw 2.133vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>