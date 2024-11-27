<!-- import các thành phần của web -->
<script setup>
import { reactive, ref } from 'vue'
// let fullname = 'Nguyen Thanh';
// let studentCode ='PP03082';

// let myCar = {
//   hangXe : 'BMW',
//   mauXe : '520i',
//   kieuXe : 'sedan',
//   soChoNgoi : '5'
// }
import ASMGD1 from './components/ASMGD1.vue'
import Bai2 from './components/Bai2.vue'
import ClassBinding from './components/ClassBinding.vue'
import Form from './components/Form.vue'
import VShow from './components/VShow.vue'
import VEvent from './components/VEvent.vue'
import FormBinding from './components/FormBinding.vue'
import Props from './components/Props.vue'
import Tables from './components/Tables.vue'
import Emits from './components/Emits.vue'
import BookForm from './components/BookForm.vue'
import Book from './components/Book.vue'
let tinNhan = ref('Xin Chàoooooooo')

let tinNhanEmit = ref('')
function emitHandle(tinNhan) {
  tinNhanEmit.value = tinNhan
}
let books = reactive([])

function handleBook(book) {
  books.push(book)
}
</script>
<!-- template viết html -->
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="col-md-12">
    <div class="row">
      <!-- <Bai2 />
      <ClassBinding /> -->
      <!-- <Form /> -->
      <!-- <ASMGD1 /> -->
      <!-- <VShow /> -->
      <!-- <VEvent /> -->
      <!-- <FormBinding /> -->
      <!-- <Props :message="tinNhan" /> -->
      <!-- <Emits @emitEvent="emitHandle" />
      <h2>{{ tinNhanEmit }}</h2> -->
      <!-- Sử dụng Emit để nhận dữ liệu từ người dùng -->
      <BookForm @add-book="handleBook" />
      <!-- SỬ dụng Prop để hiển thị danh sách từ cha -->
      <Book :books="books" />
    </div>
  </div>

  <!-- <div class="alert alert-warning" role="alert">
De hien thi gia tri cua bien
{{ fullname }}
</div>
<div class="alert alert-light" role="alert">
{{studentCode}}</div>

<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li> <img src="https://i.pinimg.com/564x/f9/2d/e3/f92de3b8a666c0017dfafa48f0f80d47.jpg" alt="jong-gun" class="card-img-top"></li>
    <li class="list-group-item">Hãng xe: {{myCar.hangXe}}</li>
    <li class="list-group-item">Kiểu xe: {{ myCar.kieuXe }}</li>
    <li class="list-group-item">Mẫu xe: {{myCar.mauXe}}</li>
    <li class="list-group-item">Số chỗ ngồi: {{myCar.soChoNgoi}}</li>

  </ul>
</div> -->
</template>

<!-- Viết css cho các thẻ -->
<style scoped></style>
