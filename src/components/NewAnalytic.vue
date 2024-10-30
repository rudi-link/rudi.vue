<script setup lang="ts">
import { computed } from "vue";
import { useQueryParams } from "../composables/useQueryParams";
import globalLoad from "../store/load-global";
import { createAnalytic } from "../api/analytic";

const { toggle } = globalLoad();

const { getQueryParam, removeQueryParam } = useQueryParams();
const new_ = computed(() => getQueryParam("new") as "link" | "package" | null);

const submit = async (e: Event) => {
  e.preventDefault();
  toggle();

  const form = new FormData(e.currentTarget as HTMLFormElement);
  const name = form.get("name")?.toString().trim() || "";

  await createAnalytic(name)
    .catch(() => alert("something wrong !"))
    .finally(() => {
      toggle();
      (e.target as HTMLFormElement).reset();
      removeQueryParam("new");
    });
};
</script>

<template>
  <div class="w-full mt-3">
    <form
      @submit="submit"
      v-if="new_ === 'link'"
      class="flex flex-col gap-5 w-full"
    >
      <div class="flex items-center gap-2 w-full">
        <input
          name="name"
          type="text"
          class="bg-white p-2 rounded-lg text-neutral-800 w-[60%]"
          placeholder="Project name"
          required
        />
      </div>
      <div class="flex gap-3 mt-2">
        <button
          type="submit"
          class="flex-wrap py-2 px-5 border rounded-full font-bold text-sm bg-white text-indigo-700 hover:bg-transparent hover:text-white hover:border border-white transition-all"
        >
          create
        </button>
        <button
          type="button"
          @click="removeQueryParam('new')"
          class="w-max py-2 px-5 rounded-full font-bold text-sm border border-white"
        >
          cancel
        </button>
      </div>
    </form>
  </div>
</template>
