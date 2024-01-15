<template>
    <div>
        <div>当前新闻的id为:{{ route.query.id ? route.query.id : route.params.id }}</div>
        <div>当前新闻的标题为:{{ route.query.title ? route.query.title : route.params.id }}</div>
    </div>
</template>

<script lang="ts" name="NewsDetail" setup>
import { useRoute } from "vue-router";

let route = useRoute()

/// 接收路由参数
console.log("@路由传参", route);
console.log("@query传参", route.query);
console.log("@params传参", route.params);


</script>

<style></style>