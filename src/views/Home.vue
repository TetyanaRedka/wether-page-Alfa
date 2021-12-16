<template>
  <div class="home">
    <SearchPageVue />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchPageVue from "@/components/SearchPage.vue";

export default {
  name: "Home",
  components: {
    SearchPageVue,
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;

  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
</style>
