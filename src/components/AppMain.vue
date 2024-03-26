<script>
import ProductCard from './ProductCard.vue';
//import { cards } from "../assets/js/cards.js";
import { state } from "../state.js"

export default {
    name: "AppMain",
    components: {
        ProductCard
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


            <div class="modal-container" v-if="modalWindow">
                <div class="modal-content">
                    <div class="modal-top">
                        <button type="button" @click="modalWindow = false">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div class="modal-bottom">
                        <!-- left -->
                        <div class="modal-left">
                            <div class="prod-image">
                                <img :src="modalContent.image" alt="">
                            </div>
                            <div class="prod-image">
                                <img :src="modalContent.hoverImage" alt="">
                            </div>
                        </div>
                        <!-- right -->
                        <div class="modal-right">
                            <div class="prod-brand"><strong>Marca: </strong>{{ modalContent.brand }}</div>
                            <div class="prod-name"><strong>Prodotto: </strong>{{ modalContent.name }}</div>
                            <div class="prod-price">
                                <strong>Prezzo: </strong>
                                <span v-if="modalContent.discount !== null">{{ (modalContent.price - (modalContent.price
                    *
                    Math.abs(parseInt(modalContent.discount))) / 100).toFixed(2) }}&euro;</span>
                                <span v-else>{{ modalContent.price }}&euro;</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </main>
</template>

<style></style>