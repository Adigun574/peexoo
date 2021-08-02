<template>
<div class="navbar-container">
    <div class="header">
      <div>
          <img src="https://www.peexoo.ai/img/logo.71d57f7c.png" height="30px">
      </div>
      <div class="flex-2">
          <div class="flex-2-1">
              <p class="flex-2-1-p">Business Manager</p>
              <p class="flex-2-1-p">MarketPlace</p>
              <p>XooCam</p>
          </div>
          <p><span class="join">Join Peexoo</span> <i class="fa fa-caret-down caret-icon"></i></p>
      </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.navbar-container{
    border-bottom: 2px solid #f4f4f4;
}
.header{
    display: flex;
    justify-content: space-between;
    padding:15px 40px 0 40px;
}
.flex-2{
    display: flex;
    justify-content: space-between;
}
.flex-2-1{
    display: flex;
    margin-right: 80px;
    justify-content: space-evenly;
}
.flex-2-1-p{
    margin-right: 30px;
}
.join{
    color:#F29F05;
}
.caret-icon{
    color:#919191;
}

</style>