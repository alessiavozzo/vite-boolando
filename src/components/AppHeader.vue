<script>
export default {
    name: "AppHeader",

    data() {
        return {
            categoryLinks: [
                {
                    href: "#",
                    category: "Donna"
                },
                {
                    href: "#",
                    category: "Uomo"
                },
                {
                    href: "#",
                    category: "Bambino"
                }
            ],

            navIcons: [
                {
                    href: "#",
                    iconClass: "fa-regular fa-user"
                },
                {
                    href: "#",
                    iconClass: "fa-regular fa-heart"
                },
                {
                    href: "#",
                    iconClass: "fa-solid fa-bag-shopping"
                }
            ]
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
                <a v-for="link in categoryLinks" :href="link.href">{{ link.category }}</a>
            </div>

            <!-- logo center -->
            <img class="logo" src="/public/images/boolean-logo.png" alt="boolean-logo">

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