<template>
<div id="main">
    <div id="navbar">
        <div class="logo">
            <img src="@/assets/svg/logo_le.svg" alt="ok">
            <span id="title">Learning English</span>
        </div>
        <div class="items">
            <div class="btn login">Entre</div>
            <div class="btn singin">Cadastre-se</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NavBar"
}
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("main").style.backgroundColor = "rgba(255, 255, 255, 1)";
        document.getElementById("main").style.boxShadow = "0px 3px 5px rgb(120, 120, 120)";
        document.getElementById("title").style.color = "rgb(55, 55, 55)";
    } else {
        document.getElementById("main").style.backgroundColor = "rgb(255, 255, 255, 0 )";
        document.getElementById("main").style.boxShadow = "0px 0px 0px rgba(120, 120, 120,0)";
        document.getElementById("title").style.color = "#fff";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#main {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: rgb(250, 250, 255);
    box-shadow: 0px 3px 5px rgb(120, 120, 120);*/
    padding-bottom: 5px;
    padding-top: 5px;

}

#navbar {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

img {
    width: 40px;
    padding-right: 10px;
}

.logo {
    font-family: 'Nova Mono', monospace;
    font-size: 20px;
    font-weight: 200;
    /*color: rgb(60, 60, 150);*/
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.items {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn {
    /* font-size: 15px;*/
    font-weight: 400;
    box-shadow: inset 1px 1px 0 1px #fff;
    font-family: 'Poppins', sans-serif;
    padding-top: 3px;
    display: flex;
    width: 130px;
    margin-left: 15px;
    justify-content: center;
    padding-bottom: 3px;
    border: 0.5px solid grey;
    border-radius: 50px;
}

.singin {
    background-color: #ffe54c;
    transition: .4s;
}

.login {
    /*background-color: #7b68ee;*/
    background-color: white;
    transition: .4s;

}

.singin:hover {
    box-shadow: inset 1px 1px 0 1px #f70;
    background-color: #f70;
    border: 0.5px solid #f70;
    color: white;
}

.login:hover {
    /* box-shadow: inset 1px 1px 0 1px #5c4dbc;
    background-color: #5c4dbc;
    border: 0.5px solid #5c4dbc;
    color: white;*/
    box-shadow: inset 1px 1px 0 1px #00b08c;
    background-color: #00b08c;
    border: 0.5px solid #00b08c;
    color: white;
}
</style>
