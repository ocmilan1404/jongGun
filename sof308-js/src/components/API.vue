<script setup>
import { ref } from 'vue'
import axios from 'axios'

//ReSTFUL API
// - GET: lấy dữ liệu về
// - POST: Tải dữ liệu lên
// - PUT: Sửa dữ liệu có sẵn
// - Delete: XÓa
// dùng để lưu dữ liệu lấy đc từ hàm fetch
let postData = ref([])

// hàm lấy dữ liệu
async function fetchData() {
  try {
    let response = await axios.get('http://localhost:3000/posts')
    // Lưu dữ liệu lấy đc từ  biến respone vào mảng postData
    postData.value = response.data
  } catch (error) {
    console.log('Lỗi API')
  }
}
fetchData()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in postData">
        <th scope="row">{{ item.id }}</th>
        <td>">{{ item.title }}</td>
        <td>">{{ item.author }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
