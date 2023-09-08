<template>
  <div
    class="relative flex justify-center w-full h-screen px-3 bg font-text bg-primary"
  >
    <picture class="absolute w-full h-[100%]">
      <source
        media="(max-width: 769px)"
        srcset="~/assets/images/banner-bg-mobile.webp"
      />
      <img
        src="~/assets/images/banner-bg-desktop.webp"
        alt="Textura de mandeira"
        class="w-full h-[100%] object-cover mix-blend-multiply"
      />
    </picture>
    <div class="relative flex items-center w-full max-w-7xl">
      <div
        class="relative -top-[5%] left-1 md:left-[7%] px-3 flex flex-col items-start lg:items-end"
      >
        <h2
          class="text-text-color text-5xl lg:text-6xl font-title font-light mb-5"
        >
          Paulo Henrique
        </h2>
        <h3 class="text-text-color text-3xl lg:text-3xl font-text font-light mb-4">
          Portfólio de Projetos
        </h3>
        <span class="absolute block h-[2px] w-[30%] bg-primary -bottom-1"></span>
      </div>
    </div>
  </div>
</template>