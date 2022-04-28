<template>
  <div class="base-map" :style="{ width: width, height: height, 'z-index': zIndex }">

  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from "vue"
export default {
  name: 'firstMap',
  props: {
    width: {
      type: String,
      deault: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    zIndex: {
      type: [String, Number],
      default: '1'
    }
  },
  setup(props) {
    // 初始化
    const instance = getCurrentInstance()
    const _this = instance.proxy
    const global = instance.appContext.config.globalProperties


    return {}
  }
}
</script>

<style lang="scss" scoped>
.base-map {
  position: absolute;
}
</style>