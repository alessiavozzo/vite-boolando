<script>
export default {
    name: "AppMain",

    data() {
        return {
            hoverEffect: false,
            cards: [
                {
                    image: "/public/images/1.webp",
                    hoverImage: "/public/images/1b.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 29.99,
                    newPrice: 14.99
                },
                {
                    image: "/public/images/2.webp",
                    hoverImage: "/public/images/2b.webp",
                    brand: "Guess",
                    name: "ROSES TEE",
                    discount: "-30%",
                    eco: false,
                    oldPrice: 29.99,
                    newPrice: 20.99
                },
                {
                    image: "/public/images/3.webp",
                    hoverImage: "/public/images/3b.webp",
                    brand: "Come Zucchero Filato",
                    name: "VOGLIA DI COLORI PASTELLO",
                    discount: "-30%",
                    eco: false,
                    oldPrice: 184.99,
                    newPrice: 129.99
                },
                {
                    image: "/public/images/4.webp",
                    hoverImage: "/public/images/4b.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 29.99,
                    newPrice: 14.99
                },
                {
                    image: "/public/images/5.webp",
                    hoverImage: "/public/images/5b.webp",
                    brand: "Maya Deluxe",
                    name: "STRIPE BODIES",
                    discount: null,
                    eco: false,
                    oldPrice: null,
                    newPrice: 99.99
                },
                {
                    image: "/public/images/6.webp",
                    hoverImage: "/public/images/6b.webp",
                    brand: "Esprit",
                    name: "MAGLIONE - BLACK",
                    discount: null,
                    eco: true,
                    oldPrice: null,
                    newPrice: 29.99
                }
            ]
        }
    }
}
</script>

<template>

    <!-- /#site_main -->
    <main id="site_main">
        <div class="container main">

            <div class="row">

                <!-- Cards -->
                <div class="card" v-for="card in cards" @mouseover="card.hoverEffect = true"
                    @mouseleave="card.hoverEffect = false">
                    <div class="item">
                        <img :src="card.hoverEffect === true ? card.hoverImage : card.image" :alt="card.name">
                    </div>

                    <div class="info">
                        <div class="discount" v-if="card.discount !== null">{{ card.discount }}</div>
                        <div class="eco-friendly" v-if="card.eco">Sostenibilità</div>
                    </div>

                    <div class="text">
                        <span class="brand">{{ card.brand }}</span>
                        <h5>{{ card.name }}</h5>
                        <span class="new-price">{{ card.newPrice }}&euro;</span>
                        <span v-if="card.oldPrice !== null" class="old-price">{{ card.oldPrice }}&euro;</span>
                    </div>

                    <div class="heart">&hearts;</div>

                </div>

            </div>




        </div>

    </main>
</template>

<style></style>