<template>
  <div>
      <div class="person-card" v-if="showCardStatus">
          <p class="hide cursor-pointer" @click="hideCardStatus()">Hide</p>
          <div>
            <img style="border-radius:50%" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="60px" width="60px">
          </div>
          <h4 class="mt-2"><b>Ekemini Mark</b></h4>
          <p style="font-size:12px">I’m a wedding and portrait photographer based in 
              Lagos, Nigeria. I’ve been shooting weddings since I was in 
              high school (before I ever had my driver’s license!).
            </p>
            <div class="stats-div">
                <div class="single-stat-div">
                    <h3 class="number"><b>22.1k</b></h3>
                    <p class="title">Total View</p>
                </div>
                <div class="single-stat-div">
                    <h3 class="number"><i class="fa fa-heart-o"></i> <b>22.1k</b></h3>
                    <p class="title">Total Likes</p>
                </div>
                <div class="single-stat-div">
                    <h3 class="number"><b>Sony 92J</b></h3>
                    <p class="title">Camera Lens</p>
                </div>
            </div>
            <div class="category-div">
                <p class="category-text text-muted">Category</p>
                <div class="category-listings">
                    <p>Food</p>
                    <p>Portrait</p>
                    <p>Wedding</p>
                    <p>Model</p>
                </div>
            </div>
            <div class="location-div">
                <p class="text-muted">Location</p>
                <p>Lagos, Nigeria</p>
            </div>
            <div class="share-div">
                <p><i class="fa fa-share-alt share-icon"></i> www.peexoo.ai/anijohnoson</p>
            </div>
            <div class="social-icons-div-ouuter-div">
                <div class="social-icons-div">
                    <p><i class="fa fa-twitter social-icon cursor-pointer"></i></p>
                    <p><i class="fa fa-facebook social-icon cursor-pointer"></i></p>
                    <p><i class="fa fa-envelope social-icon cursor-pointer"></i></p>
                </div>
                <div class="book-now-div">
                    <p class="book-now cursor-pointer">Book Now</p>
                </div>
            </div>
            <div>
                <p class="text-muted built-text">Built <i class="fa fa-heart heart-icon"></i> on Peexoo</p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
// hideCardStatus()
    data: function () {
            return {
                isPortfolio:true,
                isAvailability:false,
                isPricing:false,
                showCardStatus:true
            }
    },
    methods: {
        hideCardStatus(){
            this.showCardStatus = true
        }
    }
}
</script>

<style>
    .hide{
        position: absolute;
        color:#f29f05;   
        top:10px;
        right:50px;
        font-size: 12px;
    }
    .person-card{
        background-color: white;
        border: 0.25px solid #ffb7004d;
        border-radius: 4px;
        padding: 30px;
        text-align: center;
        width:90%;
    }
    .stats-div{
        display: flex;
        justify-content: space-between;
    }
    .single-stat-div{
        line-height: 5px;
    }
    .number{
        font-size: 16px;
    }
    .title{
        font-size: 12px;
    }
    .category-div{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        margin-bottom: -10px;
    }
    .category-text{
        flex: 1;
    }
    .category-listings{
        flex:10;
        display: flex;
        justify-content: space-around;
    }
    .location-div{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        width:50%;
    }
    .share-div{
        text-align: center;
        font-size: 14px;
    }
    .share-icon{
        color:#f29f05;
    }
    .social-icons-div-ouuter-div{
        display: flex;
        justify-content: space-between;
        padding-left: 50px;
        padding-right: 50px;
        align-items: center;
    }
    .social-icons-div{
        display: flex;
        justify-content: space-between;
        flex:1;
        font-size:12px;
    }
    .social-icon{
        background-color: #f7f7f7;
        padding:5px;
        border-radius: 50%;
    }
    .book-now-div{
        flex:1;
        margin-left: 20px;
    }
    .book-now{
        background-color: #f29f05;
        color:white;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 10px;
    }
    .built-text{
        font-size: 10px;
    }
    .heart-icon{
        color:#f29f05;
    }
</style>