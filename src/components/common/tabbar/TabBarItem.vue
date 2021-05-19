<template>
  <div id="TabBarItem" @click="itemClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-active">
      <slot name="item-active"></slot>
    </div>
    <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    // 当前路由是否包含 
    isActive() {
      // 返回true or false
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveStyle() {
      return this.isActive ? {'color': 'red'} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  #TabBarItem {
    flex: 1;
    text-align: center; 
    font-size: 14px;  
  }
  #TabBarItem img, .item-active img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
</style>