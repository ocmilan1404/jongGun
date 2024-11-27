<script setup>
let emit = defineEmits()

function thongBao() {
  emit('emitEvent', 'Đây là thông báo')
}
</script>

<template>
  <div class="col-md-12">
    <h1>Emit</h1>
    <button class="btn btn-primary" @click="thongBao">Ấn</button>
  </div>
</template>

<style scoped></style>
