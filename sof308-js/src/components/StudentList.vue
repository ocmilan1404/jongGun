<script setup>
import { ref } from 'vue';
import axios from 'axios';

let students = ref([]);

// Lấy dữ liệu từ API
async function fetchData() {
  try {
    let response = await axios.get('http://localhost:3000/students');
    students.value = response.data;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu:', error);
  }
}

// Gọi API khi khởi tạo
fetchData();
</script>

<template>
  <div>
    <router-link to="/students/add" class="btn btn-primary mb-3">Thêm Sinh Viên</router-link>
    <div class="container mt-4">
      <div class="card mb-2" v-for="(b, index) in students" :key="index">
        <div class="card-body">
          <h5 class="card-title">ID: {{ index + 1 }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tên: {{ b.name }}</h6>
          <p class="card-text">Tuổi: {{ b.age }}</p>
          <p class="card-text">Email: {{ b.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
}
.card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>