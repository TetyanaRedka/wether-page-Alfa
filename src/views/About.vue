<template>
  <div class="about" :class="actualClass">
    <!-- <PreloaderVue v-if="loading" />
    <WeatherPageVue v-else /> -->
    <WeatherPageVue />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherPageVue from "@/components/WeatherPage.vue";
import PreloaderVue from "../components/Preloader.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      actualClass: "ligth-theme-cont",
      loading: true,
    };
  },
  components: {
    WeatherPageVue,
    PreloaderVue,
  },

  mounted: function () {
    const date = new Date();

    if (date.getHours() < 9 || date.getHours() > 19) {
      this.actualClass = "dark-theme-cont";
    }
  },

  watch: {
    weatherData(oldData, newData) {
      if (typeof newData === "object") {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.about {
  width: 100vw;
  height: 100vh;

  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.ligth-theme-cont {
  background: linear-gradient(180deg, #72beff 0%, #b6e3ff 100%);
}
.dark-theme-cont {
  background: linear-gradient(329.82deg, #071d65 18.38%, #05174f 81.62%);
}
</style>
