<template>
  <div class="menu-list-item" >
    {{itemInfo.title}}
  </div>
</template>

<script>
export default {
  name: "MenuListItem",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index
      console.log(this.currentIndex);
      console.log(index);
    }
  }
}
</script>

<style scoped>
  .menu-list-item {
    height: 12vw;
    width: 26.667vw;
    line-height: 12vw;
    text-align: center;
    background: #f6f6f6;
    color: #666;
  }
  
</style>