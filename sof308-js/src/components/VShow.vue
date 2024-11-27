<script setup>
import { ref, reactive } from 'vue'
let isStatus = ref(false)
let isVisible = ref(false)

let studentList = reactive([
  {
    studentName: 'Phúc Thành',
    studentCode: 'PP03082',
    classCode: 'SD19302',
  },
  {
    studentName: 'Phúc Đăng',
    studentCode: 'PP03080',
    classCode: 'WD19302',
  },
  {
    studentName: 'Kim Nhung',
    studentCode: 'PP03000',
    classCode: 'NO19002',
  },
  {
    studentName: 'Hà Thảo',
    studentCode: 'PP03088',
    classCode: 'SD19302',
  },
  {
    studentName: 'Đỗ Hà',
    studentCode: 'PP03300',
    classCode: 'NO19002',
  },
])
</script>

<template>
  <h1 v-if="isStatus">Ẩn thân chi thuật</h1>
  <h1 v-show="isVisible">Ẩn thân chi thuật</h1>
  <div
    class="card mb-3"
    style="width: 18rem"
    v-for="(student, index) in studentList"
    :key="student.studentCode"
  >
    <ul class="list-group list-group-flush">
      <li>{{ index + 1 }}</li>
      <li class="list-group-item">{{ student.studentName }}</li>
      <li class="list-group-item">{{ student.studentCode }}</li>
      <li class="list-group-item">{{ student.classCode }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
