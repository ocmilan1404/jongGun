<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

let name = ref('')
let age = ref('')
let email = ref('')
const router = useRouter()

// Xử lý khi form được submit
async function handleSubmit() {
  try {
    let student = { name: name.value, age: age.value, email: email.value }
    await axios.post('http://localhost:3000/students', student)

    // Reset form
    name.value = ''
    age.value = ''
    email.value = ''

    // Chuyển hướng về danh sách
    router.push('/students')
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu:', error)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Tên</label>
      <input type="text" id="name" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="age" class="form-label">Tuổi</label>
      <input type="number" id="age" class="form-control" v-model="age" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" class="form-control" v-model="email" />
    </div>
    <button type="submit" class="btn btn-primary">Thêm sinh viên</button>
    <!-- <router-link to="/students" class="btn btn-secondary ms-3"
      >Quay lại</router-link -->
    >
  </form>
</template>

<style scoped></style>
