<template>
  <div class="check" @click="checkClick" :class="{'active': isActive}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkClick() {
      this.$emit('checkClick')
    }
  }
}
</script>

<style scoped>
.check {
  width: 4.267vw;
  height: 4.267vw;
  border-radius: 50%;
  border: 0.53333vw solid #ccc; 
  line-height: 4.267vw;
}
.check img {
  width: 100%;
}
.active {
  width: 4.267vw;
  height: 4.267vw;
  background: #ff8198;
  border-radius: 50%;
  border: 0;
}
</style>