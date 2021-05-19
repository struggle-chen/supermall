<template>
  <div class="account">
    <div class="account-item">
      <div class="number">
        <span>0</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span>0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span>0</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped>
.account {
  display: flex;
  /* justify-content: space-around; */
  border-bottom: 4vw solid #f5f5f5;
}
.account-item {
  flex: 1;
  text-align: center;
  padding: 4.8vw;
  border-right: 0.533vw solid #f5f5f5;
}
.number span {
  font-size: 6.4vw;
  color: #ff5f3e;
  font-weight: 700;
}
.account-info {
  font-size: 3.467vw;
  margin-top: 1.6vw;
}
</style>