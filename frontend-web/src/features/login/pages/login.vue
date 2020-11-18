<template>
    <div class="login">
        <nav-bar></nav-bar>
        <div class="content-login">
            <header class="login">
                <h1 class="title-login">Bem-vindo de volta!</h1>
                <h3 class="title-login">Learn English</h3>
            </header>
            <div>
                <form>
                    <div class="form-group">
                        <label id="labelForm" >Email</label>
                        <input type="email" class="form-control" id="" placeholder="Digite seu email">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
                    </div>
                    <button id="button" type="submit" class="btn btn-secondary" @click.stop.prevent='toForum'>Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'

export default {
  name: 'Login',
  components: {
    NavBar
  },
  methods: {
    toForum: function () {
      this.$router.push('/forum')
    }
  }
}
</script>

<style src="../style.css" scoped></style>
