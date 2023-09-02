<template>
  <header>
    <Header />
  </header>

  <main>
    <section id="inicio">
      <Banner />
    </section>

    <section id="sobre">
      <Sobre />
    </section>
  </main>

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