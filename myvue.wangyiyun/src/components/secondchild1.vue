<template>
  <div class="app">
    <nav>
      <ul>
        <li><a href="/#">推荐</a></li>
        <li><a href="">排行榜</a></li>
        <li><a href="">歌单</a></li>
        <li><a href="">主播电台</a></li>
        <li><a href="">歌手</a></li>
        <li><a href="">新碟上架</a></li>
      </ul>
    </nav>
    <thirdchild1></thirdchild1>
  </div>
</template>
<script>
  import thirdchild1 from  "./thirdchild1.vue";
  export default {
    components:{
      thirdchild1,
    }
  }
</script>
<style scoped="">

  .app{
    width: 100%;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    height:35px;
  }
  nav{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
  }
  ul{
    margin-left: 160px;
    height: 100%;
  }
  ul>li{
    float: left;
    height: 35px;
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

