
import {ADDINCREASE, ADDCART} from './mutations-types'
export default {
  addToCart(context, payload) {
    return new Promise(resolve => {
      // 1.查看该商品是否已经添加到cartList中
      let product = context.state.cartList.find(item => {
        if(item.idd == payload.idd) {
              product = item
            }
            return product 
      })
      // let index = context.state.cartList.indexOf(product)
      if(product) {
        context.commit(ADDINCREASE, product)
      } else {
        payload.count = 1
        context.commit(ADDCART, payload)
      }
      resolve('添加购物车成功')
    })
  }

}