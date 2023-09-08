<template>
  <div
    class="flex justify-center w-full px-3 h-[60px] fixed top-0 z-50"
    :class="scrolled ? 'header__container' : 'header__container page-top'"
  >
    <nav class="relative flex items-center justify-center w-full max-w-7xl">
      <!-- LOGO -->
      <!-- <div class="absolute left-0 text-text-color">
        <h3 class="text-xl mb-0 font-title">Paulo Henrique</h3>
        <span class="text-xs font-text">Móveis e Arquitetura</span>
      </div> -->

      <!-- MENU DESKTOP -->
      <ul class="items-center gap-11 hidden lg:flex">
        <li class="relative" v-for="item in menuItems" :key="item.value">
          <a :href="item.link" class="menu-desktop__link text-text-color">{{
            item.label
          }}</a>
        </li>
      </ul>

      <!-- MENU MOBILE -->
      <div class="absolute right-0 lg:hidden">
        <!-- HAMBURGER -->
        <div
          class="menu__hamburger space-y-2 cursor-pointer"
          :class="menuMobileIsOpen ? 'hamburgerIsActive' : ''"
          @click="toogleMenu"
        >
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
        </div>

        <!-- LINKS MOBILE -->
        <div
          class="absolute z-50 bg-secondary w-60 right-0 top-10 p-5 text-right h-screen transition-all duration-200 ease-in-out"
          :class="menuMobileIsOpen ? 'linksMobileVisible' : 'linksMobileHidden'"
        >
          <ul class="flex-col items-center gap-11">
            <li class="relative" v-for="item in menuItems" :key="item.value">
              <a :href="item.link" class="menu-desktop__link text-text-color">{{
                item.label
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      menuItems: [
        {
          label: "Início",
          value: "inicio",
          link: "#inicio",
        },
        {
          label: "Sobre",
          value: "sobre",
          link: "#sobre",
        },
        {
          label: "Projetos",
          value: "projetos",
          link: "#projetos",
        },
        {
          label: "Skills",
          value: "skills",
          link: "#skills",
        },
        {
          label: "Contato",
          value: "contato",
          link: "#contato",
        },
      ],
      menuMobileIsOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    toogleMenu() {
      this.menuMobileIsOpen = !this.menuMobileIsOpen;
    },
    openMenuMobile() {
      this.menuMobileIsOpen = true;
    },
    closeMenuMobile() {
      this.menuMobileIsOpen = false;
    },
  },
};
</script>

<style scoped>
.header__container {
  background-color: rgba(33, 41, 50, .75);
  transition: background-color 200ms ease-in-out; 
}

.header__container.page-top {
  background-color: transparent;
}



/*HOVER LINKS*/ 
.menu-desktop__link {
  display: block;
  padding: 8px 0px;
  position: relative;
}

.menu-desktop__link:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  height: 0;
  width: 0;
}

.menu-desktop__link:hover:after {
  content: "";
  border-bottom: 1px solid white;
  border-left: none;
  border-top: none;
  height: 100%;
  width: 100%;
  transition: width 200ms ease-in-out;
}

/*MENU HAMBURGER*/
.menu__hamburger > div {
  transition: 200ms ease-in-out;
}

.menu__hamburger.hamburgerIsActive :first-child {
  transform: rotate(-225deg);
  position: relative;
  top: 10px;
}

.menu__hamburger.hamburgerIsActive :nth-child(2) {
  opacity: 0;
}

.menu__hamburger.hamburgerIsActive :last-child {
  transform: rotate(45deg);
  position: relative;
  top: -10px;
}

.linksMobileHidden {
  transform: translateX(200px);
  opacity: 0;
}
.linksMobileVisible {
  transform: translateX(16px);
  opacity: 1;
}
</style>