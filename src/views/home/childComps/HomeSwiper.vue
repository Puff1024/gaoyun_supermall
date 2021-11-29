<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
   name: "HomeSwiper",
   components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad : false }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        this.isLoad = true;
        this.$emit("swiperImageLoad")
    }
     
    }
  }
}
</script>

<style scoped>

</style>