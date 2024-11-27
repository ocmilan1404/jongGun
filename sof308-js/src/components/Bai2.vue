<!-- Code JS nằm trong thẻ Script -->
<script setup>
const products = [
  {
    name: 'PG-1',
    description:
      'Yamaha PG-1 ra mắt đã gần 2 tuần nhưng sức nóng của dòng xe này có lẽ vẫn chưa hạ nhiệt.',
    price: '29,500,000',
    image: 'http://picsum.photos/id/1/300/300',
  },
  {
    name: 'KIA Sportage 2024',
    description:
      'Kia Sportage 2024 là mẫu xe SUV cỡ vừa của thương hiệu Kia. Xe có thiết kế ngoại thất táo bạo, hiện đại và ấn tượng, cùng nội thất với nhiều trang bị cao cấp..',
    price: 'Một tỷ bốn trăm',
    image: 'http://picsum.photos/id/2/300/300',
  },
  {
    name: 'Fortuner',
    description:
      'Fortuner 7 chỗ là một trong những mẫu xe SUV 7 chỗ hàng đầu tại Việt Nam, được Toyota phân phối từ năm 2009.',
    price: 'Một tỷ rưỡi',
    image: 'http://picsum.photos/id/3/300/300',
  },
]
</script>

<!-- Code html nằm trong thẻ template -->
<template>
  <h1 class="text-center">Danh sách sản phẩm</h1>
  <div class="col-md-4">
    <div class="card">
      <img
        src="https://yss.vn/wp-content/uploads/2023/12/yamaha-pg1-1.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ products[0].name }}</h5>
        <p class="card-text">{{ products[0].description }}</p>
        <p class="card-text">Giá :{{ products[0].price }}</p>
        <a href="#" class="btn btn-primary">Mua ngay</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <img
        src="https://static.wixstatic.com/media/b4dcef_1f92095a014045619757636665a7b1a7~mv2.jpg/v1/fill/w_810,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b4dcef_1f92095a014045619757636665a7b1a7~mv2.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ products[1].name }}</h5>
        <p class="card-text">{{ products[1].description }}</p>
        <p class="card-text">Giá :{{ products[1].price }}</p>

        <a href="#" class="btn btn-primary">Mua ngay</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <img
        src="https://static.wixstatic.com/media/b4dcef_2483883120874f73acaea60f1961dd68~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b4dcef_2483883120874f73acaea60f1961dd68~mv2.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ products[2].name }}</h5>
        <p class="card-text">{{ products[2].description }}</p>
        <p class="card-text">Giá :{{ products[2].price }}</p>

        <a href="#" class="btn btn-primary">Mua ngay</a>
      </div>
    </div>
  </div>
</template>

<!-- CSS cho các thẻ html nằm trong thẻ style -->
<style scoped></style>
