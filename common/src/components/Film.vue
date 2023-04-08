<template>
  <div >

    <ul>
      <li v-for="data in dataList" :key="data" @click="handchang(data)">
         {{data}}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Film',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    axios({
      url: '/hello',
      method: 'GET'
    }).then(res => {
      debugger
      this.dataList = res.data.data
    })
  }
}
</script>
