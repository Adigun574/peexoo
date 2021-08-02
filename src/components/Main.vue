<template>
<div>
  <div class="full-page">
      <div class="top-nav">
          <div class="image-div">
              <div class="image-inner-div">
                <img src="https://images.pexels.com/photos/950243/pexels-photo-950243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="40px" width="40px" style="border-radius:50%">
              </div>
              <p class="show-card mt-3" @click="showCard()">Show Card</p>
          </div>
          <div class="navs">
              <p class="cursor-pointer" v-bind:class="{ 'active-nav': isPortfolio}" @click="toggleView('portfolio')">Portfolio</p>
              <p class="cursor-pointer" v-bind:class="{ 'active-nav': isAvailability}" @click="toggleView('availability')">Availability</p>
              <p class="cursor-pointer" v-bind:class="{ 'active-nav': isPricing}" @click="toggleView('pricing')">Pricing Package</p>
          </div>
          <div class="null">
              <p>null</p>
          </div>
      </div>
      <div class="row main-body-row">
          <div class="col-sm-4">
              <div class="person-card-container">
                <PersonCard v-if="showCardStatus" @hideCard="changeCardView($event)"/>
              </div>
          </div>
          <div class="col-sm-8">
            <ImagesBody v-if="isPortfolio"/>
            <TablePage v-if="isPricing"/>  
            <CalendarPage v-if="isAvailability"/>
          </div>
      </div>
  </div>
<!-- <Overlay/> -->
</div>
</template>

<script>

import ImagesBody from './ImagesBody.vue';
import TablePage from './TablePage.vue';
import PersonCard from './PersonCard.vue';
import CalendarPage from './CalendarPage.vue';
// import Overlay from './Overlay.vue';

export default {
    data: function () {
            return {
                isPortfolio:true,
                isAvailability:false,
                isPricing:false,
                showCardStatus:true
            }
    },
    components: {
        ImagesBody,
        TablePage,
        PersonCard,
        CalendarPage,
        // Overlay
    },
    methods: {
        toggleView(view) {
            if(view == 'portfolio'){
                this.isPortfolio = true
                this.isAvailability = false
                this.isPricing = false
            }
            else if(view == 'availability'){
                this.isPortfolio = false
                this.isAvailability = true
                this.isPricing = false
            }
            else if(view == 'pricing'){
                this.isPortfolio = false
                this.isAvailability = false
                this.isPricing = true
            }
            else{
                this.isPortfolio = true
                this.isAvailability = false
                this.isPricing = false
            }
        },
        showCard(){
            this.showCardStatus = true
        },
        changeCardView(status){
            this.showCardStatus = status
        },
    }
}
</script>

<style>
.full-page{
    background-color: #fffdf7;
}
.top-nav{
    display: flex;
    justify-content: space-around;
    padding-left: 50px;
    padding-right: 50px;
}
.image-div{   
    flex: 2;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.image-inner-div{
    border-radius: 50%;
    height: 40px;
    /* overflow: hidden; */
}
.show-card{
    color:#E39400;
    margin-left: 10px;
}
.navs{
    display: flex;
    justify-content: space-around;
    flex: 3;
    align-items: center;
}
.active-nav{
    background-color: #fef3df;
    border-radius: 10px;
    padding:5px 20px;
    font-weight: bold;
}
.null{
    visibility: hidden;
    flex: 2;
}
.main-body-row{
    padding-left: 50px;
    padding-right: 50px;
}
.person-card-container{
    position: relative;
    bottom: 200px;
}
.cursor-pointer{
    cursor: pointer;
}
</style>