<script>
export default {
    name: "ProductModal",
    props: {
        modalContent: Object
    },
    emits: ["closeModalWindow"],
    data() {
        return {
            changeImage: true
        }
    },
    methods: {
        changeActiveImage() {
            this.changeImage = !this.changeImage
        }
    }
}
</script>

<template>
    <!-- modal window -->
    <div class="modal" @click="$emit('closeModalWindow')">
        <div class=" modal-content" @click.stop="closeModalWindow">
            <!-- top: bar with closing button -->
            <div class="modal-top">
                <button type="button" class="close" @click="$emit('closeModalWindow')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- bottom -->
            <div class="modal-bottom">
                <!-- left -->
                <div class="modal-left">
                    <div class="prod-images">
                        <!-- thumbnail -->
                        <div class="thumbnail">
                            <img @click="changeImage = true" :src="modalContent.image" alt=""
                                :style="changeImage === true ? 'border: 1px solid orange' : 'border: none'">
                            <img @click="changeImage = false" :src="modalContent.hoverImage" alt=""
                                :style="changeImage === false ? 'border: 1px solid orange' : 'border: none'">
                        </div>
                        <!-- img+controls -->
                        <div class="image">
                            <img :src="changeImage === true ? modalContent.image : modalContent.hoverImage" alt="">
                            <div class="buttons">
                                <button @click="changeActiveImage()">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button @click="changeActiveImage()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
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