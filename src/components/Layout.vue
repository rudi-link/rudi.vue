<script setup lang="ts">
// @ts-ignore
import Nav from "../components/Nav.vue";
import { useQueryParams } from "../composables/useQueryParams";
import useAuth from "../store/auth";
// @ts-ignore
import Profile from "./modals/Profile.vue";
import { RouterLink } from "vue-router";

const { getQueryParam } = useQueryParams();

const edit = getQueryParam("edit");

const authStore = useAuth();
authStore.authenticate();

const { withProfile = false } = defineProps<{ withProfile?: boolean }>();
</script>

<template>
  <div v-if="authStore.user" class="flex flex-col w-full h-full">
    <header
      class="flex flex-col gap-7 w-full h-max py-1 px-4 bg-neutral-100 border-b shadow-lg"
    >
      <div class="flex justify-between w-full h-max">
        <div class="flex items-center gap-4">
          <div class="w-9 h-9">
            <img src="/logo.png" class="w-full h-full" />
          </div>
          <div class="flex flex-col">
            <div class="font-bold text-indigo-600">Rudi</div>
            <div class="text-xs text-neutral-500 font-mono">version 1.0.0</div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="md:hidden flex items-center gap-3 sm:p-2 rounded-full sm:bg-white">
            <div class="flex items-center gap-3 bg-white p-2 rounded-2xl">
              <img src="/mr.js.png" class="w-5 h-5 rounded-full" />
              <div class="flex flex-col">
                <div class="font-bold text-xs">Developer</div>
              </div>
            </div>
          </div>
          <RouterLink to="/linkup" class="hidden md:inline w-8 h-8 p-2 rounded-2xl bg-white shadow-sm">
            <img src="/linkup.svg" class="w-4 h-4" />
          </RouterLink>
          <RouterLink to="/analytic" class="hidden md:inline w-8 h-8 p-2 rounded-2xl bg-white shadow-sm">
            <img src="/analytic.svg" class="w-4 h-4" />
          </RouterLink>
          <button title="deconnexion ?" class="btn border-none outline-none hover:bg-transparent bg-transparent p-0 ml-2" onclick="my_modal_1.showModal()">
            <img src="/logout.svg" class="w-[1.3rem] h-[1.3rem]" />
          </button>
          <dialog id="my_modal_1" class="modal">
            <div class="modal-box text-white">
              <h3 class="text-lg font-bold">Logout 🥺</h3>
              <p class="py-4">Are you sure to logout yet?</p>
              <div class="modal-action">
                <RouterLink to="/login" onclick="localStorage.removeItem('token')">
                  <button class="btn ">deconnect</button>
                </RouterLink>
                <form method="dialog">
                  <button class="btn ">cancel</button>
                </form>
              </div>
            </div>
          </dialog>
          <RouterLink to="" class="md:hidden inline p-1 rounded-full bg-white">
            <img
              :src="authStore?.user?.avatar"
              alt=""
              class="w-8 h-8 rounded-full"
            />
          </RouterLink>
        </div>
      </div>
    </header>
    <Profile v-if="Boolean(edit)" />
    <div class="flex sm:flex-row flex-col-reverse w-full h-full bg-white">
      <Nav />
      <main
        class="flex justify-between gap-6 w-full h-full p-5 overflow-y-auto"
      >
        <slot name="main"></slot>
        <slot name="side" v-if="!withProfile"></slot>

        <div
          v-if="withProfile"
          class="hidden md:flex flex-col gap-2 max-w-[17rem] h-max"
        >

          <div className="w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden bg-indigo-100">
              <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1510028735437-476418ee352d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" />
            </div>
            <div className="mx-auto w-32 h-32 relative z-10 -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" :src="authStore?.user?.avatar" alt="Woman looking front" />
            </div>
            <div className="text-center mt-4">
              <h2 className="font-semibold text-lg">{{authStore?.user?.name}}</h2>
            </div>
            <!-- <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              <li className="flex flex-col items-center justify-around">
                <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li className="flex flex-col items-center justify-between">
                <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li className="flex flex-col items-center justify-around">
                <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul> -->
          </div>

          <!-- </div> -->
        </div>
      </main>
    </div>
  </div>
</template>
