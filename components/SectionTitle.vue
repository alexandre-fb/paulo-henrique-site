<template>
    <h2 class="relative w-min text-text-color font-title text-4xl"
    >
        <span>{{ title }}</span>
        <span v-if="showLine" class="block absolute w-14 h-[2px] bg-primary -right-20 bottom-4"></span>
    </h2>
</template>
  
<script>
export default {
    props: {
        title: String,
        showLine: Boolean
    },
    data() {
        return {
        }

    }
};
</script>
  
<style scoped>
</style>