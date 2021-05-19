<template>
  <div class="goodsList">
    <goodsItem :goodsItem="item" v-for="item in goodsList" :key="item.link" class="goodsList-item"></goodsItem>
  </div>
</template>

<script>
import goodsItem from './goodsItem' 
export default {
  name: 'goodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    goodsItem
  }
}
</script>

<style scoped>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  /* padding-bottom: 44px; */

}
.goodsList-item {
  width: 48%;
}
</style>