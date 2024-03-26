<script>
export default {
    name: "ProductModal",
    props: {
        modalContent: Object
    },
    emits: ["closeModalWindow"]
}
</script>

<template>
    <!-- modal window -->
    <div class="modal">
        <div class="modal-content">
            <div class="modal-top">
                <button type="button" @click="$emit('closeModalWindow')">
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
                    * Math.abs(parseInt(modalContent.discount))) / 100).toFixed(2) }}&euro;</span>
                        <span v-else>{{ modalContent.price }}&euro;</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style></style>