<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; */
}
.left, .right {
  width: 60px;
  
}
.center {
  flex: 1;
}

</style>