<template>
  <div class="comment-info" v-if="Object.keys(DetailComment).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="DetailComment.user.avatar" alt="">
      <span>{{DetailComment.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{DetailComment.content}}</p>
      <div class="info-other">
        <span class="time">{{showTime(DetailComment.created)}}</span>
        <span class="style">{{DetailComment.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" alt="" v-for="item in DetailComment.images" :key="item">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "DetailComment",
  props: {
    DetailComment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showTime(value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 1.333vw 3.2vw;
  color: #333;
  border-bottom: 1.33333vw solid #f2f5f8;
}
.info-header {
  display: flex;
  justify-content: space-between;
  height: 13.333vw;
  line-height: 13.333vw;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.info-user {
  padding: 2.667vw 0 1.333vw;
}
.info-user img {
  width: 11.2vw;
  vertical-align: middle;
}
.info-user span {
  margin-left: 4vw;
}
.info-detail {
  font-size: 3.733vw;
  color: #777;
  padding: 0 1.333vw 4vw;
}
.info-other {
  margin-top: 2.667vw;
  font-size: 3.2vw;
  color: #999;
}
.style {
  margin-left: 2.667vw;
}
.info-imgs {
  margin-top: 2.667vw;
}
.info-imgs img {
  width: 18.667vw;
  height: 18.667vw;
  margin-right: 2.667vw;
}
</style>