import { ref } from 'vue'
import useDog from './useDog'


export default function () {
  let a = ref(1)
  let b = ref(2)
  //   let sum = computed(() => a.value + b.value),computed只为可读，不可复写
  let sum = ref(a.value + b.value)

  async function add() {
    sum.value++
    console.log(sum.value)
  }

  function minus() {
    sum.value--
    console.log(sum.value)
  }
  // 抛出给其他文件使用
  return { sum, add, minus }
}
