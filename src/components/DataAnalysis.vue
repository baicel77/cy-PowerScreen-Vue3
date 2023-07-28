<template>
  <div class="data-analysis">
    <template v-for="(item) in dataAnalysisDatas" :key="item.id">
      <div class="item">
        <div class="title">{{ item.title }}</div>
        <div class="bottom">
          <div class="count">
            <div class="totalNum" ref="totalNumRef">{{ item.totalNum }}</div>
            <div class="unit">{{ item.unit }}</div>
          </div>
          <div class="trend">
            <div v-if="item.isUp" class="triangle up"></div>
            <div v-else class="triangle down"></div>
            <div class="percentage" :style="{color: item.isUp ? '#c70013' : '#37a73f'}" ref="percentageRef">{{ item.percentage + '%' }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CountUp } from 'countup.js';
const props = defineProps({
  dataAnalysisDatas: {
    type: Array,
    default: () => ([])
  },
})
const totalNumRef = ref(null)
const percentageRef = ref(null)
onMounted(() => {
  setupCountAnimate()
})
const setupCountAnimate = () => {
  props.dataAnalysisDatas.forEach((item, index) => {
    new CountUp(totalNumRef.value[index], item.totalNum, { decimalPlaces: 1}).start()
    new CountUp(percentageRef.value[index], item.percentage, { decimalPlaces: 1, suffix: '%'}).start()
  })
}

</script>

<style scoped lang="less">
.data-analysis {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 32px;
  box-sizing: border-box;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    opacity: 0.8;
    .title {
      color: #fff;
    }
    .bottom {
      display: flex;
      align-items: end;
      margin-top: 10px;
      .count {
        display: flex;
        align-items: end;
        margin-right: 25px;
        color: #23aeff;
        .totalNum {
          position: relative;
          top: 4px;
          font-weight: 600;
          font-size: 36px;
        }
        .unit {
          font-size: 18px;
        }
      }
      .trend {
        display: flex;
        font-size: 16px;
        opacity: 1;
        .triangle {
          position: relative;
          top: -3px;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          &.up {
            border-bottom-color: #c70013;
          }
          &.down {
            top: 5px;
            border-top-color: #37a73f;
          }
        }
      }
    }
  }
}
</style>