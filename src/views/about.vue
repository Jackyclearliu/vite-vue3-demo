<template>
  <div class="main">
    <Map></Map>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Map = defineAsyncComponent(() => import('@/components/maps/FirstMap.vue'))
export default {
  name: 'About',
  components: {
    Map
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>