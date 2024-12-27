import { ref } from "vue";
import { toast } from 'vue3-toastify';

export default function useCopy() {
    const copied = ref<boolean>(false);
    const copyError = ref<any>(null);

    const copy = async (text: string)  => {
        try {
            await navigator.clipboard.writeText(text)
            .then(() => {
                toast("copied !", {
                    autoClose: 500,
                });
            });
            copied.value = true;
            copyError.value = null;
        } catch (error) {
            copied.value = false;
            copyError.value = error;
        }
    };

    return {
        copied,
        copyError,
        copy
    }
}