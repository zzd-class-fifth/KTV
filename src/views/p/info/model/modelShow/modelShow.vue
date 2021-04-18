<template>
  <div class="model-show">
    <div class="wrap">
      <model-box>
        <p slot="title">模特展示</p>
        <div class="box">
          <model-show-item-1
            v-for="(item, index) in dataList"
            :key="index"
            :id="item.id"
          ></model-show-item-1>
        </div>

        <model-show-pagination
          layout="first, prev, pager, next, last"
          :total="defaultDataList.length"
          :pageSize="pageSize"
          :current-page.sync="currentPage"
        ></model-show-pagination>
      </model-box>
    </div>
  </div>
</template>

<script>
import modelBox from "../modelBox.vue";
import ModelShowItem1 from "./modelShowItem1.vue";
import ModelShowPagination from "./modelShowPagination.vue";

export default {
  components: { modelBox, ModelShowItem1, ModelShowPagination },
  props: {},
  data() {
    return {
      //显示出来的数据
      dataList: [],
      // 总共的数据
      defaultDataList: [],
      currentPage: 1, //当前显示的页面
      pageSize: 6, //每页显示的数量
    };
  },
  created() {
    for (let index = 0; index < 100; index++) {
      this.defaultDataList.push({ id: index });
    }

    this.dataList = this.getDataList();
  },
  methods: {
    getDataList() {
      return this.defaultDataList.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  watch: {
    currentPage() {
      this.dataList = this.getDataList();
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>