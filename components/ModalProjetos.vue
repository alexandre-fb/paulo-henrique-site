<template>
    <Modal>
        <div class="modal__detalhes-projetos">
            <Carousel v-bind="settings">
                <Slide v-for="imageName in imagesNames" :key="imageName">
                    <div class="w-full h-[100%] max-h-[700px]">
    
                        <img :src="`/images/projetos/projeto-1/detalhes/${imageName}.webp`" alt="Projeto 1" class="relative z-10 w-full h-[100%] object-contain">
                        
                        <h1>{{ imageName }}</h1>
                    </div>
                </Slide>
    
                <template #addons>
                    <div class="navigation__wrapper">
                        <Navigation />
                    </div>
    
                    <div class="0">
                        <Pagination />
                    </div>
                </template>
            </Carousel>
        </div>
    </Modal>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Modal from './Modal.vue';

export default {
    components: {
        Modal,
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            imagesNames: ['p1-detalhe-1', 'p1-detalhe-2', 'p1-detalhe-3'],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                wrapAround: true, //infinit
                transition: 300
            },
        }
    },
    methods: {
        closeModal(event) {
            this.modalIsOpen = false;
        }
    }
}
</script>
  
<style>
    .carousel {
        margin-top: 15px;
        max-height: 730px;
    }

    .carousel__prev, .carousel__prev, .carousel__next  {
        bottom: -22px;
        top: initial;
    }
</style>
  