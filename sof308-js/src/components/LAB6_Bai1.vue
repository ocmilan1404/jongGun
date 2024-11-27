<script setup>
import { ref } from 'vue'


// Khai báo 1 biến score giá trị là số
let score = ref(4)
</script>

<template>
  <div class="col-md-12">
    <!-- Sử dụng câu lệnh điều kiện v-if & v-else trong vuejs -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nhập điểm</label>
      <!-- sử dụng v-model để binding dữ liệu 2 chiều dùng
        để kiểm tra điều kiện hiển thị alert -->
      <input
        v-model="score"
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập điểm"
      />
    </div>
    <div class="alert alert-success" v-if="score >= 9">Xuất sắc</div>
    <div class="alert alert-primary" v-else-if="score < 9 && score >= 8">
      Giỏi
    </div>
    <div class="alert alert-secondary" v-else-if="score < 8 && score >= 6.5">
      Khá
    </div>
    <div class="alert alert-info" v-else-if="score < 6.5 && score >= 5">
      Trung bình
    </div>
    <div class="alert alert-danger" v-else>Yếu</div>
  </div>
</template>

<style scoped>

</style>