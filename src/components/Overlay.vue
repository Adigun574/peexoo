<template>
  <div @click="test($event)">
      <div class="overlay-body">
          <div class="center-x">
              <div>
                   <div class="center-x">
                    <div class="large-img-div">
                    
                            </div>
                    </div>
                    <div>
                            <div class="likes-cont">
                                <p><i class="fa fa-heart-o"></i></p>
                                <p><i class="fa fa-heart-o"></i></p>
                                <p><i class="fa fa-heart-o"></i> 5,349</p>
                                <p><i class="fa fa-heart-o"></i> 23</p>
                                <p><i class="fa fa-heart-o"></i> 24,023</p>
                            </div>
                    </div>
              </div>
          </div>
          <div class="slider">
              <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
              <div class="sm-img-outter-div">
                  <div class="small-img-div scaled-up-img">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
              <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
              <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
              <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
              <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
               <div class="sm-img-outter-div">
                  <div class="small-img-div">             
                    </div>
              </div>
          </div>
          <p class="built-text">Built for free <i class="fa fa-heart" style="color:#d27842"></i> on Peexoo</p>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        test(e){
            if(
              e.target.classList[0] == 'large-img-div' ||
              e.target.classList[0] == 'small-img-div' ||
              e.target.classList[0] == 'like-count'  

            ){
                return
            }
            else{
                this.$emit('hideOverlay',false)
            }
        }
    }
}
</script>

<style>
.overlay-body{
    background-color: rgb(0,0,0,0.9);
    height:100vh;
    width:100vw;
    position: absolute;
    top:0;
    left:0;
    padding:30px;
}
.center-x{
    display: flex;
    justify-content: center;
}
.large-img-div{
    height:300px;
    width:500px;
    border-radius: 10px;
    background-image: url('https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}
.likes-cont{
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius:0 0 10px 10px;
    padding:10px;
    padding-bottom: 0;
    font-size: 12px;
    width:250px;
}
.slider{
    margin-top: 70px;
    margin-bottom: 30px;
    display: flex;
    overflow-x: scroll;
}
.sm-img-outter-div{
    width:90%;
    margin: auto;
    margin-right: 20px;
}
.small-img-div{
    height:80px;
    width:80px;
    border-radius: 5px;
    background-image: url('https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    transition: all .5s;
    cursor: pointer;
}
.small-img-div:hover{
    transform: scale(1.1);
}
/* .scaled-up-img{
    transform: scale(2);
} */
.built-text{
    color:white;
    text-align: center;
    font-weight: lighter;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.slider::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slider {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>