import { ref, watch } from "vue";

export default function useLocalStorage(key: string, defaultValue = null) {
    const storedvalue = localStorage.getItem(key);
    const value = ref(storedvalue ? JSON.parse(storedvalue) : defaultValue);

    watch(value, (newValue) => {
        if(newValue === null || newValue === undefined){
            localStorage.removeItem(key);
        }else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    }, {deep: true})

    return value
}