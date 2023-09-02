<template>
  <div
    class="flex justify-center items-center w-full min-h-screen px-3 py-20 h-full bg font-text bg-secondary border-box">

    <div class="flex justify-center items-center gap-7 w-full max-w-7xl">

      <div class="sobre__grid">

        <!-- TITULO -->
        <div class="sobre__title">
          <SectionTitle title="Sobre" />
        </div>

        <!-- IMAGEM -->
        <div class="sobre__image relative flex justify-center items-center w-full max-w-md h-[290px]">
          <picture class="relative z-10 w-full h-[100%]">
            <source media="(max-width: 769px)"
              srcset="
                      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OxHT_V4Y1tG7jhwGVOkBPGu4aRGDNQUaoA&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OxHT_V4Y1tG7jhwGVOkBPGu4aRGDNQUaoA&usqp=CAU"
              alt="Textura de mandeira" class="w-full h-[100%] object-cover" />
          </picture>

          <!-- Retanfulo com borda no fundo -->
          <div class="absolute  border border-primary w-full max-w-[60%] h-96"></div>
        </div>

        <!-- TEXTO -->
        <div class="sobre__text w-full max-w-lg">
          <p class="text-text-color font-text text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ornare
            dui, vel porttitor erat. In blandit, mauris ac dictum elementum, sapien
            libero semper ante, vel vehicula lacus odio ac dui. Aliquam lorem lacus,
            lobortis sed magna a, semper ultrices turpis. Suspendisse tristique
            consectetur lacinia. Vivamus ut facilisis diam, euismod tristique lacus.
            Vestibulum fermentum, massa id fermentum rhoncus, velit
          </p>
          <button
            class="border flex border-primary px-5 py-2 text-text-color transition-all bg-transparent hover:bg-primary-50">
            <span>Currículo</span>
            <span class="block w-3 ml-2">
              <IconDownload />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import SectionTitle from '../SectionTitle.vue';
import IconDownload from '../icons/IconDownload.vue';

export default {
  components: {
    SectionTitle,
    IconDownload
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