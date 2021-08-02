<template>
    <div>
        <div class="cont">
            <div class="row mb-4">
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cont-img">
                    </div>
                </div>
            </div>
        </div>
        <!-- <Overlay/> -->
    </div>
</template>

<script>
// import Overlay from './Overlay.vue'

export default {
    components:{
        // Overlay
    }
}
</script>

<style>
.cont{
    padding:30px
}
.cont-img{
    border-radius: 10px;
    overflow: hidden;
    height:150px;
    background-image: url('https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    background-size: cover;
}

</style>