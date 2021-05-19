<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  // 通过$emit把backClick点击事件传给Home
  // methods: {
  //   backClick() {
  //     this.$emit('backClick')
  //   }
  // }
}
</script>

<style scoped>
.back-top {
  width: 11.467vw;
  height: 11.467vw;
  position: absolute;
  bottom: 16vw;
  right: 1.333vw;
}
.back-top img {
 
 width: 100%;

}
</style>