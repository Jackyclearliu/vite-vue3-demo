<template>
  <div class="chart-contain">
    <div class="left-box box">
      <div class="column"></div>
      <div class="column"></div>
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
export default {
  setup() {


    return {}
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