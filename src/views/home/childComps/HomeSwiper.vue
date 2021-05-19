<template>
  
    <Swiper>
      <SwiperItem v-for="item in banner.list" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperLoad">
        </a>
      </SwiperItem>
    </Swiper>
  
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Object,
      default() {
        return {}
      }
    }
  },   
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 监听swiper中img的加载
    swiperLoad() {
      this.$emit('swiperLoad')
    }
  }
}
</script>

<style scoped>
.swiper {
  /* margin-top: 22px; */
}
</style>