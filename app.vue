<template>
  <div>
    <Header />
    <Banner />
    <Sobre />
  </div>
</template>

<script>
import Banner from './components/sections/Banner.vue';
import Sobre from './components/sections/Sobre.vue';

export default {
  components: {
    Banner,
    Sobre
  },
}
</script>

<style scoped>

</style>