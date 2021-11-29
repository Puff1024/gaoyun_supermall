import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
    console.log(payload);
    // 1.查看是否添加过
    const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    // console.log("old");
    // console.log(oldProduct);
    
    // 2.+1或者新添加
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
      resolve('当前的商品数量+1')
    } else {
      payload.count = 1
      payload.checked = true
      context.commit(ADD_TO_CART, payload)
      resolve('新的商品加入购物车')

    }
    })
    
  }
}

export default actions;