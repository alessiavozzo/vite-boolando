<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import ProductModal from "./components/ProductModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProductModal
  },
  data() {
    return {
      modalWindow: false,
      modalContent: null
    }
  },
  methods: {
    showProductInfo(card) {
      this.modalWindow = true;
      this.modalContent = card;
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain :showProductInfo="showProductInfo" />
  <AppFooter />
  <ProductModal v-if="modalWindow" :modalContent="modalContent" @close-modal-window="modalWindow = false" />

</template>

<style></style>
