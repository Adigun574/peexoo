<template>
    <div>
        <div class="sort-by">
            <p>Sort by image category</p>
            <select class="mb-3">
                <option>All</option>
                <option>Food</option>
                <option>Food</option>
                <option>Food</option>
                <option>Food</option>
            </select>
        </div>
        <div class="cont">
            <div class="row mb-4">
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img" @click="showDetails">
                    </div>
                </div>
            </div>            
        </div>
        <Overlay v-if="showOverlay" @hideOverlay="changeOverlayView($event)"/>
    </div>
</template>

<script>
import Overlay from './Overlay.vue'

export default {
    data: function () {
            return {
                showOverlay:false
            }
    },
    components:{
        Overlay
    },
    methods:{
        showDetails(){
            this.showOverlay = true
        },
        changeOverlayView(status){
            this.showOverlay = status
        },
    }
}
</script>

<style>
.sort-by{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
select{
    margin-left: 20px !important;
    background-color: #fef5e6;
    padding:10px;
    border:none;
    border-radius: 3px;
}
.cont{
    padding:30px;
    padding-top:10px
}
.cont-img{
    border-radius: 10px;
    overflow: hidden;
    height:150px;
    background-image: url('https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    background-size: cover;
    cursor:pointer;
}

</style>