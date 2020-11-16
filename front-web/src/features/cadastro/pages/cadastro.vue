<template>
    <div class="login">
        <div class="content-login">
            <header>
                <h1 class="title-login">Learn English</h1>
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
                    
                    <button id="button" type="submit" class="btn btn-secondary">Criar conta</button>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style src="../style.css" scoped></style>