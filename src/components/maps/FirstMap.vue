<template>
  <div id="base-map" class="base-map" :style="{ width: width, height: height, 'z-index': zIndex }">

  </div>
</template>

<script>
import { getCurrentInstance, nextTick, onMounted, ref } from "vue"
export default {
  name: 'firstMap',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    zIndex: {
      type: [String, Number],
      default: '0'
    }
  },
  setup() {
    // 初始化
    const instance = getCurrentInstance()
    const _this = instance.proxy
    const global = instance.appContext.config.globalProperties
    // const map = ref(null)

    const initMap = (mapName) => {
      let myMap = new global.maptalks.Map(mapName, {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new global.maptalks.TileLayer('white-map', {
          urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a', 'b', 'c', 'd'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      })
      return myMap
    }
    onMounted(async () => {
      await nextTick()
      initMap('base-map')
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
.base-map {
  position: absolute;
}
</style>