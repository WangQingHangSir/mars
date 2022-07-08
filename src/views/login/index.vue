<template>
  <div class="login">
    <div class="main">
      <h1>火星</h1>
      <div>
        <el-form
          ref="LoginForm"
          :rules="loginFormRules"
          :model="loginForm"
          label-width="10px"
          label-position="right"
        >
          <el-form-item prop="userName">
            <el-input
              v-model.trim="loginForm.userName"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              v-model.trim="loginForm.userPwd"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleLoginSubmit"
              class="loginButton"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const LoginForm = ref('')

const loginForm = reactive({
  userPwd: '123456',
  userName: 'admin'
})

const loginFormRules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}

// 登录
const handleLoginSubmit = () => {
  console.log(111)
  LoginForm.value.validate(async (valid) => {
    const response = await store.dispatch('user/login', loginForm)
    if (response.data.code === 200) return router.push('/')
  })
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 400px;
    height: 300px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px 5px rgba(199, 201, 203, 0.30196078431372547);
    h1 {
      font-size: 50px;
      font-weight: 500;
    }
    .loginButton {
      width: 100%;
    }
    .el-form-item {
      height: 40px;
    }
  }
}
</style>
