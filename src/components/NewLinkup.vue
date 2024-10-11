<script setup lang="ts">
import { computed, ref } from "vue";
import { useQueryParams } from "../composables/useQueryParams";
import { SquaresPlusIcon } from "@heroicons/vue/24/solid";
import { createLink } from "../api/link";
import globalLoad from "../store/load-global";

const {toggle} = globalLoad()

const { getQueryParam, removeQueryParam } = useQueryParams();
const new_ = computed(() => getQueryParam("new") as "link" | "package" | null);

const website = ref<string>();
const tag = ref<{ name: string }[]>([{ name: "default" }]);
const addTag = (e: Event) => {
  const form = new FormData(e.currentTarget as HTMLFormElement);
  tag.value.unshift({ name: String(form.get("tag")).trim() });
  return (e.target as EventTarget & { reset: Function }).reset();
};

const submit = async () => {
    if(!website.value) return alert()
    
    toggle()
    removeQueryParam('new')
    switch (new_.value) {
        case 'link':
            {
                await createLink({website: website.value, tag: tag.value})
                .finally(toggle)
                .then((res) => {
                    console.log(res);
                })
            }
            break;
    
        default:
            break;
    }
}
</script>

<template>
  <div class="w-full mt-2">
    <div class="flex flex-col gap-4 w-full">
      <input
        v-model="website"
        type="text"
        class="bg-white p-1 rounded-lg text-neutral-800 w-[60%]"
        placeholder="Enter URL:    https://fabrich.com"
        required
      />
      {{website}}
      <form @submit.prevent="addTag" class="flex flex-col gap-2 w-full">
        <button
          type="submit"
          class="flex items-center w-max gap-2 hover:scale-x-105 transition-all"
        >
          <SquaresPlusIcon class="w-5 h-5" />add tag
        </button>
        <ul class="flex flex-wrap gap-x-3 gap-y-1 w-full">
          <li class="flex items-center gap-2">
            <span class="font-bold text-yellow-500">#</span>
            <input
              name="tag"
              type="text"
              class="bg-transparent text-white border border-transparent border-b-white outline-none w-28"
              required
            />
          </li>
          <li
            v-for="(t, index) in tag"
            :key="index"
            @click="tag = t.name === 'default' ? tag : tag.filter((t_) => t_ !== t)"
            :title="t.name === 'default' ? '' : 'click to remove'"
            class="flex items-center gap-1"
            :class="{'cursor-pointer transition-all hover:scale-x-90': t.name !== 'default'}"
          >
            <span class="font-bold text-yellow-500">#</span>{{ t.name }}
          </li>
        </ul>
      </form>
      <button @click="submit" class="mt-1 w-[60%] py-2 px-5 border rounded-full font-bold text-sm bg-white text-indigo-700 hover:bg-transparent hover:text-white hover:border border-white transition-all">create</button>
    </div>
  </div>
</template>
