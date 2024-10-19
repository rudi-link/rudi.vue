<script setup lang="ts">
import { computed } from 'vue';
import { TLinkDt, TTagDt } from '../types';


const { link, idTag, cancel } = defineProps<{
  link: TLinkDt | undefined;
  idTag: number,
  cancel: () => void;
}>();

const tag  = computed<TTagDt | undefined>(() => link?.tag.find((t) => t.id === idTag))
</script>

<template>
  <div
    class="absolute flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
  >
    <div @click="cancel" class="w-[40rem] h-full p-3 side">
      <div class="w-full h-full rounded-lg bg-white">
        {{ JSON.stringify(tag) }}
      </div>
    </div>
  </div>
</template>
