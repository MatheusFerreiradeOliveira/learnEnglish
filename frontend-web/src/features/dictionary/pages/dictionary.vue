<template>
<div id="translator">
    <nav-bar-profile></nav-bar-profile>
    <div class="content-translator">
        <header class="header-translator">
            <div class="first-title">
                <h1 class="title-login"> <i class='fas fa-angle-double-right'></i> Dicionário</h1>
                <!-- <img class="title-image" src="./../../../assets/svg/uKFLAG.png"> -->
            </div>
            <h4>Tradutor inglês-português</h4>
        </header>
        <div class="body-translator">
            <div class="palavra-botao">
                <input type="textArea" class="input" placeholder="Escreva aqui" />
                <button id="button" type="submit" class="btn btn-secondary" @click="request"><strong>Traduzir</strong></button>
            </div>
            <div class="parte-traducoes">
                <div>
                    <div class="traducoes-titulo">
                        <label for="exampleFormControlSelect2">
                            <h3>Traduções: </h3>
                        </label>
                    </div>
                    <div class="traducoes-exemplos">
                        <div class="card">
                            <div class="card-body">
                                <strong>Example1</strong>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <strong>Example2</strong>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <strong>Example3</strong>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <strong>Example4</strong>
                            </div>
                        </div>
                    </div>
                    <!-- </select> -->
                </div>
                <div>
                    <div class="traducoes-titulo">
                        <label for="exampleFormControlSelect2">
                            <h3>Exemplos: </h3>
                        </label>
                    </div>
                    <div class="exemplos-exemplos">
                        <div class="card">
                            <div class="card-body">
                                <strong>Frase 1 com a palavra da tradução</strong>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <strong>Frase 2 com a palavra da tradução</strong>
                            </div>
                        </div>
                    </div>
                    <!-- </select> -->
                </div>
            </div>
            <!-- <div class="form-group">
                        <label id="labelForm" >Email</label>
                        <input type="email" class="form-control" id="" placeholder="Digite seu email">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
                    </div>
                    <button id="button" type="submit" class="btn btn-secondary">Entrar</button> -->
        </div>
    </div>
</div>
</template>

<script>
import Footer from '@/features/footer/pages/Footer'
import Header from '@/features/header/pages/Header'
import NavBar from '@/features/navbar/pages/NavBar'
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'

import axios from 'axios'

export default {
  name: 'Dictionary',
  components: {
    NavBar,
    Header,
    Footer,
    NavBarProfile
  },
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    async request () {
      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'accept-encoding': 'application/gzip',
          'x-rapidapi-key': 'b79af07decmsh8ca1020fa3b0ddep119b53jsnce99b789421f',
          'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
        },
        data: {
          q: 'Hello, world!',
          source: 'en',
          target: 'es'
        }
      }
      await axios.request(options).then(function (response) {
        console.log('Resposta')
        console.log(response.data)
        this.answer = response.data
        return response.data
      }).catch(function (error) {
        console.error(error)
      })
      return null
    }
  }
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Poppins', sans-serif;
}
h1 {
    font-size: 23px;
    font-weight: 600;
}
.header-translator {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
}
.first-title {
    display: flex;
    justify-content: start;
}

.title-image {
    width: 30px;
    height: 30px;
}

.body-translator {
    height: 500px;
    width: 760px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

.palavra-botao {
    display: flex;
    flex-direction: row;
}

.parte-traducoes {
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 90%;
    margin-left: 50px;
    margin-right: 50px;
}

.parte-exemplos {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.traducoes-exemplos {
    display: flex;
    justify-content: space-between;
}

.traducoes-titulo {
    width: 1000%;
    margin: 5px;
    color: gray;
    display: flex;
}

.card {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 25px;
    font-weight: 400;
    box-shadow: inset 1px 1px 0 1px #fff;
    border: 0.5px solid grey;
    border-radius: 50px;
    background-color: #7b68ee;
    transition: .4s;
    color: white;
    margin-bottom: 5px;
}

.card-reserva {
    background-color: #7b68ee;
    color: black;
    margin: 6px;
    box-shadow: 3px 3px #C0C0C0;
    padding: 10px;
    color: white;
    border-radius: 5px;
}

.card:hover {
    background-color: #5F48EA;
}

.input {
    margin: 5px;
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: #DCDCDC;
}

#button {
    display: flex;
    margin: 5px;
    background-color: #7b68ee;
    align-items: center;
    color: white
}

#button:hover {
    background-color: #5F48EA;
}

#translator {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
