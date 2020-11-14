<template>
<div id="app">
    <div class="background">
        <nav-bar></nav-bar>
    </div>
    <div class="ok"></div>
    <div class="ok"></div>
    <div class="ok"></div>
    <div class="ok"></div>
    <div class="ok"></div>
    <div class="ok"></div>
</div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'
export default {
    name: "Home",
    components: {
        NavBar,
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
    height: 200px;
}

#app {
    display: flex;
    flex-direction: column;
}

.background {
    background-image: url("./../../../assets/svg/bg_gradient__main-header.svg");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: start;
    width: 100%;
    height: 550px;
    /*width: 100%;
    height: 100%;
    -webkit-transform: translate(-22%, -50%);
    -ms-transform: translate(-22%, -50%);
    transform: translate(-22%, -50%);
    left: 50%;
    top: 50%;
    */
}
</style>
