<script>
import ProductCard from './ProductCard.vue';
import ProductModal from "./ProductModal.vue";
//import { cards } from "../assets/js/cards.js";
import { state } from "../state.js";

export default {
    name: "AppMain",
    components: {
        ProductCard,
        ProductModal
    },

    data() {
        return {
            hoverEffect: false,
            modalWindow: false,
            modalContent: null,
            //cards: cards
            state: state
        }
    },
    methods: {
        showProductInfo(card) {
            //console.log(card);
            this.modalWindow = true;
            this.modalContent = card;
        }
    },
    mounted() {
        state.getCards()
    }
}
</script>

<template>

    <!-- /#site_main -->
    <main id="site_main">
        <div class="container main">

            <div class="row">
                <ProductCard :card="card" :key="card.id" v-for="card in state.cards"
                    @mouseover="card.hoverEffect = true" @mouseleave="card.hoverEffect = false"
                    @show-product="showProductInfo" />
            </div>

            <!-- modal window -->
            <ProductModal v-if="modalWindow" :modalContent="modalContent" @close-modal-window="modalWindow = false" />

        </div>

    </main>
</template>

<style></style>