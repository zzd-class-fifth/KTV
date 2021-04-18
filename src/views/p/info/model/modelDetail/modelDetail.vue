<template>
  <div class="model-detail" :style="wh">
    <div class="wrap" :style="wh">
      <div class="wrap-left" :style="wh">
        <img :src="imgUrl" alt="" class="default-img" />
        <div
          class="show-area"
          v-show="show_area"
          ref="show_area"
          :style="show_area_style"
        ></div>
        <div
          class="mask"
          @mouseenter="onMouseenter"
          @mousemove="onMousemove($event)"
          @mouseleave="onMouseleave"
          ref="mask"
        ></div>
      </div>
      <div class="show_box" v-show="show_area" :style="show_box_style">
        <div class="big_area">
          <div class="big-img" ref="big_img" :style="power">
            <img :src="imgUrl" class="default-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //显示的图片
    imgUrl: {
      default:
        "https://aimg8.dlssyht.cn/u/1913406/product/7193/14385341_1563720196.jpg",
    },
    // 组件的宽
    width: {
      default: 300,
    },
    // 组件的高
    height: {
      default: 300,
    },
    //放大倍率
    bigPower: {
      default: 3,
    },
  },
  data() {
    return {
      show_area: false,
      bigX: 0,
      bigY: 0,
    };
  },
  computed: {
    wh() {
      return `width:${this.width}px;height:${this.height}px`;
    },
    power() {
      return (
        `transform:scale(${this.bigPower}) translate(${this.bigX}px, ${this.bigY}px);` +
        this.wh
      );
    },
    show_area_style() {
      return `width:${this.width / this.bigPower}px; height:${
        this.height / this.bigPower
      }px;`;
    },
    show_box_style() {
      return `left:${this.width}px;` + this.wh;
    },
  },
  methods: {
    onMouseenter(e) {
      this.show_area = true;
    },
    onMousemove(e) {
      let refs = this.$refs;
      let show_area = refs["show_area"];

      let maxX = this.width - show_area.offsetWidth;
      let maxY = this.height - show_area.offsetHeight;

      let oX = e.offsetX - show_area.offsetWidth / 2;
      let oY = e.offsetY - show_area.offsetHeight / 2;

      switch (true) {
        case oX < 0:
          oX = 0;
          break;
        case oX > maxX:
          oX = maxX;
          break;
      }

      switch (true) {
        case oY < 0:
          oY = 0;
          break;
        case oY > maxY:
          oY = maxY;
          break;
      }

      show_area.style.left = oX + "px";
      show_area.style.top = oY + "px";

      this.bigX = -oX;
      this.bigY = -oY;
    },
    onMouseleave() {
      this.show_area = false;
    },
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.wrap-left {
  width: 49%;
  height: 100%;
  background: black;
  position: relative;
}
.default-img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
.show-area {
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(200, 200, 200, 0.5);
}
.big_area {
  position: relative;
  overflow: hidden;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.big-img {
  transform-origin: 0 0;
}
.show_box {
  position: absolute;
  top: 0;
  overflow: hidden;
  background: black;
}
</style>