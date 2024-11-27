<script setup>
import { ref } from 'vue'
let status = ref(false)
let number = ref(0)
function counter(so) {
  number.value += so
}

function giamDi() {
  if (number.value > 0) number.value--
}

function reset() {
  number.value = 0
}

function doiTT() {
  status.value = !status.value
}
</script>

<template>
  <h1>{{ number }}</h1>
  <button v-on:click="counter(4)" class="btn btn-primary">Tăng đi</button>
  <button v-on:click="giamDi" class="btn btn-warning">Giảm đi</button>
  <button v-on:click="reset" class="btn btn-danger">Đặt lại đi</button>
  <button v-on:click="doiTT" class="btn btn-danger">
    {{ status ? 'Ẩn ND' : 'Hiện ND' }}
  </button>
  <p v-show="status">Nội dung</p>
</template>

<style scoped></style>
