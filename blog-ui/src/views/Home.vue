<!--
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-09 15:47:27
 * @LastEditTime: 2021-08-09 16:02:27
 * @LastEditors: 张健66
-->
<template>
  <div class="home">
    <div @click="test">123123</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    test () {
      // 获取远端图片
      axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/api/blog/list',
        responseType: 'application/json'
      })
        .then(function (response) {
          
          console.log(response)
        })
    }
  }
}
</script>
