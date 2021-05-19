<template>
  <div class="user-info">
    <img src="~assets/img/profile/avatar.svg" alt="">
    <div class="info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.user-info {
  display: flex;
  padding: 1.6vw 4vw;
  background: #ff8198;
  justify-content: space-between;
  align-items: center;
}
.user-info img {
  width: 18.667vw;
  height: 18.667vw;
 
}
.info {
  padding-left: 4vw;
  
  color: #fff;
  flex: 1;
}
.phone img {
  width: 5.333vw;
  height: 8vw;
  vertical-align: middle;
  margin-left: -1.333vw;
}
.phone span {
  font-size: 3.467vw;
}
.arrow img {
  width: 5.333vw;
  height: 5.333vw;
}
</style>