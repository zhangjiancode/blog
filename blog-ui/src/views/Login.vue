<!--
 * @Description: 登录页面
 * @Author: 张健66
 * @Date: 2021-08-10 22:36:31
 * @LastEditTime: 2021-08-12 18:16:03
 * @LastEditors: 张健66
-->
<template>
  <div class="login-block">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="getList">获取列表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login,getList } from '@/api'
export default {
  name: "Login",
  data () {
    return {
      form: {
        userName: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      const _this = this
      login(_this.form).then(res=>{

      })
    },
    getList () {
      let param = {
        author:'zhangjian',
        keyword:''
      }
      getList(param).then(res=>{

      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-block {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
</style>