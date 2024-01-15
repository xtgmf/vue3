import { reactive, watch } from 'vue';

// 创建一个可持续的token状态对象
const useTokenState = reactive({
    token: localStorage.getItem('token') || '',
});

// 监听token状态的变化，并在变化时更新本地存储
watch(() => useTokenState.token, (newToken) => {
    localStorage.setItem('token', newToken);
});

export default useTokenState;
