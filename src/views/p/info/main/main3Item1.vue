<template>
  <div class="main-3-item-1">
    <div class="img-warp">
      <div class="img-box">
        <div class="img-content">
          <img :src="data.imgUrl" alt="" />
        </div>
      </div>
      <p>{{ data.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default() {
        return {
          imgUrl:
            "//aimg8.dlssyht.cn/u/1913406/product/7193/14385341_1563720196.jpg?x-oss-process=image/resize,m_fixed,w_300,h_400,limit_0",
          title: "成都夜总会模特",
        };
      },
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  line-height: 50px;
}
.img-warp {
  width: 350px;
}
.img-box {
  width: 300px;
  height: 400px;
  overflow: hidden;
  margin: auto;
}
.img-content:hover {
  transform: scale(1.2);
}
</style>