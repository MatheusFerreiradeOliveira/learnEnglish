<template>
<div id="footer_main">
  <div class="footer">
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-4">a <button type="button" class="btn btn-primary">Primary</button></div>
        <div class="col-md-4">f</div>
        <button type="button" class="btn btn-primary btn-lg active">Primary button</button>
        <div class="col-md-4">f</div>
    </div>
    </div>
      <div class="copyright">
      COPYRIGHT &copy; BY LEARNING ENGLISH CORPORATION. 2020 - ALL RIGHTS RESERVED.  POLITICA DE PRIVACIDADE
      </div>
  </div>

</div>
</template>
<script>
export default {
    name:"Footer",
}
</script>

<style>
#footer_main{
    background-color: #313a45;
    color: #dfe3ea;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.footer{
  padding: 20px 0px 20px 0px;
  min-width:  980px;
}
</style>