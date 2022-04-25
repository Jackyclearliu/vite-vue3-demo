<template>
  <div class="contain">
    <!-- 指北针图标 -->
    <div class="compass">
      <img src="../assets/image/compass.png" alt="指北针" id="compass" />
    </div>
    <!-- 地图实例 -->
    <div id="base-map" class="base-map"></div>
    <!-- 地图切换 -->
    <el-button-group class="btn-group">
      <el-button type="plain" @click="toggleMapLayer('white-map')">浅色底图</el-button>
      <el-button type="primary" @click="toggleMapLayer('dark-map')">深色底图</el-button>
    </el-button-group>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue"
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      mapInit()
    })
    const mapInit = async () => {
      let mapObj = await store.dispatch('mapInit', {
        mapName: 'base-map'
      })
    }
    const toggleMapLayer = (type) => {
      store.dispatch('mapSwitch', {
        layerId: type
      })
    }
    return {
      toggleMapLayer
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: relative;
}

.base-map {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.btn-group {
  :deep .el-button {
    padding: 5px 10px;
  }

  z-index: 4;
}

.compass {
  z-index: 4;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>