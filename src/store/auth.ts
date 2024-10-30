import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "../types";
import { auth } from "../api/auth-api";
import { useRouter } from "vue-router";

const useAuth = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const { push } = useRouter();

  const authenticate = async () => {
    await auth()
      .then((res) => {
        console.log(res);

        user.value = res
      })
      .catch(() => {
        push({ name: "login" })
      })
  }

  return {
    user,
    authenticate,
  };
});

export default useAuth;