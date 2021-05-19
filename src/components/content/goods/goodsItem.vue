<template>
  <div class="goods-item" @click="detailClick">
      <img v-lazy="showImage" alt="" @load="loadImg">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.orgPrice || goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    	showImage() {
    		return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
  methods: {
    // 图片加载完成的方法
    loadImg() {
      // console.log('-----');
      // if(this.$route.path.indexOf('/home')) {
      //   console.log('detail');
      //   this.$bus.$emit('detailloadImg')
        
      // } else if (this.$route.path.indexOf('/detail')) {
      //   console.log('home');
      //   this.$bus.$emit('homeloadImg')
      // }
       this.$bus.$emit('loadImg')
    },
    detailClick() {
      // 跳转到详情页面
      let iid = this.goodsItem.iid
      this.$router.push({path: '/detail', query: {iid}})
    }
  }
}
</script>

<style scoped>
.goods-item {
    
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    
  }

  .goods-info p {
    overflow: hidden;
    /* 超过的部分用省略号代替 */
    text-overflow: ellipsis;
    /* 规定段落中的文本不进行换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>