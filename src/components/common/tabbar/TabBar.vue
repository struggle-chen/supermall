<template>
  <div id="tabbar">     
      <slot class="tabbar-item"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tabbar {
    width: 100%;
    height: 49px;
    display: flex;
    background-color:#f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    position: fixed;
    left: 0;
    bottom: 0px;
    right: 0;
    z-index: 999;
  }
  
</style>