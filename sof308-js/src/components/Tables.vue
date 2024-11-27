<script setup>
import { reactive } from 'vue'
let props = defineProps({
  status: String,
})
let productList = reactive([
  {
    productName: 'Sản phẩm 1',
    price: 300,
  },
  {
    productName: 'Sản phẩm 2',
    price: 400,
  },
  {
    productName: 'Sản phẩm 3',
    price: 500,
  },
])
</script>

<template>
  <div class="col-md-12">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
