<script setup>
import { ref } from 'vue'
let changeColor = ref(true)

function color() {
  changeColor.value = !changeColor.value
}
let score = ref(8)
</script>

<template>
  <div class="col-md-12">
    <h1 :class="{ changeColor }">Danger</h1>
  </div>

  <button class="btn btn-primary" @click="color">Đổi màu</button>

  <div class="col-md-12">
    <label for="exampleFormControlInput1" class="form-label">Nhập điểm</label>
    <input
      v-model="score"
      type="number"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Nhập điểm"
    />
    <p class="text-success" v-if="score >= 5">Qua môn</p>
    <p class="text-success" v-else>Tạch</p>
  </div>
</template>

<style scoped>
.changeColor {
  color: red;
}
</style>
