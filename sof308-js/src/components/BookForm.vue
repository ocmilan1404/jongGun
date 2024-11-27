<script setup>
import { ref } from 'vue'
let tenSach = ref('')
let tacGia = ref('')
let giaTien = ref('')
let danhMuc = ref('')

let emit = defineEmits()
function handleSubmit() {
  emit('add-book', {
    tenSach: tenSach.value,
    tacGia: tacGia.value,
    giaTien: giaTien.value,
    danhMuc: danhMuc.value,
  })
}
</script>

<template>
  <div class="col-md-12">
    <form @submit.prevent="handleSubmit">
      <label for="" class="form-label">Tên sách</label>
      <input
        v-model.trim="tenSach"
        type="text"
        class="form-control"
        id="tenSach"
      />
      <div class="mb-3">
        <label for="" class="form-label">Tác giả</label>
        <input
          v-model.trim="tacGia"
          type="text"
          class="form-control"
          id="tacGia"
          placeholder=""
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Giá tiền</label>
        <input
          v-model.trim="giaTien"
          type="number"
          class="form-control"
          id="giaTien"
          placeholder=""
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Danh mục</label>
        <input
          v-model.trim="danhMuc"
          type="text"
          class="form-control"
          id="danhMuc"
          placeholder=""
        />
      </div>
      <button class="btn btn-primary">Thêm sách</button>
    </form>
  </div>
</template>

<style scoped></style>
