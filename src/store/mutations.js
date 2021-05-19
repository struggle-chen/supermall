import {ADDINCREASE, ADDCART} from './mutations-types'
export default {
  addToCart(state, payload) {
    // mutations的唯一作用就是修改state状态
    // mutations的每一个方法完成的事情比较单一
    // state.cartList.push(payload)
    // for (let item of state.cartList) {
    //   if(item.idd == payload.idd) {
    //     product = item
    //   } 
    // }
    // let product = null
    // console.log(state.cartList);
    //   state.cartList.find(item => {
    //   if(item.idd == payload.idd) {
    //         product = item
    //       } 
    // })
    // state.cartList.indexOf(product)
    // if(product) {
    //   product.count += 1
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
    
  },
  [ADDINCREASE](state, payload) {
    payload.count += 1
  },
  [ADDCART](state, payload) {
    payload.isActive = true
    state.cartList.push(payload)
  }
}