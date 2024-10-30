<script setup lang="ts">
import { useQueryParams } from "../../composables/useQueryParams";

const { removeQueryParam } = useQueryParams();
</script>

<template>
  <div
    class="absolute flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
  >
    <div @click="removeQueryParam('edit')" class="w-[40rem] h-full p-3 side">
      <div class="w-full h-full rounded-lg bg-white"></div>
    </div>
  </div>
</template>
