<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLink } from '../api/link';


const _ = ref()

onMounted(async () => {
    const res = await getLink()
    _.value = res
})

</script>

<template>
    <div class="w-full h-max border">
        {{JSON.stringify(_)}}
    </div>
</template>