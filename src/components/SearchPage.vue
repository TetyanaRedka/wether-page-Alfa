<template>
  <div>
    <h1>Привіт!</h1>
    <p>Вкажи місто щоб отримати дані про погоду</p>
    <div class="select-block">
      <input v-model="searchData" @input="searchSity" class="choise" />
      <select class="list" v-model="searchData" v-if="searchList.length">
        <option v-for="sity in searchList" :key="sity" :value="sity">
          {{ sity }}
        </option>
      </select>
      <span v-if="error.length" class="error">{{ error }} </span>
    </div>
    <button @click="searchDataOfSity" class="btn">
      <router-link to="/about" class="link"> Продовжити </router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: "",
      searchList: [],
      error: "",
    };
  },
  methods: {
    searchSity: async function () {
      const result = await fetch(
        `https://emoney-test.alfabank.kiev.ua/app/geo.php?key=${process.env.VUE_APP_NOT_SECRET_CODE}&term=${this.searchData}`
      );
      const res = await result.json();

      this.searchList = res.list;

      if (!this.searchList.length) {
        this.error = "Такого города нет";
      } else {
        this.error = "";
      }
    },

    searchDataOfSity: async function () {
      this.$store.dispatch("fetchDataOfSity", this.searchData);
    },
  },
};
</script>

<style scoped>
.country-select {
  width: 350px;
  height: 35px;
  border: 0;
  border-bottom: 3px solid gray;
  font-size: 16px;
}

h1 {
  color: #222222;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  color: #222222;
  font-size: 18px;
  margin-bottom: 100px;
}
.select-block {
  position: relative;
  width: 350px;
  margin: 0 auto;
}
.choise {
  width: 350px;
  height: 35px;
  border: 0;
  background-color: rgb(201, 195, 195);
  border-bottom: 3px solid gray;
  font-size: 24px;
}
.list {
  position: absolute;
  left: 0px;
  width: 350px;
  height: 35px;
  border: 0;
  border-bottom: 3px solid gray;
  font-size: 16px;
}
.error {
  color: red;
  position: absolute;
  left: 0px;
}
.btn {
  width: 264px;
  height: 60px;
  background: #000aff;
  border-radius: 4px;
  margin-top: 118px;
}
.link {
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
}
</style>
