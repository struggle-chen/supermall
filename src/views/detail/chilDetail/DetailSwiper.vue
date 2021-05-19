<template>
  <Swiper>
    <SwiperItem v-for="item in images" :key="item" class="detail-img">
      <img :src="item" alt="" @load="swiperLoad">
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    swiperLoad() {
      // console.log('图片加载完成');
      this.$emit('swiperLoad')
    }
  }
}
</script>

<style scoped>
.detail-img {
  height: 80vw;
  overflow: hidden;
}
</style>