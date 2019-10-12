<template>
  <div class="app">
    <nav>
      <!-- <ul>
         <li><a href="">推荐</a></li>
         <li><a href="">排行榜</a></li>
         <li><a href="">歌单</a></li>
         <li><a href="">主播电台</a></li>
         <li><a href="">歌手</a></li>
         <li><a href="">新碟上架</a></li>
       </ul>-->
    </nav>
  </div>
</template>
<script>

</script>
<style scoped="">

  .app{
    position: relative;
    width: 100%;
    background-color: #C20C0C;
    border-bottom: 5px solid #a40011;
    /*height:35px;*/
  }
  sub{
    position: absolute;
    top:0;
    left: 0;
  }
  nav{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
  }
  sub{
    background:url("../assets/topbar.png");
  }
  ul{
    margin-left: 160px;
    height: 100%;
  }
  ul>li{
    float: left;
    height: 100%;
  }
  ul>li>a{
    color: white;
    font-size: 12px;
    text-decoration: none;
    margin: 7px 17px 0;
    line-height: 35px;
    padding: 2px 9px;
  }
  ul>li>a:hover{
    border-radius:9px ;
    background-color: #9B0909;
  }
</style>

