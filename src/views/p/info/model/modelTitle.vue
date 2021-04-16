<template>
  <div class="model-title">
    <div class="wrap">
      <div class="box-left">
        <img class="img-left" :src="imgBg" alt="" />
      </div>
      <div class="box-middle">
        <img class="img-middle" :src="imgBg" alt="" />
        <div class="slot"><slot>这里显示标题内容</slot></div>
      </div>
      <div class="box-right">
        <img class="img-right" :src="imgBg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgBg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABpCAYAAAAtF5PbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg3Qzk2Njc4NzhCMTFFNUIzNjBBNDhCMjk3RUE2MTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzg3Qzk2NjY4NzhCMTFFNUIzNjBBNDhCMjk3RUE2MTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NzNBNzI3ODc4MzExRTVBMDIwRkQ4QkVCODEyOTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1NzNBNzI4ODc4MzExRTVBMDIwRkQ4QkVCODEyOTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5xAugQAAAqpJREFUeNrsmr1rFEEYxt+5Mzk9z8sJGmMIihIwqS1EkIAIptBSsNTaQmttLPwHjKWFgiGNJEW6VDZWiikUgqAEEkWjRuMZk+M+Nrc+k52FUzfZj9mdQfMOPMxxNzu/nX2ffWdudsWRuy6pch26CR2E8pRx2aXqGWiUDJacGqlRqA++QxaKBO+zBRa2wMTgsNKqr5sHO40arS2/o2Zt1Ry47TSp9v0zOa0G/Via14JHBtd/rlD14zw11qtErpdmJbyxVs0W3HZatNGq//X96peFbMC+kYqVXuraXer4RVDXnhL19B1PZLhcZCMJQZX+wU3Y5oH5PE6mj7qL5USGy8UykoQf9uClAwOo9yY2nMB87AYZSXb2Z0zLh45RoVTxzIWTCG0Xd8ShRhJC23CB4KhGCmsXP8ZRjbRNu+SujmqkgHaJzfVbiWok1S69zBXVSEJkkzJ1jKQ3O2kYSX8+Tmik7Rb0seFxY5rOmkvoL0x35irTsQV+YQt8QU44NsAr0Gnoq0mwfx/Pqp2Ay9BF6KQJsMt/2hjMYAYzmMEMZjCDGcxgBjOYwQzeYWC5I/DaFnh4i99q0DPoEnkbNLR4w8ylLkJnoSXonI0Yd0PTtswlN6av2XL1qC1wLycQBjM4LFdnUo6O0QCq+9AZ6CV0G7n+iTYYHV9RGc2/aqKjlv2e70g6Ej6OY26hntAd8UOK90pWPzQGndAFyxEX1Oe2OokR8h4vFLY4poe8FxKTgxGv8YDLf0rNZuZcDagc8Ry0Yfp2kuChqH2mBsall3F+AH2zcR9/gt5A+wP6lmu459BU6mCM+j1iLV0tn9wNQmUV82UV/1m0qf5fKRMj+oBqkmcnBv8T4KYt8FsbYPlU/Z4N8CPolcnM5ao10lVTWxEyqT+FHqc9Ur/8EmAAH00RKJU78BoAAAAASUVORK5CYII=",
    };
  },
};
</script>

<style scoped>
.slot {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.box-left,
.box-middle,
.box-right {
  height: 35px;
  overflow: hidden;
  display: inline-block;
}
.box-left,
.box-right {
  width: 30px;
}
.box-middle {
  position: relative;
}
.img-left,
.img-middle,
.img-right {
  width: 30px;
  height: 105px;
  object-fit: cover;
}
.img-middle {
  position: absolute;
  left: 0;
  width: 100%;
  transform: translate(0px, -35px);
}
.img-right {
  transform: translate(0px, -70px);
}
</style>