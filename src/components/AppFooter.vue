<script>
import { socialIcons } from "../assets/js/links&icons.js";
export default {
    name: "AppFooter",

    data() {
        return {
            socialIcons: socialIcons
        }
    }
}
</script>

<template>
    <!-- /#site_footer -->
    <footer id="site_footer">

        <div class="container">
            <!-- /.copyright -->
            <div class="copyright">
                <h4>Boolando srl</h4>
                <a href="#">Informazioni legali </a>
                <a href="#">Informativa sulla privacy </a>
                <a href="#">Diritti di recesso</a>
            </div>

            <!-- /.social -->
            <div class="social">

                <h4>Trovaci anche su:</h4>

                <div class="social-icons">
                    <a v-for="icon in socialIcons" :href="icon.href">
                        <i :class="icon.socialClass"></i>
                    </a>
                </div>

            </div>
        </div>



    </footer>
</template>

<style></style>