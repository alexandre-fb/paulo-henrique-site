<template>
    <div 
      class="fixed z-50 w-screen h-screen top-0  p-4" 
      :class="modal_bg_color"
      v-if="modalIsOpen" 
      @click.self="closeModal"
      ref="modalBg"
      id="modalBg"
    >
      <div 
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%] max-w-[1024px] h-[90%] max-h-[800px] p-4 flex justify-center items-center"
          :class="content_bg_color"
          ref="modalContent"
      >
          <button  
              class="w-8 h-8 absolute right-2 top-2" 
              ref="buttonCloseModal"
              @click="closeModal"
          >
              <IconClose :color="icon_close_icon" />
          </button>
          <div class="content_modal-wrapper max-h-[800px]">
              <slot></slot>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import IconClose from '../components/icons/IconClose.vue';
  
  export default {
      components: {
          IconClose
      },
      props: {
        modal_bg_color: {
            type: String,
            default: 'bg-secondary-95'
        },
        content_bg_color: {
            type: String,
            default: 'bg-primary-75'
        },
        icon_close_icon: {
            type: String,
            default: '#fff'
        }
      },
      data() {
          return {
              modalIsOpen: true
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
  
  </style>
  