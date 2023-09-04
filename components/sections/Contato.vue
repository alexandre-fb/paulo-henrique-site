<template>
  <div class="bg-secondary">
    <div
      class="flex justify-center items-center w-full min-h-screen px-3 py-20 h-full bg-contato-bg bg-cover font-text border-box">
  
      <div class="max-w-7xl">
  
        <!-- NOME -->
        <div class="flex flex-col items-center">
          <h2 class="text-text-color text-5xl font-title font-light mb-2">Paulo Henrique</h2>
          <h3 class="text-text-color text-2xl font-text font-light">Móveis e Arquitetura</h3>
        </div>
  
        <div class="w-24 h-[2px] bg-primary mx-auto my-7"></div>
  
        <!-- CONTATOS -->
        <div>
          <div class="flex justify-center mb-4">
            <a href="" class="block w-6 transition hover:scale-110 cursor-pointer mx-2">
              <icon-linkedin color="#fff" />
            </a>
            <a href="" class="block w-6 transition hover:scale-110 cursor-pointer mx-2">
              <icon-instagram color="#fff" />
            </a>
          </div>
          <div class="text-center mb-4">
            <a class="text-text-color font-text font-light">paulinho@gmail.com</a>
          </div>
          <div class="text-center">
            <a class="flex justify-center items-center text-text-color font-text font-light">
              <i class="block w-5 mr-2">
                <IconWhatsapp color="#fff" />
              </i> 
              <span>51 9 9009-1871</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import SectionTitle from '../SectionTitle.vue';
import IconLinkedin from '../icons/IconLinkedin.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconWhatsapp from '../icons/IconWhatsapp.vue';

export default {
  components: {
    SectionTitle,
    IconLinkedin,
    IconInstagram,
    IconWhatsapp
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
  
<style scoped>
.sobre__grid {
  display: grid;
  gap: 80px;
  grid-template-areas:
    "title"
    "image"
    "text";
}


@media screen and (min-width: 769px) {
  .sobre__grid {
    gap: 30px;
    grid-template-areas:
      "image title"
      "image text";
  }
}

.sobre__title {
  grid-area: title;
}

.sobre__image {
  grid-area: image;
}

.sobre__text {
  grid-area: text;
}
</style>