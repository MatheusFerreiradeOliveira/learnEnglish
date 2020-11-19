<template>
  <div id="messages-page">
    <nav-bar-profile></nav-bar-profile>
    <div id='messages-container'>
        <header class="column">
            <div class="row header-messages">
                <div class="icon-user-message">
                    {{data.user.photo}}
                </div>
                <div class="column header">
                    <div class="row header-title">
                        <div class="h-title">
                        {{data.title}}
                        </div>
                        <div class="seguir">
                            <div class="btn-menu btn-new-topic">Acompanhar</div>
                        </div>
                    </div>
                    <div class="row h-name"> {{data.user.name}}</div>
                </div>
            </div>
            <div class="row tags">
                <tags :data="data.tags"></tags>
            </div>
        </header>
        <div class="description-message">
        {{data.body}}
        </div>
        <div class="details-content">
            <div>
                <i class='far fa-heart'></i>
                <div class="sizedbox"></div>
                <div>{{data.likes}}</div>
            </div>
                <div class="sizedbox"></div>
            <div>
                <i class='far fa-calendar-alt'></i>
                <div class="sizedbox"></div>
                <div>{{data.date}}</div>
            </div>
        </div>
            <div class="send-message">
                <textarea name="send-message" id="send-message" cols="30" rows="10"></textarea>
                <div class="row buttons-message">
                    <div class="btn-menu btn-send">Publicar</div>
                    <div class="sizedbox"></div>
                    <div class="btn-menu btn-cancel">Cancelar</div>
                </div>
            </div>
            <div class="comments-main">
                <div class="comments-title row">
                <div class="comment-title">{{data.comments}} Comentário(s)</div>
                <div class="comment-filtro">
                    <select name="filtro" id="filtro">
                        <option value="">data</option>
                        <option value="">facebook</option>
                        <option value="">twiter</option>
                    </select>
                </div>
                </div>
            </div>
            <div class="coments">
            <item-comment v-for="(i,index) in data.list_coments" :key="index" :data="i"></item-comment>
            </div>
        </div>

  </div>
</template>

<script>
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'
import Tags from '@/features/forum/widgets/Tags'
import ItemComment from '@/features/forum/widgets/ItemComment'
export default {
  name: 'ForumMessages',
  components: {
    Tags,
    ItemComment,
    NavBarProfile
  },
  data () {
    return {
      data: {
        user: {
          name: 'Jeferson Gonçalves',
          photo: 'JG'
        },
        title: 'Como faz isso aqui?',
        tags: ['problema', 'ingles', 'portugues', 'fire'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        likes: 10,
        date: '2020-11-20',
        comments: 10,
        list_coments: [
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          }
        ]
      }
    }
  }
}
</script>

<style>
.btn-menu {
     font-size: 15px;
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 25px;
    font-weight: 400;
    box-shadow: inset 1px 1px 0 1px #fff;
    border: 0.5px solid grey;
    border-radius: 50px;
}
.btn-new-topic {
    background-color: #66f2d5;
    transition: .4s;
}

.btn-new-topic:hover {
    box-shadow: inset 1px 1px 0 1px  #00b08c;
    background-color: #00b08c;
    border: 0.5px solid #00b08c;
    color: white;
}
.icon-user-message{
    width: 85px;
    padding: 0;
    height: 75px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #FEF0F0;
    border-radius: 1000px;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);

}
#messages-page{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 754px;
    width: 100%;
    align-items: center;
}
.h-title{
    padding-left: 14px;
    display: flex;
    flex-direction: row;
    justify-content: justify;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
}
.h-name{
    padding-left: 14px;
    display: flex;
    flex-direction: row;
    justify-content: justify;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: rgb(100, 100, 100);
}
header{
    padding-bottom: 10px;
}
div.header{
    width: 100%;
}
#messages-container{
    width: 980px;
    margin-top: 10px;
}
.column{
    display: flex;
    flex-direction: column;
}
.row{
    display: flex;
    flex-direction: row;
}
.header-messages{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
    justify-content: start;
    align-items: center;
}
.header-title{
    width: 100%;
    justify-content: space-between;
}
.tags{
    padding: 5px 0px 5px 0 ;
    margin: 0;
}
i.far{
    font-size: 18px;
}
.details-content{
    margin: 0;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}
.details-content div{
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    margin-right: 10px;
}
div.description-message{
    width: 100%;
    background-color: #FDF4F4;
    display: flex;
    padding: 15px;
    font-size: 14px;
    text-align: left;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
}
.send-message{
    display: flex;
    flex-direction: column;
    width: 100%;
}
textarea#send-message{
    width: 100%;
    min-height: 120px;
    padding: 10px;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid rgb(100, 100, 100);
}
.buttons-message{
    padding: 0;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(100, 100, 100);
}
.btn-send {
    background-color: #7b68ee;
    transition: .4s;
}
.btn-send:hover {
    box-shadow: inset 1px 1px 0 1px #5F48EA;
    background-color: #5F48EA;
    border: 0.5px solid #5F48EA;
    color: white;
}
.btn-cancel {
    background-color: #ffe54c;
    transition: .4s;
}
.btn-cancel:hover {
    box-shadow: inset 1px 1px 0 1px #f70;
    background-color: #f70;
    border: 0.5px solid #f70;
    color: white;
}
.sizedbox{
    width: 10px;
}
.comments-title{
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    justify-content: start;
    align-items: center;
}
.comment-title{
    width: 100%;
    display: flex;
    justify-content: start;
}
.comment-filtro{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}
.comments-main{
    padding-bottom: 20px;
}
</style>
