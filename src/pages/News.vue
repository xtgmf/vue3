<template>
    <div>
        <div>新闻</div>
        <div class="news">
            <ul>
                <li v-for="item in NewsDetailData" :key="item.id">
                    <!-- 使用query传参 -->
                    <RouterLink :to="`/News/NewsDetail?id=${item.id}&title=${item.title}`">{{ item.title }}</RouterLink>
                    <!-- <RouterLink :to="{ name: 'xinwenxiangqing', query: { id: item.id, title: item.title } }">{{ `使用query传参${item.title}` }}</RouterLink>  -->

                    <!-- 使用params传参 -->
                    <!-- <RouterLink :to="`/News/NewsDetail/${item.id}/${item.title}`">{{ `使用params传参${item.title}` }}
                    <RouterLink/> -->
                </li>
            </ul>
            <!-- 展示子组件的内容 -->
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts" name="home" setup>

let NewsDetailData = reactive([
    { id: 1, title: '文章标题1' },
    { id: 2, title: '文章标题2' },
    { id: 3, title: '文章标题3' },
]);

</script>

<style>
.news {
    display: flex;
    width: 500px;
    height: 200px;
    padding: 10px;
    justify-content: space-between;
    border: 1px solid #000;
    color: #000;
}


.news li::marker {
    color: red;
}

.news li>a {
    text-decoration: none;
}
</style>