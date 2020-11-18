<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-login:link, .router-login:visited, .router-login:active{
  text-decoration: none;
  color: rgb(55, 55, 55);
}
ul li{
  text-decoration: none;
    list-style: none;
}
</style>
