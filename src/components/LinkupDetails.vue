<script setup lang="ts">

const { id, cancel } = defineProps<{ id: string | null; cancel: () => void }>();
</script>

<template>
  <div
    v-if="id"
    class="absolute flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
  >
    <div @click="cancel" class="w-max min-w-52 h-full p-3 side">
      <div class="w-full h-full rounded-lg bg-white">
        
      </div>
    </div>
  </div>
</template>

<style scoped>

.side {
    animation: side 0.3s linear;
}

@keyframes side {
    from {
        transform: translateY(-100vh);
    }
    to{
        transform: translateX(0%);
    }
}

</style>
