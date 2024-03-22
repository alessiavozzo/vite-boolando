<script>
import ProductCard from './ProductCard.vue';
import { cards } from "../assets/js/cards.js";

export default {
    name: "AppMain",
    components: {
        ProductCard
    },
    props: {
        card: Object
    },

    data() {
        return {
            hoverEffect: false,
            cards: cards
        }
    }
}
</script>

<template>

    <!-- /#site_main -->
    <main id="site_main">
        <div class="container main">

            <div class="row">
                <ProductCard :card="card" :key="card.id" v-for="card in cards" @mouseover="card.hoverEffect = true"
                    @mouseleave="card.hoverEffect = false" />
            </div>

        </div>

    </main>
</template>

<style></style>