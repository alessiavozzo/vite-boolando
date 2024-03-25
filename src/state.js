import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    cards: [],
    getCards() {
        axios
            .get("http://localhost:3000/cards")
            .then(response => {
                console.log(response);
                this.cards = response.data;
                console.log(this.cards);
            })
    }
})