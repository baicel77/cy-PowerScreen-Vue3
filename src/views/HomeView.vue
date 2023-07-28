
<template>
  <div class="home">
    <div class="header"></div>
    <div class="left-top" v-if="chargingPile.length">
      <pie-chart :pieDatas="chargingPile"></pie-chart>
    </div>
    <div class="left-bottom" v-if="processMonitoring.length">
      <line-chart :lineDatas="processMonitoring"></line-chart>
    </div>
    <div class="right-top" v-if="chargingTop4.length">
      <charging-top4 :chargingTop4Datas="chargingTop4" :totalPercentage="totalPercentage"></charging-top4>
    </div>
    <div class="right-center" v-if="chargingStatistics.length">
      <bar-chart :barDatas="chargingStatistics"></bar-chart>
    </div>
    <div class="right-bottom" v-if="exceptionMonitoring.length">
      <exception-monitoring-svg :exceptionMonitoringDatas="exceptionMonitoring"></exception-monitoring-svg>
    </div>
    <div class="center">
      <center-effects></center-effects>
    </div>
    <div class="bottom" v-if="dataAnalysis.length">
      <data-analysis :dataAnalysisDatas="dataAnalysis"></data-analysis>
    </div>
  </div>
</template>

<script setup>
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'
import BarChart from '@/components/BarChart.vue'

import ExceptionMonitoringSvg from '@/components/ExceptionMonitoring.vue'
import ChargingTop4 from '@/components/ChargingTop4.vue'
import DataAnalysis from '@/components/DataAnalysis.vue'

import CenterEffects from '@/components/CenterEffects.vue'


import { getPowerScreenData } from '@/services'
import { ref } from 'vue';
const chargingPile = ref([])
const processMonitoring = ref([])
const chargingStatistics = ref([])
const exceptionMonitoring = ref([])
const dataAnalysis = ref([])
const chargingTop4 = ref([])
const totalPercentage = ref(0)
getPowerScreenData().then(res => {
  chargingPile.value = res.data.chargingPile.data
  processMonitoring.value = res.data.processMonitoring.data
  chargingStatistics.value = res.data.chargingStatistics.data
  exceptionMonitoring.value = res.data.exceptionMonitoring.data
  dataAnalysis.value = res.data.dataAnalysis.data
  chargingTop4.value = res.data.chargingTop4.data
  totalPercentage.value = res.data.chargingTop4.totalPercentage
})
  
</script>

<style scoped lang="less">
 .home {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bg.png') no-repeat center center / 100% 100%;
  .header {
    position: absolute;
    top: 21px;
    left: 0;
    width: 100%;
    height: 56px;
    background: url(../assets/images/bg_header.svg) no-repeat;
  }
  .left-top {
    position: absolute;
    top: 116px;
    left: 16px;
    width: 536px;
    height: 443px;
    background: url(/src/assets/images/bg_left-top.svg) no-repeat;
  }
  .left-bottom {
    position: absolute;
    bottom: 49px;
    left: 16px;
    width: 536px;
    height: 443px;
    background-image: url(/src/assets/images/bg_left_bottom.svg);
    background-repeat: no-repeat;
  }
  .right-top {
    position: absolute;
    right: 17px;
    top: 96px;
    width: 519px;
    height: 327px;
    background-image: url(/src/assets/images/bg_right_top.svg);
    background-repeat: no-repeat;
  }
  .right-center {
    position: absolute;
    right: 17px;
    top: 443px;
    width: 519px;
    height: 327px;
    background-image: url(/src/assets/images/bg_right_center.svg);
    background-repeat: no-repeat;
  }
  .right-bottom {
    position: absolute;
    right: 17px;
    bottom: 49px;
    width: 519px;
    height: 242px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/src/assets/images/bg_right_bottom.svg);
    background-repeat: no-repeat;
  }
  .center {
    position: absolute;
    right: 540px;
    bottom: 272px;
    width: 823px;
    height: 710px;
  }
  .bottom {
    position: absolute;
    right: 540px;
    bottom: 49px;
    width: 823px;
    height: 209px;
    background-image: url(/src/assets/images/bg_bottom.svg);
    background-repeat: no-repeat;
  }
 }
</style>

