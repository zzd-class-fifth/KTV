<template>
  <div class="model-show-pagination">
    <el-pagination
      v-for="(item, index) in layouts"
      :key="index"
      :layout="item.layout"
      :total="total"
      :prev-text="prevText"
      :next-text="nextText"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
    >
      <div v-if="item.slotName == 'first'">
        <el-button plain :disabled="currentPage == 1" @click="onClickFirst"
          >首页</el-button
        >
      </div>
      <div v-if="item.slotName == 'last'">
        <el-button plain :disabled="isDisabledLast" @click="onClickLast"
          >尾页</el-button
        >
      </div>
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      default() {
        return "";
      },
    },
    total: { default: 0 },
    prevText: {
      default: "上一页",
    },
    nextText: {
      default: "下一页",
    },
    background: {
      default: true,
    },
    pageSize: {
      default: 10,
    },
  },
  data() {
    return {
      //elementUI 的 pagination 的 layout 的默认值
      defaultLayouts: [
        "sizes",
        "prev",
        "pager",
        "next",
        "jumper",
        "->",
        "total",
        "slot",
      ],
      pageCount: 1,
      currentPage: 1,
    };
  },
  computed: {
    layouts() {
      let array = [];
      if (this.layout) {
        let arr = this.layout.split(",");
        if (arr.length > 0) {
          for (let index = 0; index < arr.length; index++) {
            const item = arr[index];
            item = item.trim();
            if (this.defaultLayouts.indexOf(item) != -1) {
              if (!array.length) {
                array.push({
                  layout: "",
                  slotName: "",
                });
              }
              //   是ui已经有的
              if (array[array.length - 1].layout) {
                array[array.length - 1].layout += ", " + item;
              } else {
                array[array.length - 1].layout += item;
              }
            } else {
              //是ui没有的
              array.push({
                layout: "slot",
                slotName: item,
              });
              if (index < arr.length - 1) {
                array.push({
                  layout: "",
                  slotName: "",
                });
              }
            }
          }
        }
      }
      return array;
    },
    isDisabledLast() {
      return this.currentPage == Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    onClickFirst() {
      this.currentPage = 1;
    },
    onClickLast() {
      this.currentPage = Math.ceil(this.total / this.pageSize);
    },
  },
  watch: {
    currentPage(currentPage) {
      this.$emit("update:current-page", currentPage);
      this.$emit("current-change", currentPage);
    },
  },
};
</script>

<style scoped>
.model-show-pagination {
  display: flex;
}
</style>

<style lang="less" scoped>
/deep/ .el-pagination {
  button {
    padding: 0 6px;
    &:focus {
      color: #303133;
    }
    &:not([disabled]) {
      &:hover {
        color: #409eff;
      }
    }
  }
  &.is-background {
    button {
      background-color: #f4f4f5;
      padding: 0 6px;
    }
  }
}
</style>