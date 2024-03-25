<script>
import { categoryLinks } from "../assets/js/links&icons.js";
import { navIcons } from "../assets/js/links&icons.js";
export default {
    name: "AppHeader",

    data() {
        return {
            categoryLinks: categoryLinks,
            navIcons: navIcons,
            appear: false
        }
    }
}
</script>

<template>

    <!-- /#site_header -->
    <header id="site_header">
        <nav class="container header">

            <!-- categories left-->
            <div class="categories">
                <i class="fa-solid fa-bars" @click="appear = !appear"></i>
                <ul :class="appear ? 'd-block' : 'd-none'">
                    <li v-for="link in categoryLinks">
                        <a :href="link.href">{{ link.category }}</a>
                    </li>
                </ul>

            </div>

            <!-- logo center -->
            <img class="logo" src="/images/boolean-logo.png" alt="boolean-logo">

            <!-- icons right -->
            <div class="icons">
                <a v-for="icon in navIcons" :href="icon.href">
                    <i :class="icon.iconClass"></i>
                </a>

            </div>
        </nav>
    </header>

</template>

<style></style>