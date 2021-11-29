<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
// import BScroll, { ObserveImage, PullUpLoad } from "better-scroll";
// BScroll.use(PullUpLoad);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: {}
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      mouseWheel: true,
      observeDOM: true,
      ObserveImage: true
    });
    //2.监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("show-back", position);
    });
    //监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载");
      this.$emit("pullingUp");
    });
  },

  methods: {
    scrollTo(x, y, time = 200) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
