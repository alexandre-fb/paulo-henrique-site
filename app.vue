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
    
    <section id="projetos">
      <Projetos />
    </section>
  </main>

</template>

<script>
import Banner from './components/sections/Banner.vue';
import Sobre from './components/sections/Sobre.vue';
import Projetos from './components/sections/Projetos.vue';

export default {
  components: {
    Banner,
    Sobre,
    Projetos
  },
}
</script>

<style scoped>

</style>