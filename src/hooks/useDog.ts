import { ref } from "vue"

export default function (){
   
   
    let dogImage = ref(['https://images.dog.ceo/breeds/labradoodle/lola.jpg'])

    // 修改fetchDogImage函数
    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await response.json()
            dogImage.value=[...dogImage.value, data.message]
        } catch (error) {
            console.error('Error fetching dog image:', error)
        }
    }


    // 抛出给其他文件使用
    return { dogImage, fetchDogImage }
}