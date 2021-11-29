import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

const mutations = {
  [ADD_COUNTER](state, payload) {
    payload.count ++;
    // console.log(payload.count);
    console.log(state.cartList);
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}

export default mutations