<template>
  <div>

    <div>
      <h2>当前求出的和为：{{ sum }}</h2>
      <img :src="item" alt="狗" v-for="item in dogImage" :key="item" width="100" height="100">
    </div>
    <div class="btn">
      <button @click="addFetchData">增加+1</button>
      <button @click="minus">减少-1</button>
    </div>

    <hr />

    <!-- 路由链接 -->
    <div class="nav">
      <RouterLink :to="{ name: 'home' }">首页</RouterLink>
      <RouterLink :to="{ path: '/News' }">新闻</RouterLink>
      <RouterLink :to="{ name: 'guanyu' }">关于</RouterLink>
    </div>

    <RouterView />

    <hr />


    <!-- pinia使用 -->
    <h2>读取pinia的count数据:{{ countStore.count }}</h2>
    <h2>读取pinia计算getters方法tenfold得出十倍数据:{{ countStore.tenfoldCount }}</h2>
    <button @click="countStore.count++" class="btn1">直接+1</button>
    <button @click="patch" class="btn1">调用$patch方法+1 </button>
    <button @click="countStore.increment" class="btn1">调用actions中的自定义方法increment</button>
    <!-- 模拟用户登录成功 -->
    <button @click="getToken" class="btn1">{{ `获取用户的token:${tokenState.token}` }}</button>


    <hr />
    <!-- 组件通信 -->
    <div>
      <h2>父组件传递数据给子组件</h2>
      <Son receivedData="来自父组件的数据A,也可以去调用方法哦!" @getToken="getToken" :sonGiveDataMeathod="sonGiveDataMeathod" :bbb="1"
        :ccc="2" ref="sonRef" />
      <div>{{ sonGiveData }}</div>
      <!-- 父组件修改子组件数据 -->
      <button @click="changeNumber($refs)">我是父组件的按钮,作用是修改子组件数据number的值</button>
    </div>


    <hr />
    <!-- 
      mitt事件总线,任一组件通信
      1.首先安装:npm i mitt
      2.在main文件中导入
     -->
    <Mitt></Mitt>

    <hr />

    <Slot>
      <!-- 具名插槽 v-slot:指定name属性的插槽或者可以直接写成 #title -->
      <template v-slot:title>
        <span>登录页面</span>
      </template>

      <!-- 具名插槽等同写法 -->
      <!-- <template #title>
        <span>登录页面</span>
      </template> -->

      <!-- 默认插槽 -->
      <h2>插值显示:登录成功!</h2>

      <!-- 
        作用域插槽,数据由子组件提供,展示的样式由引用者自行决定
        应用在默认插槽则写成v-slot="{xxx}"
        具名插槽则写成#name属性值="{xxx}" 
      -->
      <template #userSlot="{yonghu}">
        <ul>
          <li v-for="item in yonghu" :key="item.id">{{ item }}</li>
        </ul>
      </template>
    </Slot>


    <hr />
    <!-- vue常用的api使用方法 -->
    <VueApi></VueApi>

  </div>
</template>

<script setup lang="ts" name="App">
import useSum from './hooks/useSum'
import useDog from './hooks/useDog'

const { sum, add, minus } = useSum()
const { dogImage, fetchDogImage } = useDog()

const addFetchData = () => {
  add();
  fetchDogImage();
};



// 读取pinia
import useCountStore from './store/count'
const countStore = useCountStore() // 只有实例化了useCountStore在浏览器vue开发者工具中才会显示该状态
console.log('@@@pinia.countStore', countStore);


// 修改pinia状态---调用内部的$patch方法,很多数据时优先使用这个,因为同时操作修改多个数据只用调用一次
function patch() {
  countStore.$patch({ count: countStore.count + 1 })
}

// 监听pinia状态 -- 调用内部的$subscribe方法
countStore.$subscribe((mutation, state) => {
  console.log('@监听到状态值count发生变化', mutation, state);
})


// 模拟用户登录
import useTokenState from './store/token'
import { v4 as uuidv4 } from 'uuid';

let tokenState = useTokenState
function getToken(argument?) {
  console.log("模拟获取token", argument);
  let UUID = uuidv4()
  tokenState.token = UUID
}


// 引入子组件
import Son from './components/Son.vue'
// 接收子组件传递过来的数据
let sonGiveData = ref('')
// 接收子组件传递数据的方法
function sonGiveDataMeathod(argument: string) {
  console.log("子组件传入的参数为:", argument);
  sonGiveData.value = argument
}
// 父组件改变子组件数据number++
import { ref, defineExpose } from 'vue'
let sonRef = ref()
function changeNumber(refs?) {
  // console.log('获取本组件下所有的子组件标识符:',refs);
  // refs.sonRef.number ++ //通过所有的子组件标识符中找到子组件的引用，然后修改其数据
  sonRef.value.number++ //通过指定标识符对子组件数据进行操作
}

// 向孙组件Grandson.vue、后代组件提供数据
provide('appData', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') // 也可以直接传一个对象数据，对象其中包括属性和方法，方法的话可以实现后代组件操作祖先组件数据

import Mitt from './pages/Mitt.vue'

//调用全局属性mitt方法
const { $emitter } = getCurrentInstance().appContext.config.globalProperties;
$emitter.on('aaa', () => {
  console.log('Mitt.vue文件通知调用aaa广播订阅消息');
  // $emitter.off('aaa') // 关闭通知
  $emitter.all.clear() // 清空所有通知
  console.log($emitter);

})

import Slot from './components/Slot.vue'
import VueApi from './pages/VueApi.vue'

// 将数据抛出给外部,这样其他组件才能操作此数据
defineExpose({ sum })

</script>

<style scoped>
.btn {
  width: 200px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
}

.nav {
  font-size: 30px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
}

hr {
  margin-bottom: 50px;
  margin-top: 50px;
}


.btn1 {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
