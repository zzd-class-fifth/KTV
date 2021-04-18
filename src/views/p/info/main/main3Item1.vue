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
            "//49.235.93.38:82/uploads/20210408/2ba8c4697ba0a60f2333998080781627.jpg",
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