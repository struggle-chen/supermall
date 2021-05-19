<template>
  <NavBar class="detail-nav">
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="" @click="back">
      </div>
      <div class="title" slot="center">
          <div class="title-item" v-for="(item, index) in titles" :key="index" @click="titleClick(index)" :class="currentIndex == index ? 'active' : ''">{{item}}</div>
      </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'detailNav',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    // 返回上级页面
    back() {
      this.$router.go(-1)
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('TitleClick', index)

    }
  }
}
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 999;
  background:#fff;
}
.back img {
  margin-top: 12px;
}
.title {
  display: flex;
  font-size: 14px;
  padding: 0 20px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text)
}
</style>