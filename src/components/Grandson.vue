<template>
    <div>
        <h4>我是一个孙子组件，我接收app爷爷页面穿过来的数据：{{ grandpaSData }}</h4>
        <hr>
    </div>
</template>

<script setup lang="ts" name="Grandson">
// 接收爷爷页面app.vue传过来的数据
import { inject } from 'vue';
let grandpaSData = inject("appData",'未获得数据时现实的默认值')
</script>

<style></style>