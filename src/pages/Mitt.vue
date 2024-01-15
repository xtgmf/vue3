<template>
    <div>Mitt完成事件总线.实现任一组件通信</div>
</template>


<!-- 
      mitt事件总线,任一组件通信
      1.首先安装:npm i mitt
      2.在main文件中导入
      3.组件销毁时必须清空或关闭订阅消息
     -->
<script lang="ts" name="Mitt" setup>
//调用全局属性mitt方法
const { $emitter } = getCurrentInstance().appContext.config.globalProperties;

setInterval(() => {
    $emitter.emit('aaa')
}, 1000)
</script>

<style></style>