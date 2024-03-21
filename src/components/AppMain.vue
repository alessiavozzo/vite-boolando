<script>
export default {
    name: "AppMain",

    data() {
        return {
            cards: [
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 14.99,
                    newPrice: 29.99
                },
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: false,
                    oldPrice: 14.99,
                    newPrice: 29.99
                },
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 14.99,
                    newPrice: 29.99
                },
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 14.99,
                    newPrice: 29.99
                },
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 14.99,
                    newPrice: 29.99
                },
                {
                    image: "/public/images/1.webp",
                    brand: "Levi's",
                    name: "RELAXED FIT TEE UNISEX",
                    discount: "-50%",
                    eco: true,
                    oldPrice: 14.99,
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
                <div class="card" v-for="card in cards">
                    <div class="item">
                        <img :src="card.image" alt="card.name">
                    </div>

                    <div class="overlay">
                        <img src="" alt="overlay">
                    </div>

                    <div class="info">
                        <div class="discount">{{ card.discount }}</div>
                        <div class="eco-friendly" v-if="card.eco">Sostenibilità</div>
                    </div>

                    <div class="text">
                        <span class="brand">Levi's</span>
                        <h5>RELAXED FIT TEE UNISEX</h5>
                        <span class="new-price">{{ card.newPrice }}&euro;</span>
                        <span class="old-price">{{ card.oldPrice }}&euro;</span>
                    </div>

                    <div class="heart">&hearts;</div>

                </div>

            </div>




        </div>

    </main>
</template>

<style></style>