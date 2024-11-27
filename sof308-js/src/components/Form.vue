<!-- 1. Chưa đăng nhập / đăng xuất 
2. Đang đăng nhập ( chờ 2s)
- Nếu tài khoản và mật khẩu đúng -> hiển thị thông báo chào mừng
- Nếu tài khoản và mk sai -> alert('Thông tin tài khoản và mk chưa đúng') -> chuyển hướng về trạng thái đăng nhập
-->

<script setup>
import { ref } from 'vue'
import Tables from './Tables.vue'

//Khai báo biến stt để lưu trạng thái đăng nhập
// Trạng thái mặc định là loggedOut
let status = ref('loggedOut')
// Khai báo biến user để lưu trạng thái tài khoản
let user = ref('')
// Khai báo biến password để lưu trạng thái tài khoản

let password = ref('')

//Hàm đăng nhập
function login() {
  status.value = 'loggingIn'
  // sử dụng hàm setTimeOut để chờ 2s
  setTimeout(() => {
    if (user.value && password.value) {
      status.value = 'loggedIn'
    } else {
      status.value = 'loggedOut'
      alert('(^.^)')
    }
  }, 2000)
}

// Hàm đăng xuất
function logout() {
  user.value = ''
  password.value = ''
  status.value = 'loggedOut'
}
</script>

<template>
  <div class="card mt-4" v-if="status === 'loggedOut'">
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Tài khoản</label
        >
        <input v-model="user" type="text" class="form-control" id="user" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Mật khẩu</label
        >
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <button class="btn btn-primary" @click="login">Đăng nhập</button>
    </div>
  </div>
  <!-- thông báo đăng nhập -->
  <div
    class="alert alert-primary mt-3"
    role="alert"
    v-else-if="status === 'loggingIn'"
  >
    Đang đăng nhập
  </div>
  <div class="alert alert-primary mt-3" role="alert" v-else>
    Chào mừng {{ user }}
    <Tables />
    <button class="btn btn-secondary mt-2" @click="logout">Đăng xuất</button>
  </div>
</template>

<style scoped></style>
