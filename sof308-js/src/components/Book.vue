<script setup>

let props = defineProps({
  books: Object,
})
</script>

<template>
  <div class="col-md-12">
    <div class="card" v-for="book in books">
      <div class="card-body">
        <h5 class="card-title">{{ book.tenSach }}</h5>
        <p class="card-text">{{ book.tacGia }}</p>
        <p class="card-text">{{ book.giaTien }}</p>
        <p class="card-text">{{ book.danhMuc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
