<template>
    <div class="login">
        <nav-bar></nav-bar>
        <div class="content-login">
            <header class="login">
                <h1 class="title-login">Faça seu Cadastro!</h1>
            </header>
            <div>
                <form>
                    <div class="form-group">
                        <label id="labelForm" >Nome</label>
                        <input type="text" class="form-control" id="" placeholder="Digite seu nome">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Email</label>
                        <input type="email" class="form-control" id="" placeholder="Digite seu email">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Confirmar senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repita sua senha">
                    </div>
                   <div id="button" type="submit" class="btn btn-secondary">Cadastrar</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'

export default {
  name: 'Cadastro',
  components: {
    NavBar
  }
}
</script>

<style src="../style.css" scoped></style>
