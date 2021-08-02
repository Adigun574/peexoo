<template>
  <div>
      <!-- <vc-calendar></vc-calendar> -->
      <vc-date-picker v-model="range" is-range color='orange'/>
      <div class="text-div">
          <div class="text-stuff" style="color:#f29f05">
              <p style="font-size:6px" class="mt-1"><i class="fa fa-circle"></i></p>
              <p>Booked</p>
              <p>Orange shaded dates are booked dates</p>
          </div>
          <div class="text-stuff" style="color:#d4d3ce">
              <p style="font-size:6px" class="mt-1"><i class="fa fa-circle"></i></p>
              <p>Available</p>
              <p>Unshaded dates are free dates</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
            return {
                range: {
                start: new Date(2020, 0, 1),
                end: new Date(2020, 0, 5)
                }
            }
    },
    
}
</script>

<style>
.text-div{
    margin-top: 50px;
    width:50%;
}
.text-stuff{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}

</style>