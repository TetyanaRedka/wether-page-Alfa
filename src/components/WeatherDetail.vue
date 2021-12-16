<template>
  <div class="text weather-data">
    <p class="detale-box">
      <svg>
        <use href="../assets/place_24px_rounded.svg#place_24px"></use>
      </svg>

      <span>Координати </span>
      <span class="data"
        >Ш: {{ weatherData.coord.lon }} Д: {{ weatherData.coord.lat }}</span
      >
    </p>
    <p class="detale-box">
      <svg>
        <use href="../assets/drop_24px_rounded.svg#drop_24px"></use>
      </svg>
      <span>Відносна вологість </span>
      <span class="data">{{ weatherData.main.humidity }} % </span>
    </p>
    <p class="detale-box">
      <svg>
        <use
          href="../assets/text_rotate_vertical_24px_rounded.svg#text_rotate_vertical_24px"
        ></use>
      </svg>

      <span>Атмосферний тиск </span>
      <span class="data"> {{ weatherData.main.pressure }} гПа</span>
    </p>
    <p class="detale-box">
      <svg>
        <use
          href="../assets/brightness_5_24px_rounded.svg#brightness_5_24px"
        ></use>
      </svg>
      <span>Час сходу сонця </span>
      <span class="data">{{ normalSunrise }} </span>
    </p>
    <p class="detale-box">
      <svg>
        <use
          href="../assets/brightness_4_24px_rounded.svg#brightness_4_24px"
        ></use>
      </svg>

      <span>Час заходу сонця </span>
      <span class="data">{{ normalSunset }} </span>
    </p>
  </div>
</template>

<script>
import moment from "moment";

export default {

  computed: {
    weatherData() {
      return this.$store.state.weatherData;
    },
    normalSunrise() {
      return moment(this.$store.state.weatherData.sys.sunrise * 1000).format(
        "LT"
      );
    },
    normalSunset() {
      return moment(this.$store.state.weatherData.sys.sunset * 1000).format(
        "LT"
      );
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
  font-weight: normal;
}
.detale-box {
  display: flex;
}

.detale-box:not(:first-child) {
  margin-top: 20px;
}

.weather-data {
  margin-top: auto;
  padding: 32px;
  background-color: rgba(18, 69, 146, 0.14);
  border-radius: 15px;
}

.data {
  display: inline-block;
  margin-left: auto;
  vertical-align: middle;
}

svg {
  margin-right: 17px;
  fill: #ffffff;
  width: 24px;
  height: 24px;
}
</style>
