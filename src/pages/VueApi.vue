<template>
    <div>
        <h2>Vue3中的常用api使用方法</h2>
        <h3>姓名:{{ person.name }}</h3>
        <h3>性别:{{ person.sex }}</h3>
        <h3>年龄:{{ person.age }}</h3>
        <!-- <h3>喜欢玩的游戏:{{ interestsAndHobbies.game }}</h3>
        <h3>喜欢玩的田径运动:{{ interestsAndHobbies.sports.trackAndField.name }}</h3>
        <h3>喜欢玩的球类运动:{{ interestsAndHobbies.sports.balls }}</h3> -->
        <h3>兴趣爱好:{{ interestsAndHobbies }}</h3>
        <h3>汽车信息:{{ car }}</h3>
        <!-- 操作改变 -->
        <button @click="changeShallowRefData">不可单独修改性别</button>
        <button @click="changeInterestsAndHobbies">不可单独修改球类运动</button>
        <button @click="changeCarBrand">修改汽车品牌</button>
        <button @click="changeCarOptionColor">不可修改汽车颜色</button>
        <button @click="changeCarOptionEngine">不可修改汽车型号</button>
        <!-- 输入修改数据 -->
        <div>年龄:<input v-model="person.name"></div>
        <div>年龄：<input v-model.number="person.age"></div>
        <div>球类运动：<input v-model="interestsAndHobbies.sports.balls"></div>
        <div>汽车品牌：<input v-model="car.brand"></div>
        <div>汽车颜色：<input v-model.number="car.option.color"></div>
        <div>汽车型号：<input v-model.number="car.option.engine"></div>
    </div>
</template>


<script lang="ts" name="VueApi" setup>

// 浅层次的响应式数据ref----->>>>>被定义的数据会只处理最外层的响应式数据,里面嵌套的响应式数据不会被处理
let person = shallowRef(
    {
        name: "步骘好呆槑",
        sex: "男",
        age: 20,
    }
)

function changeShallowRefData() {
  
    person.value.sex = "女"  // 此时修改性别是无效的,因为浅层次只处理person.value,而person.value.sex超过了处理范围,这样可以帮助提升效率

    alert('此时修改性别是无效的,因为浅层次响应式数据只处理person.value,而person.value.sex超过了处理范围!')

    // 下面这种方法是可以正常修改数据的
   /*
         person.value = {
            name: "步骘好呆槑",
            sex: "女",
            age: 20,
        }
   */
}


// 浅层次的响应式数据shallowReactive----->>>>>被定义的数据会只处理最外层的响应式数据,里面嵌套的响应式数据不会被处理,这样可以帮助提升效率
let interestsAndHobbies = shallowReactive({
    game: "王者荣耀", //顶层
    sports: {
        trackAndField: {
            name: "长跑",
            age: 20,
        }, 
        balls: "篮球" 
    } //顶层
})


let car = shallowReactive({
    brand: "奥迪",
    option:{
        color:'红色',
        engine:'S9'
    }
})

function changeInterestsAndHobbies() {
    interestsAndHobbies.sports.trackAndField.name = "竞走"
}

function changeCarBrand() {
  car.brand = '雅迪'
}

function changeCarOptionColor() {
    car.option.color = '绿色'
}

function changeCarOptionEngine() {
    car.option.engine = 'A6'
}

</script>

<style></style>