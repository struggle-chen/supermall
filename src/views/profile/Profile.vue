<template>
  <div id="Profile">
    <NavBar class="pro-nav">
      <div slot="center">我的档案</div>
    </NavBar>
    <UserInfo/>
    <Account/>
    <Normal :itemInfo="itemInfo"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './chilProfile/UserInfo'
import Account from './chilProfile/Account'
import Normal from './chilProfile/Normal'
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    Account,
    Normal
  },
  data() {
    return {
      itemInfo: [{
        icon: 'message.svg',
        item:'我的消息'
      },{
        icon: 'pointer.svg',
        item: '我的积分'
      },{
        icon: 'vip.svg',
        item: '会员卡'
      },{
        icon: 'cart.svg',
        item: '我的购物车'
      },{
        icon: 'shopping.svg',
        item: '下载购物App'
      }]
    }
  }

}
</script>

<style scoped>
.pro-nav {
  background: #ff8198;
  color: #fff;
  font-size: 4.267vw;
}
</style>