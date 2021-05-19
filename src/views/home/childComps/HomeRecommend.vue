<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend.list" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.recommend-item span {
  color: #666666;
}
.recommend-item a {
  text-decoration: none;
}
.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>