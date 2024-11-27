<script setup>
import { ref } from 'vue'

//Khai báo biến stt để lưu trạng thái đăng nhập
// Trạng thái mặc định là loggedOut
let status = ref('loggedOut')
// Khai báo biến user để lưu trạng thái tài khoản
let user = ref('')
// Khai báo biến password để lưu trạng thái tài khoản

let password = ref('')
let products = ref([
  {
    id: '001',
    name: 'Tai Nghe Chụp Tai Bluetooth Y08',
    price: 45.999,
    image:
      'https://down-vn.img.susercontent.com/file/vn-11134201-23020-0v646y1b0wnvf4.webp',
    isAvailable: true,
  },
  {
    id: '002',
    name: 'Tai nghe xiaomi Redmi Buds 4 Lite',
    price: '359.000',
    image:
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgd3nfxknbp384@resize_w450_nl.webp',
    isAvailable: false,
  },
])
//Hàm đăng nhập
function login() {
  status.value = 'loggingIn'
  // sử dụng hàm setTimeOut để chờ 2s
  setTimeout(() => {
    if (user.value === 'admin' && password.value === 'admin') {
      status.value = 'loggedIn'
    } else {
      status.value = 'loggedOut'
      alert('Vui lòng nhập tên đăng nhập và mật khẩu !')
    }
  }, 2000)
}

// Hàm đăng xuất
function logout() {
  user.value = ''
  password.value = ''
  status.value = 'loggedOut'
}

// Hàm xử lý sự kiện nhấn phím
function handleKeydown(event) {
  if (event.key === 'Enter') {
    login()
  }
}
</script>

<template>
  <div class="card mt-4" v-if="status === 'loggedOut'">
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Tài khoản</label
        >
        <input v-model="user" type="text" class="form-control" id="user" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Mật khẩu</label
        >
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          @keydown="handleKeydown"
        />
      </div>
      <button class="btn btn-primary" @click="login">Đăng nhập</button>
    </div>
  </div>
  <!-- thông báo đăng nhập -->
  <div v-else-if="status === 'loggingIn'" class="alert alert-primary mt-3">
    Đang đăng nhập, vui lòng chờ...
  </div>

  <!-- Hiển thị bảng sản phẩm -->
  <div v-else>
    <div class="alert alert-success mt-3">
      Chào mừng {{ user }}, bạn đã đăng nhập thành công.
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tên</th>
          <th>Mã</th>
          <th>Giá</th>
          <th>Tình trạng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>
            <img :src="product.image" alt="Hình ảnh" style="width: 50px" />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.id }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span
              v-bind:class="{
                'badge bg-success': product.isAvailable === true,
                'badge bg-secondary': product.isAvailable === false,
              }"
            >
              {{ product.isAvailable ? 'Có sẵn' : 'Hết hàng' }}
            </span>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(index)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-secondary mt-2" @click="logout">Đăng xuất</button>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 8px;
  text-align: center;
}
</style>
