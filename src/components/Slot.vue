<template>
    <div>
        <!-- 具名插槽 -->
        <h2>
            <slot name="title"></slot>
        </h2>
        <form @submit.prevent="login">
            <label for="username">用户名：</label>
            <input v-model="username" type="text" id="username" required autocomplete="username" />

            <label for="password">密码：</label>
            <input v-model="password" type="password" id="password" required autocomplete="current-password" />

            <button type="submit">登录</button>
            <div style="margin-top:20px" v-show="loginStatus">
                <div style="margin:0 auto;padding: 10px;">
                    <!-- 默认插槽 -->
                    <slot>当没有插值时,则默认显示:登录失败!</slot>
                    <!-- 作用域插槽--向插槽的使用者提供数据 -->
                    <slot :yonghu="user" name="userSlot"></slot>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        // 使用 ref 创建响应式数据
        const username = ref('');
        const password = ref('');
        const loginStatus = ref(false);

        const user = ref(
            {
                "id": 1,
                "name": "李白",
                "sex": "南",
                "age": 600
            }
        )

        function login() {
            // 在这里处理登录逻辑，可以调用后端API进行验证
            // 你可以使用Vuex来管理登录状态等信息
            console.log('登录中...');
            loginStatus.value = true
        }

        // setup 函数返回的对象将会被 merge 到组件实例中
        return {
            username,
            password,
            loginStatus,
            login,
            user
        };
    },
};
</script>
  
<style scoped>
/* 添加样式，确保样式只影响当前组件 */

div {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h2 {
    text-align: center;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    color: #555;
}

input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
  
  