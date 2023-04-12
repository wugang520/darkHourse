<template>
  <div >

    <ul>
      <li v-for="data in dataList" :key="data" >
         {{data}}
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Film',
  data () {
    return {
      dataList: []
    }
  },
  created () {
    this.$axios({
      url: this.HOST + '/api/student/get/list',
      method: 'GET'
    }).then(res => {
      debugger
      this.dataList = res.data.data
    })
  }
}
</script>
