<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
   name: "RecommendView",
   components: {
    
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  font-size: 14px;
}
.recommend-item img {
    height: 75px;
    width: 75px;
}
</style>