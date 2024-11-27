<script setup>
import { ref } from 'vue'

let fullname = ref('')
let email = ref('')
let age = ref()
let status = ref(false)
function layThongTin() {
  console.log(`Họ và tên: ${fullname.value}`)
  console.log(`Email: ${email.value}`)
  console.log(`Tuổi: ${age.value}`)
  if (fullname.value && email.value && age.value) {
    status.value = true
  } else {
    alert('Bạn chưa nhập gì')
  }
}

// function hamSpace() {
//   alert('Đã ấn space ^^')
// }
</script>

<template>
  <h1>Thông tin</h1>
  <form @submit.prevent="layThongTin">
    <div class="mb-3">
      <label for="hoTen" class="form-label">Họ và tên</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model.trim="fullname"
      />
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model.trim="email"
      />
      <label for="tuoi" class="form-label">Tuổi</label>
      <input
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        v-model.number="age"
      />
    </div>
    <button type="button" @click="layThongTin" class="btn btn-primary">
      Lấy thông tin
    </button>
  </form>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">STT</th>
        <th scope="col">TÊN</th>
        <th scope="col">EMAIL</th>
        <th scope="col">TUỔI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{{ fullname }}</td>
        <td>{{ email }}</td>
        <td>{{ age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
