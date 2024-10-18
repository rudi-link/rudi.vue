<script setup lang="ts">
import { computed, toRef } from "vue";
import { TTagDt } from "../types";

import Chart from "primevue/chart";
import { ref } from "vue";

// const { _, cancel } = defineProps<{
//   _: TTagDt | undefined;
//   cancel: () => void;
// }>();

const {tag, cancel} = defineProps(["tag", "cancel"])

// console.log(tag.value);

</script>

<template>
  <div
    class="absolute flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
  >
    <div @click="cancel" class="w-max min-w-52 h-full p-3 side">
      <div class="w-full h-full rounded-lg bg-white">
        {{ JSON.stringify(tag) }}
      </div>
    </div>
  </div>
</template>
