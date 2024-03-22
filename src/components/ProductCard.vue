<script>
export default {
    name: "ProductCard",
    props: {
        card: Object
    }
}
</script>

<template>
    <!-- Cards -->
    <div class="card">
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
</template>

<style></style>