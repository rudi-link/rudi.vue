import { Ref } from "vue";
import { ref, watch } from "vue";

export default function useLocalStorage<T = any>(
  key: string,
  defaultValue: T | null | any = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : null
): Ref<T> {

  const storedvalue = localStorage.getItem(key);
  const value = ref(storedvalue ? JSON.parse(storedvalue) : defaultValue);

  watch(
    value,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    },
    { deep: true }
  );

  return value;
}
