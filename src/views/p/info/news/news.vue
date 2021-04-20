<template>
  <div class="news">
    <img src="@/assets/img/bell_1.jpg" alt="" />
    <img :src="imgUrl" alt="" />
    <div class="bgImg"></div>
  </div>
</template>

<script>
// 写在这里时~就是同步加载
import img1 from '@/img.png';

export default {
  props: {
    id: {
      default: 1,
    },
  },
  data() {
    return {
        // 这样子写是懒加载的模式 
        // 只有使用到这张图片的时候 才会加载它
        // 网速慢的话~是会有闪烁的情况(或者没显示)
      imgUrl: require(`@/assets/img/bell_${this.id}.jpg`),
      //   imgUrl:
      //     "https://2c.zol-img.com.cn/product/124_501x2000/978/cevEcNIkuOIWI.jpg",
    };
  },
};
</script>


<style scoped>
.news {
  width: 100px;
}

.bgImg {
  /* background-image: url("https://2c.zol-img.com.cn/product/124_501x2000/978/cevEcNIkuOIWI.jpg"); */
  background-image: url("~@/assets/img/bell_1.jpg");
  width: 200px;
  height: 200px;
}
</style>