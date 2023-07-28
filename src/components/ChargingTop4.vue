<template>
  <div class="charging-top4">
    <water-ball :totalPercentage="totalPercentage"></water-ball>
    <div class="legend">
      <template v-for="(item, index) in chargingTop4Datas" :key="item.id">
        <div class="item">
          <div class="icon" :style="{backgroundColor: iconColor[index]}"></div>
          <div class="name">{{ item.name }}</div>
          <div class="percentage">{{ item.percentage }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import WaterBall from './WaterBall.vue';
const props = defineProps({
  chargingTop4Datas: {
    type: Array,
    default: () => ([])
  },
  totalPercentage: {
    type: Number,
    default: 0
  },
  iconColor: {
    type: Array,
    default: () => (['#209393', '#1a54a5', '#85caf0', '#f5b64a', '#ee792e'])
  }
})

</script>

<style scoped lang="less">
.charging-top4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  .legend {
    margin: 50px 50px 0 0;
    color: #fff;
    font-size: 20px;
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 23px;
      .name {
        margin: 0 10px;
      }
      .icon {
        width: 16px;
        height: 16px;
        background-color: skyblue;
        border-radius: 100%;
      }
      .percentage {
        color: #0cd2ea;
      }
    }
  }
}
</style>