<template>
  <div class="menu-list">
    <MenuListItem v-for="(item, index) in menuList" :key="index" :itemInfo="item" @click.native="menuClick(index)" :class="currentIndex==index ? 'active' : ''"></MenuListItem>
  </div>
</template>

<script>
import MenuListItem from './MenuListItem'
export default {
  name: "MenuList",
  components: {
    MenuListItem
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index
      this.$emit('menuIndex', index)
    }
  }
}
</script>

<style scoped>

.active {
    background: #fff;
    color: #ff5777;
    font-weight: 700;
    border-left: 0.8vw solid #ff5777;
  }
</style>