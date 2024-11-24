<script setup lang="ts">
import { onMounted, ref } from "vue";
import { login } from "../api/auth-api";
import { useRouter } from "vue-router";
import globalLoad from "../store/load-global";
import { BeakerIcon } from '@heroicons/vue/24/solid'

const { push: nav } = useRouter()
const load = globalLoad()

const line = ref<boolean>(false)
const step = ref<1 | 2>(1)
const code = ref<('t' | 'b')[]>([])
const name = ref<string>()

const submit = async () => {
    load.toggle()
    if (code.value.length === 0 || !name.value) {
        return setTimeout(() => {
            load.toggle()
        }, 200);
    }

    try {
        const { token } = await login({ code: code.value, name: name.value })
        localStorage.setItem('token', token)

        code.value = []
        name.value = ''

        nav({ name: 'home' })
    } catch (error) {
        name.value = ''
        step.value = 1
        code.value = []
        console.log(error);
    }

    setTimeout(() => {
        load.toggle()
    }, 500);
}

onMounted(() => {
    const taps = document.querySelectorAll<HTMLDivElement>('.tap');
    taps.forEach((tap) => {
        tap.addEventListener('mousedown', () => {
            tap.style.backgroundColor = '#818cf8'
            setTimeout(() => {
                tap.style.backgroundColor = 'transparent'
            }, 200);
        })
    })
})

</script>

<template>
    <div v-if="step === 1" class="flex justify-center items-center w-full h-full p-2">
        <div class="relative flex w-[20rem] h-max rounded-xl bg-emerald-50 shadow">
            <div class="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-2xl w-16 h-16 rounded-full bg-emerald-50 border-2 border-slate-50 shadow">
                <BeakerIcon class="w-4 h-4"/>
            </div>
            <form @submit.prevent="step = 2" class="flex flex-col gap-3 justify-end w-full h-full pt-16 p-3">
                <input v-model="name" type="text" class="w-full h-max p-1 text-center text-lg bg-white rounded-md"
                    placeholder="Your name" required>
                <button class="w-full h-max p-2 rounded-lg text-center bg-indigo-600 text-white">next</button>
            </form>
        </div>
    </div>

    <div v-show="step === 2" class="flex flex-col justify-between w-full h-full">
        <div @click="line = !line" title="toggle line"
            class="absolute top-2 right-2 flex gap-2 items-center p-2 cursor-pointer rounded-lg border bg-neutral-100">
            <!-- <span class="text-indigo-800">show line</span> -->
            <div :class="{ 'justify-end bg-indigo-400': line, 'justify-start bg-white': !line }"
                class="flex items-center w-12 h-6 p-1 border-neutral-300 rounded-full overflow-hidden transition-all">
                <div :class="{ 'w-5 bg-indigo-400': !line, 'w-6 bg-white': line }"
                    class="h-full rounded-full bg-indigo-400 transition-all"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full h-full">

            <div @click="code.push('t')" class="w-full h-[50%] cursor-pointer transition-all tap"></div>
            <div v-if="line" class="w-full h-1 border-2"></div>
            <div @click="code.push('b')" class="w-full h-[50%] cursor-pointer transition-all tap"></div>

            <div class="w-full h-max py-3 px-10">
                <button @click="submit"
                    class="flex justify-center items-center font-bold font-mono text-white text-lg w-full h-max p-2 bg-gradient-to-r from-indigo-700 to-emerald-600 rounded-full shadow-xl hover:scale-x-75 transition-all">
                    Check <span class="ml-3">🚀</span>
                </button>
            </div>
        </div>
    </div>
</template>