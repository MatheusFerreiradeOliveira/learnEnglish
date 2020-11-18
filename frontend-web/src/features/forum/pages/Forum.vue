<template>
  <div id="forum-page">
  <nav-bar-profile></nav-bar-profile>
  <p>
  Forum
  </p>
  </div>
</template>

<script>
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'

export default {
  name: 'Forum',
  components: {
    NavBarProfile
  }
}
</script>

<style>
#forum-page{
display: flex;
flex-direction: column;
background: #eef3fd;
height: 754px;
}

</style>
