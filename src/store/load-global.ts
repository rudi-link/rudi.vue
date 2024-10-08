import { defineStore } from "pinia";
import { ref } from "vue";

const globalLoad = defineStore("globalLoad", () => {
    const isLoad = ref<boolean>()

    return {
        isLoad,
        toggle: () => {
            isLoad.value = !isLoad.value
        }
    }
})

export default globalLoad