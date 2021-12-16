import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Object.defineProperty(Vue.prototype, '$moment', { value: moment });

createApp(App).use(store).use(router).mount("#app");
