<template>
  <div
    class="relative flex justify-center items-center w-full min-h-screen px-3 py-20 h-full bg-projetos-bg bg-no-repeat bg-cover bg-fixed font-text bg-secondary">
    <!-- class="relative flex justify-center items-center w-full min-h-screen px-3 py-20 h-full bg-[url('/assets/images/projetos-bg-desktop.webp')] bg-no-repeat bg-cover bg-fixed font-text bg-secondary border-box"> -->


    <!-- <picture class="absolute w-full h-[100%]">
      <source media="(max-width: 769px)" srcset="~/assets/images/projetos-bg-mobile.webp" />
      <img src="~/assets/images/projetos-bg-desktop.webp" alt="Textura de mandeira"
        class="w-full h-[100%] object-cover opacity-20" />
    </picture> -->
    <div class="gap-7 w-full max-w-7xl">

      <div class="mb-16">
        <SectionTitle title="Projetos" showLine />
      </div>

      <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="4000">
        <Slide v-for="slide in 10" :key="slide">
          <div class="projetos__slide-wrapper relative w-80 h-80 py-12 mb-5">
            <img src="~/assets/images/projetos/projeto-1/projeto_1.webp" alt="Projeto 1"
              class="relative z-10 w-full h-[100%] object-cover">
            <!-- Retangulo com borda no fundo -->
            <div class="background-line"></div>
          </div>
        </Slide>

        <template #addons>
          <div class="navigation__wrapper">
            <Navigation />
          </div>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import SectionTitle from '../SectionTitle.vue';
import IconDownload from '../icons/IconDownload.vue';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionTitle,
    IconDownload
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true, //infinit
        transition: 300
      },
      breakpoints: {
        550: {
          itemsToShow: 1.2,
        },
        750: {
          itemsToShow: 2,
        },
        960: {
          itemsToShow: 2.5,
        },
        1200: {
          itemsToShow: 3,
        },
      }
    }
  },
  methods: {},
};
</script>
  
<style scoped>

.carousel__slide {
  opacity: .8!important;
}

.carousel__slide--active {
  opacity: 1!important;
}
.carousel__slide img {
  opacity: .7;
}
.carousel__slide--active img {
  transition: 500ms;
  transform: scale(1.1);
  opacity: 1;
}

.carousel__slide--active .background-line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #506F7F;
  width: 70%;
  height: 320px;
}

.navigation__wrapper {
  display: none;
}

@media screen and (max-width: 750px) {
  .navigation__wrapper {
    display: initial;
  }
}

@media screen and (min-width: 1200px) {
  .navigation__wrapper {
    display: initial;
  }
}
</style>
