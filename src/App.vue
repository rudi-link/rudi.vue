<script setup lang="js">
import LoadGlobal from './components/LoadGlobal.vue';
import globalLoad from './store/load-global';
import 'vue3-toastify/dist/index.css';

const load = globalLoad()
</script>

<template>
  <div class="w-screen h-screen bg-slate-50 text-black overflow-hidden">
    <LoadGlobal v-if="load.isLoad"/>
    <RouterView/>
  </div>
</template>