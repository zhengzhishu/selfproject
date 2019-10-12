<template>
  <div id="app">
    <nav>
      <div class="navbar">
        <h1 class="logo">
          <a href="/#"></a>
        </h1>
        <ul>
          <li >
            <router-link to="/secondchild1" >发现音乐
              <sub class=".sub">&nbsp;</sub>
            </router-link>

          </li>
          <li @click=""><router-link to="/secondchild2">我的音乐</router-link></li>
          <li><router-link to="/secondchild3">朋友</router-link></li>
          <li><a href="">商城</a></li>
          <li><a href="">音乐人</a></li>
          <li><router-link to="/secondchild4">下载客户端</router-link></li>
        </ul>

        <a class="login">
          登录
          <span></span>
          <ul>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
          </ul>
        </a>


          <span class="cen">
            创作者中心
          </span>

        <div class="search">
          <input type="text" name="sch">
          <span></span>
        </div>
      </div>
      <router-view></router-view>
    </nav>


  </div>
</template>

<script>

  export default {
    name: 'App',
    methods:{

    }

  }
</script>

<style scoped="">
  *{
    font-size: 14px;
    padding:0;
    margin:0;
    list-style: none;
  }
  sub{
    position: absolute;
    bottom: 0;
    left: 50%;
    background: url("./assets/topbar.png") 100% 100%;
    background-position: right 1px;
    width: 12px;
    height:7px;
  }
  nav{
    width: 100%;
    height: 70px;
    background-color: #242424;
  }
  .navbar{
    width: 1100px;
    margin: 0 auto;
    height: 100%;
  }
  .logo{
    height: 70px;
    width: 160px;
    background:url("./assets/topbar.png");
    float: left;
  }
  ul>li{
    float: left;
    line-height: 70px;
    position: relative;
  }
  ul>li>a{
    padding: 0 19px;
    color: #fff;
    text-decoration: none;
  }
  ul>li:hover{
    background-color: #000000;
  }
  .router-link-active{
    background-color: #000000;
    float: left;
    height: 70px;
  }
  .search{
    width: 158px;
    height: 32px;
    float: right;
    /*line-height: ;*/
    background-color: #fff;
    border-radius: 16px;
    padding: 3px 0px;
    box-sizing: border-box;
    position: relative;
    margin-top: 19px;
  }
  .search>input{
    width: 120px;
    border: 0px;
    outline: none;
    margin-left: 32px;
  }
  .search>span{
    position: absolute;
    top: 0;
    left: 0;
    background:url("./assets/topbar.png");
    width: 32px;
    height: 32px;
    background-position: left  53%;
  }
  .cen{
    height: 32px;
    line-height: 32px;
    float: right;
    color: #ffffff;
    width: 90px;
    border: 1px solid #ffffff;
    border-radius: 16px;
    font-size: 12px;
    text-align: center;
    margin-top: 19px;
  }
  .login{
    color: #787878;
    font-size: 12px;
    float: right;
    line-height: 90px;
    position: relative;
  }
  .login:hover{
    color: #999999;
  }
  .login>ul{
    display: none;
  }
  .login:hover>ul{
    display: block;
    position: absolute;
    top: 70px;
    background-color: #000;
    color: white;
  }
</style>


