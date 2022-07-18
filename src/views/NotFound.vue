<template>
  <div class="notFound">
    <span class="header"> 404 </span>
    <span class="title"> Page Not Found </span>
    <p> We are sorry, something goes wrong :( </p>
    <button>Back to homepage</button>
  </div>
</template>
<style lang="scss" scoped>
.notFound{
    display: flex;
    flex-direction: column;
    .header{
        font-size: 137px;
        color:#E52620
    }
    .title{
        font-size: 67px;
    }
    p{
        font-size: 47px;
        color: #868686 ;
    }
    button{
        background-color: #E52620;
        padding: 30px 10px;
    }
}
</style>