<template>
  <div class="scroll-contain">
    <ul class="scroll-title">
      <li class="title-list" v-for="(item, index) in title" :key="'title' + index" :style="{ flex: flex[index] }">
        {{ item }}
      </li>
    </ul>
    <div class="scroll-content" :style="{ height: title.length > 0 ? 'calc(100% - 48px)' : 'calc(100% - 16px)' }">
      <vue3-seamless-scroll :list="data" class="warp" :hover="hover" :step="step" :limitScrollNum="limitScrollNum">
        <ul>
          <li v-for="(item, index) in data" :key="'row' + index" :style="itemStyle">
            <div :style="{ flex: flex[idx] }" v-for="(it, idx) of item" :key="'cell' + idx">
              {{ it || '------' }}
            </div>
          </li>
        </ul>
      </vue3-seamless-scroll>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from 'vue'
export default {
  name: 'scrollTable',
  props: {
    title: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    flex: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 6,
    },
    liHeight: {
      type: String,
      default: "32px"
    },
    step: {
      type: Number,
      default: 0.2
    },
    hover: {
      type: Boolean,
      default: true
    },
    limitScrollNum: {
      type: Number,
      default: 6
    }
  },
  setup(props) {
    const itemStyle = reactive({
      height: props.height,
      lineHeight: props.height
    })
    watch(() => props.title, (newVal) => {
      props.title = newVal
    })
    watch(() => props.data, (newVal) => {
      props.data = newVal
    })
    watch(() => props.limit, (newVal) => {
      props.limit = newVal
    })
    watch(() => props.height, (newVal) => {
      for (let i in itemStyle) {
        itemStyle[i] = newVal
      }
    })
    // const scrollOption = computed(() => {
    //   return {
    //     step: 0.2,
    //     limitMoveNum: props.limit,
    //     hoverStop: true
    //   }
    // })
    return {
      itemStyle,
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-contain {
  width: 100%;
  height: 100%;
  padding-top: 16px;

  .scroll-title {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 32px;
    line-height: 32px;
    font-size: 16px;

    li {
      height: 100%;
      color: rgba(65, 212, 241, 1);
      background-color: rgba(28, 84, 124, 0.85);

      &:not(:last-of-type) {
        margin-right: 3px;
      }
    }
  }

  .scroll-content {
    width: 100%;
    overflow: hidden;

    .warp {
      height: 100%;
      overflow: hidden;

      li {
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 32px;
        font-size: 16px;
        color: rgba(65, 212, 241, 1);
        cursor: pointer;

        &:hover {
          background: rgba(28, 49, 138, 0.5);
        }

        &:nth-child(2n) {
          div {
            background: rgba(183, 204, 225, 0.18);
          }
        }

        div {
          display: flex;
          height: 100%;
          white-space: nowrap;
          justify-content: center;
          text-overflow: ellipsis;

          &:not(:last-of-type) {
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>