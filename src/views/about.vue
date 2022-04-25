<template>
  <div>
    <h2>About组件</h2>
    <p>声明异步组件测试</p>
  </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, watch, defineAsyncComponent } from 'vue'
// const asyncTest = defineAsyncComponent(() => import('@/components/async-test.vue'))
// const asyncTest = defineAsyncComponent({
//   loader: () => import('@/components/async-test.vue'),
//   loadingComponent: loadingComponent,
//   errorComponent: errorComponent,
//   delay: 1000,
//   timeout: 3000,
//   suspensible: false,
//   onError(error, retry, fail, attempts) {
//     if(error.message.match(/fetch/) && attempts <= 3) {
//       retry()
//     } else {
//       fail()
//     }
//   }

// })
export default {
  name: 'About',
  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>