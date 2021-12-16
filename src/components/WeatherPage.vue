<template>
  <div>
    <div class="weather-container" :class="actualClass">
      <div class="head-container">
        <div class="head-data">
          <h1 class="title">{{ weatherData.name }}</h1>
          <span class="text">{{ actualDate }}</span>
          <p class="text-main">{{ temperature }} <span>&deg;C</span></p>
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
        <div>
          <img :src="iconURL" class="weather-icon" />
        </div>
      </div>
      <WeatherDetailVue />
    </div>

    <router-link to="/" class="come-back" :class="actuaTextColor"
      >ПОВЕРНУТИСЬ НАЗАД</router-link
    >
  </div>
</template>

<script>
import moment from "moment";
import WeatherDetailVue from "./WeatherDetail.vue";

export default {
  data() {
    return {
      actualClass: "ligth-theme-cont",
      actuaTextColor: "ligth-theme",
      weatherData: {},
    };
  },
  components: {
    WeatherDetailVue,
  },

  computed: {
    actualDate() {
      return moment().locale("uk").format("LL");
    },

    weatherData() {
      return this.$store.state.weatherData;
    },

    temperature() {
      if (this.$store.state.weatherData.main) {
        return this.$store.state.weatherData.main.temp.toFixed(0);
      }
    },

    iconURL() {
      return `http://openweathermap.org/img/wn/${this.$store.state.weatherData.weather[0].icon}@2x.png`;
    },
  },

  mounted: function () {
    const date = new Date();

    if (date.getHours() < 9 || date.getHours() > 19) {
      this.actualClass = "dark-theme-cont";
      this.actuaTextColor = "dark-theme";
    }
  },
};
</script>

<style scoped>
.weather-container {
  margin: 0 auto 68px;
  filter: drop-shadow(8px 12px 72px rgba(20, 50, 96, 0.08))
    drop-shadow(12px 22px 130px rgba(20, 50, 96, 0.16));

  border: 1px solid rgba(255, 255, 255, 0.14);

  border-radius: 20px;

  width: 610px;
  height: 560px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #ffffff;
  line-height: 1.36;
}

.ligth-theme-cont {
  background: linear-gradient(180deg, #74c5ff 0%, #a4deff 100%);
}
.dark-theme-cont {
  background: linear-gradient(170.67deg, #051f71 7.05%, #071c5e 92.95%);
}

.head-container {
  display: flex;
  justify-content: space-between;
}

.head-data {
  padding: 30px;
  text-align: start;
}
.title {
  font-size: 36px;
  font-weight: bold;
}
.text-main {
  font-size: 60px;
  font-weight: normal;
}

.weather-icon {
  width: 290px;
  height: 290px;
}
.text {
  font-size: 14px;
  font-weight: normal;
}
.come-back {
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
}

.ligth-theme {
  color: #000aff;
}

.dark-theme {
  color: #ffffff;
}
</style>
