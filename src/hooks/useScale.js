import { onMounted, onUnmounted } from 'vue';
import loadsh from 'loadsh'
export default function useScale(options) {

  const throttleScaleFn = loadsh.throttle(() => {
    triggleScaleScreen()
  }, 100)

  onMounted(() => {
    triggleScaleScreen()
    window.addEventListener('resize', throttleScaleFn)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', throttleScaleFn)
  })

  const triggleScaleScreen = () => {
    // 1. 当前屏幕宽高
    let targetX = options.targetX
    let targetY = options.targetY
    let targetRatio = options.targetRatio// 宽高比率
    
    const currentX = document.documentElement.clientWidth
    const currentY = document.documentElement.clientHeight
    const currentRatio = currentX / currentY
    // 2.计算宽度比
    const yRatio = currentY / targetY
    const xRatio = currentX / targetX
    if (currentRatio > targetRatio) {
      document.body.style = `transform: scale(${yRatio}) translateX(-50%); left: 50%;`
    } else {
      document.body.style = `transform: scale(${xRatio})`
    }
  }
}