<template>
  <div class="chart-contain" :style="{ height: height, width: width }" ref="root"></div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import ResizeListener from 'element-resize-detector'
export default {
  name: 'pieChart1',
  props: {
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    // 获取组件实例
    const instance = getCurrentInstance()
    console.log(instance);
    // 这里的root等价于this.$refs.root
    const root = ref(null)


    return {
      root,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>