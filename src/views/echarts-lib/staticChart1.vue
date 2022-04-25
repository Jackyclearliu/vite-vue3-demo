<template>
  <div class="chart-contain">
    <div class="left-box box">
      <div class="column">
        <scroll-table :data="boxData1" :title="['借阅人姓名', '借阅时间', '书籍名称']" :flex="[4, 3, 3]"></scroll-table>
      </div>
      <div class="column">
        <pie-chart1></pie-chart1>
      </div>
      <div class="column"></div>
    </div>
    <div class="center-box box">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
    <div class="right-box box">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, reactive, ref } from "vue"
const scrollTable = defineAsyncComponent(() => import('@/components/tools/scroll-table.vue'))
const pieChart1 = defineAsyncComponent(() => import('@/components/charts/pieChart1.vue'))
export default {
  name: 'demo1',
  components: {
    'scroll-table': scrollTable,
    'pie-chart1': pieChart1
  },
  setup() {
    const boxData1 = reactive([
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
      ['张三', '2022-02-02', '史记'],
    ])

    return {
      boxData1
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-contain {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url(@/assets/image/chartDemo/bg.png) no-repeat center / 100% 100%;

  .box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .column {
      width: 100%;
      height: 30%;
    }
  }

  .left-box {
    flex: 3;
  }

  .center-box {
    flex: 4;
  }

  .right-box {
    flex: 3;
  }
}
</style>