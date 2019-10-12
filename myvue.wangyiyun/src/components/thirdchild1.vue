<template>
  <div>
    <div class="banner" @mouseenter="go()" @mouseleave="out()">

      <div class="bgc" :style="{background:'url('+bgcImg[index]+')repeat-x'}">

      <div class="content">
        <img :src="arrImg[index]" alt="">
        <div class="content_right"><img src="../../static/download.png" /></div>
        <span @click="rightImage()"> ></span>
        <span @click="leftImage()"><</span>
      </div>

      </div>
      <!--element-ui实验轮播图-->
      <!--<div>-->
        <!--<el-carousel indicator-position="outside">-->
          <!--<el-carousel-item v-for="item in 5" :key="item">-->
            <!--<h3 :style="{background:'url('+bgcImg[index]+')repeat-x'}"-->
            <!--&gt;{{ item }}</h3>-->

          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      <!--</div>-->

      <div class="down">
        <div class="down2">
          <div class="downleft">
            <div class="hot">
              <a href="/#" class="recommend">热门推荐</a>
              <div class="tab">
                <a href="/#">华语</a>
                <span class="line">|</span>
                <a href="/#">流行</a>
                <span class="line">|</span>
                <a href="/#">摇滚</a>
                <span class="line">|</span>
                <a href="/#">民谣</a>
                <span class="line">|</span>
                <a href="/#">电子</a>
              </div>
              <span class="more">更多</span>
            </div>
            <ul class="ulplay">
              <li v-for="(itm,ind) in smallImg.slice(0,8)" :key="ind">
                <div class="liimg">
                  <img :src="itm.picUrl" alt="">

                  <div class="bottom">
                    <a href="/#" class="el-icon-video-play"></a>
                    <span class="el-icon-headset"></span>
                    <span>{{itm.trackCount}}万</span>
                  </div>
                </div>
                <p class="dec"><a href="" :title="itm.name">{{itm.name}}</a></p>
              </li>

            </ul>
            <!--新碟上架部分-->
            <div class="hot" style="overflow: hidden">
              <a href="/#" class="recommend">新碟上架</a>
              <span class="more">更多</span>
            </div>
           <div class="die_box">
             <span @click="subli()">&lt;</span>
             <span @click="subli()">&gt;</span>


              <transition>
             <ul ref="myul1" v-show="flag">
             <li v-for="item3 in xindieImg.slice(0,5)">
               <a href="/#"><img :src="item3.picUrl"/></a>
               <p class="die_p1"><a href="/#">{{item3.name}}</a></p>
               <p class="die_p2"><a href="/#">{{item3.artist.name}}</a></p>
             </li>
           </ul>
              </transition>


              <transition>
             <ul ref="myul2" v-show="!flag">
               <li v-for="item3 in xindieImg.slice(5,10)">
                 <a href="/#"><img :src="item3.picUrl"/></a>
                 <p class="die_p1"><a href="/#">{{item3.name}}</a></p>
                 <p class="die_p2"><a href="/#">{{item3.artist.name}}</a></p>
               </li>
             </ul>
             </transition>

           </div>
            <!--榜单部分-->
            <div class="hot" style="overflow: hidden">
              <a href="/#" class="recommend">榜单</a>
              <span class="more">更多</span>
            </div>
            <!--//最下面部分-->
            <div class="listall">
              <div class="bsb">
                <div class="bsbtop">
                  <div class="coverimg">
                    <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                    <a href="/#" title="飙升榜"></a>
                  </div>
                  <div class="tit">
                    <a href="./#"><h3>云音乐飙升榜</h3></a>
                    <div class="btnicon">
                      <a href="./" class="play"></a>
                      <a href="./" class="collect"></a>
                    </div>
                  </div>

                </div>
                <div class="bangdan">
                  <ul class="bangdanul">
                    <li class="bangdanli" v-for="bbang in arrBang.slice(0,10)">
                      <span class="numtop" id="no">1</span>
                      <a href="/#" :title="bbang.name" class="dan">{{bbang.name}}</a>
                      <div class="btndan">
                        <a href="/#" title="播放"></a>
                        <a href="/#" title="添加至播放列表"></a>
                        <a href="/#" title="收藏"></a>
                      </div>
                    </li>
                    <div class="check_more">
                      <a href="/#">查找全部></a>
                    </div>
                  </ul>
                </div>
              </div>

              <div class="bsb">
                <div class="bsbtop">
                  <div class="coverimg">
                    <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                    <a href="/#" title="飙升榜"></a>
                  </div>
                  <div class="tit">
                    <a href="./#"><h3>云音乐飙升榜</h3></a>
                    <div class="btnicon">
                      <a href="./" class="play"></a>
                      <a href="./" class="collect"></a>
                    </div>
                  </div>

                </div>
                <div class="bangdan">
                  <ul class="bangdanul">
                    <li class="bangdanli" v-for="bbang in arrBang.slice(0,10)">
                      <span class="numtop" id="no">1</span>
                      <a href="/#" :title="bbang.name" class="dan">{{bbang.name}}</a>
                      <div class="btndan">
                        <a href="/#" title="播放"></a>
                        <a href="/#" title="添加至播放列表"></a>
                        <a href="/#" title="收藏"></a>
                      </div>
                    </li>
                    <div class="check_more">
                      <a href="/#">查找全部></a>
                    </div>
                  </ul>
                </div>
              </div>

              <div class="bsb">
                <div class="bsbtop">
                  <div class="coverimg">
                    <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                    <a href="/#" title="飙升榜"></a>
                  </div>
                  <div class="tit">
                    <a href="./#"><h3>云音乐飙升榜</h3></a>
                    <div class="btnicon">
                      <a href="./" class="play"></a>
                      <a href="./" class="collect"></a>
                    </div>
                  </div>

                </div>
                <div class="bangdan">
                  <ul class="bangdanul">
                    <li class="bangdanli" v-for="bbang in arrBang.slice(0,10)">
                      <span class="numtop" id="no">1</span>
                      <a href="/#" :title="bbang.name" class="dan">{{bbang.name}}</a>
                      <div class="btndan">
                        <a href="/#" title="播放"></a>
                        <a href="/#" title="添加至播放列表"></a>
                        <a href="/#" title="收藏"></a>
                      </div>
                    </li>
                    <div class="check_more">
                      <a href="/#">查找全部></a>
                    </div>
                  </ul>
                </div>
              </div>


            </div>





          </div>
          <div class="downright">
            <div>
            <div>
              <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
              <a>
                用户登录
              </a>
            </div>
            </div>

            <!--右边登录下面部分-->
            <div>
              <!--右边登录下面第一部分-->
            <h3>
              <span>入驻歌手</span>
              <a>查看全部&nbsp;></a>
            </h3>
              <!--右边登录下面第二部分-->
              <ul>
                <li v-for="item2 in rightImg.slice(0,5)">
                  <a>
                    <div>
                      <img :src="item2.picUrl"/>
                    </div>
                    <div>
                      <h4><span>{{item2.name}}</span></h4>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  export default {
    data(){
      return{
        arrImg:[],
        index:0,
        timer : null,
        bgcImg:[

          'http://p1.music.126.net/m8FBNR1FW_xugNSC71DyxQ==/109951164385419448.jpg',
          'http://p1.music.126.net/spsE7mp13Sk8yK62v5cOBQ==/109951164385165534.jpg',
          'http://p1.music.126.net/3KIXiLehV-M8Eygp8M0lrA==/109951164385172922.jpg',
          'http://p1.music.126.net/Uxov4xrjpvunFK65GkYQLA==/109951164385172481.jpg',
          'http://p1.music.126.net/uymNPZ27oyiw6vfNvNFa9w==/109951164385189634.jpg',
          'http://p1.music.126.net/mAfvwHwPSxWriFlZPdNTkg==/109951164386605196.jpg',
          'http://p1.music.126.net/FBmSAyP_zfEiWgPLIAGNMg==/109951164386735510.jpg',
          'http://p1.music.126.net/CTEQJCBxRdtVnc3HZoTJHQ==/109951164386616837.jpg',

        ],
        smallImg:[],
        rightImg:[],
        xindieImg:[],
        flag:true,
        arrBang:[]

      }
    },
    methods:{
//       获取数据,轮播图图片
      getImg(){
        this.$http.get("http://localhost:3000/banner").then(date=>{

          date.data.banners.forEach( (val,i) =>{
          this.arrImg.push(val.imageUrl);
        console.log(this.arrImg.push(val.imageUrl))


      });
        this.$http.get("http://localhost:3000/personalized?limit").then(res=>{
          this.smallImg=res.data.result;
//        console.log(this.smallImg);
      });
        this.$http.get("http://localhost:3000/artist/list?cat=5001").then(red=>{
          this.rightImg=red.data.artists;
//        console.log(this.rightImg);
      });
        this.$http.get("http://localhost:3000/album/newest").then(rel=>{
          this.xindieImg=rel.data.albums;
        console.log(this.xindieImg);
      });
        this.$http.get("http://localhost:3000/top/list?idx=3").then(rej=>{
          this.arrBang=rej.data.playlist.tracks;
        console.log(this.xindieImg);
      });
      })

      },
//   banner定时器
      getInterVal(){
        this.timer = setInterval( ()=>{
            this.index++;
        if(this.index == this.arrImg.length){
          this.index = 0;
        }
      },2000)
      },
      go(){
        clearInterval(this.timer);//清除轮播图片定时器
      },
      out(){
        this.getInterVal()
      },
      leftImage(){
        this.index--;//图片索引
      //  this.bgcindex--;//背景颜色图片索引
        if(this.index <0){
          this.index = this.arrImg.length-1;//图片极值
      //    this.bgcindex = this.bgcImg.length-1;//颜色极值

        }
      },
      rightImage(){
        this.index++;
       // this.bgcindex++;
        if(this.index == this.arrImg.length){
          this.index = 0;
         // this.bgcindex=0;
        }
      },
      subli(){
        //获取元素
        let ul1=this.$refs.myul1;
        let ul2=this.$refs.myul2;
        this.flag=!this.flag;
//        ul1.style.transform="translateX:-645px";
//        ul1.style.transition="all 0.5s"



      }

    },
    created(){
      this.getImg();
      this.getInterVal();


    },
    beforemount(){
      this.subli();
    }


  }
</script>
<style scoped="">
  .banner{
    width: 100%;
    height: 336px;
    /*border:1px solid #cccccc;*/

  }

  .content{
    width: 982px;
    height: 336px;
    margin:  0 auto;
    /*border:1px solid #cccccc;*/
    position: relative;

  }
  .content>span:first-of-type{
    position: absolute;
    top: 40%;
    right:-60px ;
    font-size: 65px;
    color: white;
    font-weight: bolder;
  }
  .content>span:last-of-type{
    position: absolute;
    top: 40%;
    left:-60px ;
    font-size: 65px;
    color: white;
    font-weight: bolder;
  }
  .content>img{
    height: 336px;
    width: 730px;
  }
  .content_right{
    height: 336px;
    width: 252px;
    /*border:1px solid #cccccc;*/
    float: right;
    overflow: hidden;
  }
  .bgc{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .down{
    width: 100%;
    /*height: 100%;*/
    background-color: #f5f5f5;
    /*border: 1px solid red;*/
  }
  .down2{
    width: 982px;
    /*height: 1425px;*/
    margin:  0 auto;
    /*border:1px solid red;*/
    background-color:#ffffff ;
  }
  .downleft{
    height: 523px;
    width: 689px;
    margin-left:20px;
  }
  .downright{
    height: 100%;
    /*252px*/
    width: 250px;
    /*border: 1px solid red;*/
    float: right;
  }
  .hot{
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    background:url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat;
  }
  .hot>.recommend{
    float: left;
    font-size: 20px;
    color: #333333;
    text-decoration: none;
    font-weight: normal;
    line-height: 28px;
  }
  .tab{
    float: left;
    margin: 7px 0 0 20px;
  }
  .tab>a{
    text-decoration: none;
    font-size: 12px;
    color:#666666;
  }
  .tab>.line{
    color:#cccccc;
    margin: 0 10px;
  }
  .more{
    float: right;
    color: #666666;
    font-size: 12px;
    margin-top: 10px;
  }
  .more:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .ulplay{
    margin: 20px 0px 0 -42px;
  }
  .downleft .ulplay li{
    width: 140px;
    height: 204px;
    padding-left: 42px;
  }
  .ulplay>li{
    float: left;
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
  }
  .liimg{
    position: relative;
  }
  .liimg>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .dec{
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
  }
  .dec>a{
    color: black;
  }
  .bottom{
    width: 140px;
    height: 27px;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 27px;
  }
  .bottom>a{
    float: right;
    text-decoration: none;
    color: #f5f5f5;
    margin-top: 8px;
    margin-right: 5px;
  }
  .bottom>span{
    color: #f5f5f5;
    font-size: 12px;
    margin-left: 5px;
  }
  .hot{
    background-position: -225px -156px;
  }
  .dec>a{
    text-decoration: none;
  }
  .downright{
    border: 1px solid #CCCCCC;
    text-align: center;
    margin-top: -523px;
  }
  .downright>div:first-child{
    background:url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat;
    height: 126px;
  }
  .downright>div:first-child>div{
    color: #666666;
    font-size: 12px;
    margin: 0px 22.5px;
    padding: 16px 0px;
    text-align: left;
    line-height: 31px;

  }
  .downright>div:first-child>div>a{
    text-align: center;
    margin: 0px auto;
    display:block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    background:url("https://s2.music.126.net/style/web2/img/index/index.png?ac1406bd35e0c0340bacb83102534b6a") no-repeat; ;
    background-position: 0px 44.7%;
    color: #FFFFFF;
  }
  .downright>div:nth-child(2){
    /*margin: 18px 0 0;*/
    padding: 18px;

  }
  .downright>div:nth-child(2)>h3{
    border-bottom: 1px solid #CCCCCC;
    margin: 0px auto;
    padding-bottom: 5px;
    overflow: hidden;
  }
  .downright>div:nth-child(2)>h3>span{
    float: left;
    font-size: 12px;

  }
  .downright>div:nth-child(2)>h3>a{
    float: right;
    font-size: 12px;
    font-weight: 100;
  }
  .downright>div:nth-child(2)>ul{
    margin-top: 15px;

  }
  .downright>div:nth-child(2)>ul>li{
    width: 220px;
    height: 62px;
    margin-top: 15px;
  }

  .downright>div:nth-child(2)>ul>li>a div{
    float: left;
    line-height: 31px;
    text-align: left;
  }
  .downright>div:nth-child(2)>ul>li>a>div:nth-child(2){
    padding-left: 15px;
    border: 1px solid #e9e9e9;
    border-left: none;
    width: 134px;
  }
  .downright>div:nth-child(2)>ul>li>a>div:nth-child(2)>p{
    font-size: 12px;
    color: #666666;
  }
  .downright>div:nth-child(2)>ul>li>a>div:nth-child(1)>img{
    float: left;
    width: 62px;
    height: 62px;
  }
  .die_box{
    width: 100%;
    height: 186px;
    border: 1px solid red;
    margin-top: 20px;
    position: relative;
    background: #F5F5F5;
  }
  .die_box>ul{
    margin: 15px auto;
    box-sizing: border-box;
    width: 90%;
    height: 80%;
    overflow: hidden;
  }
  .die_box>ul>li{
    width: 19%;
    margin-left: 1%;
    /*height: 90%;*/
    float: left ;
    background: url("../../static/coverall.png")no-repeat;
    background-position: 2px -570px;

  }
  .die_box>ul>li>a>img{
    width: 90%;
    height: 100%;
  }
  .die_box>ul>li>p>a{
    font-size: 12px;
    text-decoration: none;
  }
  .die_p1,.die_p1{
    margin-top: 5px;
  }
  .die_p1>a{
    display: block;
    width: 120px;
    white-space: nowrap;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .die_p2>a{
    color:#333333;
  }
  .die_box span{
    display: block;
    position: absolute;
    font-size: 20px;
    font-weight: bolder;
    color: #333333;
  }
  .die_box>span:first-child{
    top: 30%;
    left: 10px;
  }
  .die_box>span:nth-child(2){
    top: 30%;
    right: 10px;
  }
  .die_box>ul:nth-of-type(2){
    position: absolute;
    top: 0px;
    left: 34px;
    /*display: none;*/
  }

  .v-enter{
    transform: translateX(645px);
    opacity:0;
  }
  .v-leave-to{
    transform: translateX(-645px);
    opacity:0;
  }
  .v-enter-active,.v-leave-active{

    transition: all 0.5s;
  }



  .listall{
    width:687px;
    height: 470px;
    border: 1px solid #cccccc;
    background-color: #f4f4f4;
    margin: 20px auto 40px;
    box-sizing: border-box;
  }
  .listall>.bsb{
    width:227px;
    height: 470px;
    border-right: 1px solid #cccccc;
    float: left;
  }
  .listall>.bsb:last-of-type{
    border-right:none;
  }
  .bsbtop{
    height: 100px;
    margin: 20px 0 0 20px;
    position: relative;
  }
  #no:first-of-type{
    color: #c10d0c;
  }
  #no:nth-of-type(2){
    color: #c10d0c;
  }
  #no:nth-of-type(3){
    color: #c10d0c;
  }
  .numtop{
    color: #cccccc;
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -32px;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
  .bangdanli{
    width: 180px;
    height: 32px;
    vertical-align: middle;
    margin-left: 32px;
  }
  .coverimga{
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .coverimg{
    width: 80px;
    height: 80px;
    float:left;
    position: relative;
  }
  .coverimg>img{
    width: 80px;
    height: 80px;
  }
  .tit{
    margin-top: 5px;
  }
  .tit,.btnicon{
    float:left;
    margin-left: 10px;
  }
  .btnicon{
    margin-top: 10px;
  }
  .tit>a{
    text-decoration: none;
  }
  .tit>a>h3{
    font-size: 14px;
    color: #333333;
  }
  .tit>a:hover{
    color: #333333;
    text-decoration: underline;
  }
  .btnicon>.play,.btnicon>.collect{
    display: inline-block;
    width: 22px;
    height: 22px;
  }
  .btnicon>.play{
    background: url("../assets/index.png") no-repeat;
    background-position: -267px -205px;
    position: absolute;
    top:32px;
    left: 93px;
  }
  .btnicon>.play:hover{
    background: url("../assets/index.png") no-repeat;
    background-position: -267px -235px;
    position: absolute;
    top:32px;
    left: 93px;
  }
  .btnicon>.collect{
    background: url("../assets/index.png") no-repeat;
    background-position: -300px -205px;
    position: absolute;
    top:32px;
    left: 123px;
  }
  .btnicon>.collect:hover{
    background: url("../assets/index.png") no-repeat;
    background-position: -300px -235px;
    position: absolute;
    top:32px;
    left: 123px;
  }
  .dan{
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    color: black;
    line-height: 32px;
    width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .dan:hover{
    text-decoration: underline;
  }
  .btndan>a{
    float: left;
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-left: 5px;
    line-height: 32px;
  }
  .bangdanli:hover .btndan{
    display: block;
  }
  .btndan{
    height: 19px;
    display: none;
    float: right;
    width: 82px;
    margin-top: 7px;
  }
  .btndan>a:first-of-type{
    margin-right: 2px;
    background: url("../assets/index.png") no-repeat;
    background-position:-267px -268px;
  }
  .btndan>a:first-of-type:hover{
    background: url("../assets/index.png") no-repeat;
    background-position:-267px -288px;
  }
  .btndan>a:nth-of-type(2){
    background: url("../assets/icon.png") no-repeat;
    background-position:0 -700px;
  }
  .btndan>a:nth-of-type(2):hover{
    background: url("../assets/icon.png") no-repeat;
    background-position:-22px -700px;
  }
  .btndan>a:last-of-type{
    background: url("../assets/index.png") no-repeat;
    background-position:-296px -268px;
  }
  .btndan>a:last-of-type:hover{
    background: url("../assets/index.png") no-repeat;
    background-position:-296px -288px;
  }
  .check_more>a{
    float: right;
    font-size: 12px;
    text-decoration: none;
    color:black;
    margin-right: 20px;
  }
  .check_more>a:hover{
    text-decoration: underline;
  }



</style>

