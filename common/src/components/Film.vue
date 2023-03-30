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
      url: 'https://m.maizuo.com/gateway?k=479750',
      method: 'GET',
      Headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16800149252185451158896641"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.dataList = res.data.data.films
    })
  }
}
</script>
