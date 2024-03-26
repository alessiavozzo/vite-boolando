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
            <h5 @click="$emit('showProduct', card)">{{ card.name }}</h5>
            <span class="new-price" v-if="card.discount !== null">{{ (card.price - (card.price *
                Math.abs(parseInt(card.discount))) / 100).toFixed(2) }}&euro;</span>
            <span class="new-price" v-else>{{ card.price }}&euro;</span>
            <span v-if="card.discount !== null" class="old-price">{{ card.price }}&euro;</span>
        </div>

        <div class="heart">&hearts;</div>

    </div>
</template>

<style></style>