import {request} from './network'
export function getDetailIdd(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
// 把需要的数据放在一个类中
export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title
    this.oPrice = itemInfo.oldPrice
    this.nPrice = itemInfo.price
    this.lowPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.desc = itemInfo.desc
    this.services = services
    // this.name = servicers
    this.columns = columns
  }
}
export class Shops {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}
export class Params {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}
