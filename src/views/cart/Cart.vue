<template>
<div id="cart">
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <div class="cart-list">
    <cart-list :cartList="cartList"></cart-list>
  </div>
  <bottom-bar></bottom-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList.vue"
import BottomBar from "./childComps/BottomBar.vue"
import { mapGetters } from 'vuex' 
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    //  cartCount() {
		//     return this.$store.getters.cartLength
    //   }
  }

}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>