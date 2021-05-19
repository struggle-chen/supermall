<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item, index) in title" :key="item" :class="currentIndex == index ? 'active' : ''" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('TabClick', index)
    }

  }
}
</script>

<style scoped>
.tabcontrol {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #898989;
  background: #fff;
  
}
.tabcontrol-item {
  flex: 1;
}
.active {
  color: #ff8198;
  
}
.active span {
  border-bottom: 2px solid #ff8198;
  padding: 5px;
}
</style>>

