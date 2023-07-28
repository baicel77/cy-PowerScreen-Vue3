import * as echarts from 'echarts'
import { onUnmounted } from 'vue'

export default function useEcharts(divRef, option) {
  let echartsInstance = echarts.init(divRef, null, { renderer: 'svg' });
  echartsInstance.setOption(option);
  onUnmounted(() => {
    echartsInstance.dispose()
  })
  const resize = () => {
    echartsInstance.resize()
  }
  return {
    echartsInstance,
    resize
  }
}