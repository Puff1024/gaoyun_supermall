<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <div class="goods">
      <good-list-item v-for="(item, index) in recommendList" :key="index" :goodsItem="item"></good-list-item>
    </div>
  </div>
</template>

<script>
  import GoodListItem from 'components/content/goods/GoodListItem'
	export default {
		name: "DetailRecommendInfo",
    components: {
      GoodListItem
    },
    props: {
		  recommendList: {
		    type: Array
      }
    },
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
