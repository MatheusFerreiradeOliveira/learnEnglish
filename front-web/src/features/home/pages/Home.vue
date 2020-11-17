<template>
<div id="home">
    <nav-bar></nav-bar>
    <Header></Header>
    <div class="ok">ok</div>
    <div class="ok">ok</div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from "@/features/footer/pages/Footer"
import Header from '@/features/header/pages/Header'
import NavBar from '@/features/navbar/pages/NavBar'
export default {
    name: "Home",
    components: {
        NavBar,
        Header,
        Footer,
    },
    data() {
        return {};
    },
    methods: {

    }
}
</script>

<style>

* {
    margin: 0px;
    padding: 0px;
}
.ok {
    display: flex;
    height: 510px;
    /* background-color: red;*/
}
#home {
    display: flex;
    flex-direction: column;
}
</style>
