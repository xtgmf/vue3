import { defineStore } from "pinia"

const useCountStore = defineStore('count', {
    // 数据存储
    state: () => {
        return {
            count: 0
        }
    },
    // 数据处理方法
    actions: {
        increment() {
            this.count++
        }
    },
    // 读取数据前处理计算数据方法
    getters: {
        // 十倍数据
        tenfoldCount: (state) => state.count *10
    }
})

export default useCountStore