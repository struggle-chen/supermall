<template>
  <div class="normal-list">
    <div class="normal-item" v-for="(item, index) in itemInfo" :key="index">
      <span class="icon">
        <img :src="getUrl(item.icon)" alt="">
      </span>
      <!-- <div>{{item.icon}}</div> -->
      <div class="item-info">{{item.item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Normal",
  props: {
    itemInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getUrl(icon) {
      return require('assets/img/profile/' + icon)
    }
  }
}
</script>

<style scoped>
.normal-item {
  display: flex;
  height: 12vw;
  line-height: 12vw;
  padding-left: 15px;
}
.normal-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.item-info {
  margin-left: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, .1) ;
  flex: 1;
}
</style>