<template>
  <div
    class="relative flex justify-center items-center w-full min-h-screen px-3 py-20 h-full font-text bg-secondary">
    <div class="gap-7 w-full max-w-7xl">

      <div class="mb-16">
        <SectionTitle title="Skills" showLine />
      </div>

      <div class="flex flex-col relative justify-between lg:flex-row space-y-10">

        <!-- HARDSKILLS -->
        <div class="border border-primary p-5 lg:w-[51.5%] lg:p-20">
          <h3 class="text-text-color text-2xl mb-4">Hard Skills</h3>
          <ul class="space-y-4">
            <li v-for="(hardSkill, index) in hardSkills" :key="hardSkill + index" class="flex">
              <IconCheck width="12px" color="#fff" />
              <span class="ml-3 text-text-color font-text font-light text-lg transition hover:scale-[1.01] cursor-default">{{ hardSkill }}</span>
            </li>
          </ul>
        </div>
  
        <!-- SOFTSKILLS -->
        <div class="right-0 top-20 border border-primary p-5 lg:absolute lg:w-[51.5%] lg:p-20">
          <h3 class="text-text-color text-2xl mb-4">Soft Skills</h3>
          <ul class="space-y-4">
            <li v-for="(softSkill, index) in softSkills" :key="softSkill + index" class="flex">
              <IconCheck width="12px" color="#fff" />
              <span class="ml-3 text-text-color font-text font-light text-lg transition hover:scale-[1.01] cursor-default">{{ softSkill }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import IconCheck from '../icons/IconCheck.vue';
import SectionTitle from '../SectionTitle.vue';


export default {
  components: {
    SectionTitle,
    IconCheck
  },
  data() {
    return {
      hardSkills: [
        'Modelagem 3D no SketchUp',
        'Desenho Técnico',
        'Cálculos de Dimensionamento',
        'Conhecimento de Materiais e Construção',
        'Desenvolvimento de Mobiliário'
      ],
      softSkills: [
        'Trabalho em Equipe',
        'Criatividade e Inovação',
        'Resolução de Problemas',
        'Adaptabilidade',
        'Pensamento Analítico'
      ],
    }
  },
  methods: {

  },
};
</script>
  
<style scoped></style>
