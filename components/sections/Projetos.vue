<template>
  <div
    class="relative flex justify-center items-center w-full min-h-screen px-3 py-20 h-full bg-projetos-bg bg-no-repeat bg-cover bg-fixed font-text bg-secondary">
    <div class="gap-7 w-full max-w-7xl">

      <div class="mb-16">
        <SectionTitle title="Projetos" showLine />
      </div>

      <Carousel 
        v-bind="settings" 
        :breakpoints="breakpoints" 
        :autoplay="false" 
        @slide-end="updateActiveSlide"
      >
        <Slide v-for="(slide, index) in slidesData" :key="slide.name + index">
          <div  @click="openModal(index)" class="projetos__slide-wrapper relative flex flex-col items-center w-80 h-80 py-12 mb-5 cursor-pointer">

            <img src="~/assets/images/projetos/projeto-1/projeto_1.webp" alt="Projeto 1"
              class="relative z-10 w-full h-[100%] object-cover">

            <button class="button--saiba-mais absolute text-xs text-text-color font-text bottom-3 transition-opacity ">Veja mais</button>
            <!-- Retangulo com borda no fundo -->
            <div class="background-line"></div>
          </div>
        </Slide>

        <template #addons>
          <div class="navigation__wrapper">
            <Navigation />
          </div>

          <div class="mt-16">
            <Pagination />
          </div>
        </template>
      </Carousel>
    </div>
  </div>

  <ModalProjetos :modal_is_open="modalIsOpen" @update:modal_is_open="updateModalIsOpen" />
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import SectionTitle from '../SectionTitle.vue';
import IconDownload from '../icons/IconDownload.vue';
import ModalProjetos from '../ModalProjetos.vue';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionTitle,
    IconDownload,
    ModalProjetos
  },
  data() {
    return {
      modalIsOpen: false,
      activeSlideIndex: 0,
      slidesData: [
        {
          name: 'Projeto 1',
        },
        {
          name: 'Projeto 2',
        },
        {
          name: 'Projeto 3',
        }
      ],
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
  methods: {
    openModal(indexClickedSlide) {
      console.log('open')
      console.log('index', indexClickedSlide)
      if(indexClickedSlide === this.activeSlideIndex)
      this.modalIsOpen = true
    },
    updateModalIsOpen(value) {
      this.modalIsOpen = value;
    },
    updateActiveSlide(data) {
      console.log('slide-start', data)
      this.activeSlideIndex = data.currentSlideIndex
    },
  },
};
</script>
  
<style scoped>

/*HOVER SLIDE ATIVO*/
.carousel__slide--active .projetos__slide-wrapper img:hover {
  transform: scale(1.12 );
}

/*BOTAO SAIBA MAIS*/
.projetos__slide-wrapper .button--saiba-mais {
  opacity: 0;
}

.carousel__slide--active .projetos__slide-wrapper:hover .button--saiba-mais {
  opacity: 1
}

@media screen and (max-width: 1024px) {
  .carousel__slide--active .projetos__slide-wrapper .button--saiba-mais {
    opacity: 1;
  }
}


/*SLIDER*/
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
