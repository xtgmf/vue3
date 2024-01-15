

<template>
    <div>
        <div>子组件数据:{{ number }}</div>
        <h5>我是子组件接收父组件的数据:</h5> {{ receivedData }}
        <!-- 父组件传参了,但是子组件没接收的参数 -->
        <h6>父组件传参了,但是子组件没接收的参数:{{ $attrs }}</h6>
        <button @click="emit('getToken', '这条请求是子组件调用的')">调用父组件getToken方法</button>
        <!-- 占位间隔 -->
        &nbsp;&nbsp;&nbsp;
        <!-- 传值给父组件 -->
        <button @click="sonGiveDataMeathod('.........我是子组件传递过来的哦............')">使用父组件的方法传递数据给父组件</button>
        <!-- 占位间隔 -->
        &nbsp;&nbsp;&nbsp;
        <!-- 直接在子组件操作父组件数据 -->
        <button @click="operateOnParentComponentData($parent)">直接在子组件操作父组件数据</button>
        <hr>
        <!-- 引入相对app组件而言的孙组件 -->
        <Grandson></Grandson>
    </div>
</template>

<script setup lang="ts" name="Son">
import Grandson from "./Grandson.vue"
import { defineProps, defineEmits, defineExpose } from "vue";

let number = ref(1)

// 声明接收父组件数据
defineProps(['receivedData', 'giveData', 'sonGiveDataMeathod'])
// 声明子组件中存在的事件,父组件通过@事件名称来触发事件
const emit = defineEmits(['getToken'])

// 修改父组件的sum的值
function operateOnParentComponentData(parent){
    console.log(parent);
    parent.sum ++
}

// 将数据抛出给外部,这样其他组件才能操作此数据
defineExpose({ number })
</script>

<style scope>
h5 {
    display: inline;
}
</style>
