<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
  <!-- <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div> -->
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "blue"
    }
  },
  data() {
    return {
      // isActive: true,

    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  },
  computed: {
    isActive() {
      // 当前活跃的路由的path是否等于这个item的path
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: #ff5777;
}
</style>
