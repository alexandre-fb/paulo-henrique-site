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

    <section id="skills">
      <Skills />
    </section>

    <section id="contato">
      <Contato />
    </section>
  </main>

</template>

<script>
import Banner from './components/sections/Banner.vue';
import Sobre from './components/sections/Sobre.vue';
import Projetos from './components/sections/Projetos.vue';
import Skills from './components/sections/Skills.vue';
import Contato from './components/sections/Contato.vue';

export default {
  components: {
    Banner,
    Sobre,
    Projetos,
    Skills,
    Contato
  },
}
</script>

<style scoped>

</style>