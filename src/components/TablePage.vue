<template>
  <div>
      <div class="table-div">
          <table>
              <thead>
                  <td>Title</td>
                  <td>Category</td>
                  <td>Items</td>
                  <td>Date Created</td>
                  <td>Amount</td>
              </thead>
              <!-- <tr v-if="eventt in events" :key="item.id">
                  <td>{{eventt.title}}</td>
                  <td>{{eventt.category}}</td>
                  <td>{{eventt.item}}</td>
                  <td>{{eventt.date}}</td>
                  <td>{{eventt.amount}}</td>
              </tr> -->
              <tr>
                  <td>Wedding Classic</td>
                  <td>Wedding</td>
                  <td>15</td>
                  <td>5th Sep, 2020</td>
                  <td>₦350,000</td>
              </tr>
              <tr>
                  <td>Wedding Classic</td>
                  <td>Wedding</td>
                  <td>15</td>
                  <td>5th Sep, 2020</td>
                  <td>₦350,000</td>
              </tr>
              <tr>
                  <td>Wedding Classic</td>
                  <td>Wedding</td>
                  <td>15</td>
                  <td>5th Sep, 2020</td>
                  <td>₦350,000</td>
              </tr>
              <tr>
                  <td>Wedding Classic</td>
                  <td>Wedding</td>
                  <td>15</td>
                  <td>5th Sep, 2020</td>
                  <td>₦350,000</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
                events:[
                {
                    id:'1',
                    title:'Wedding Classic',
                    category:'Wedding',
                    items:'15',
                    date:'5th Sep, 2020',
                    amount:'350,000'
                }
                ]
        }
    },
    
}
</script>

<style>
.table-div{
    /* margin-top: 20px; */
    padding:30px;
}
table{
    width:100%;
    font-size: 14px;
}
thead td{
    background-color: #fef5e6;
    padding:10px;
    border-radius: 5px;
}
tr td{
    padding:10px;
}
</style>