<script setup>
import { reactive, ref, watch } from 'vue'
let objs = reactive([
  {
    title: 'DG',
    description:
      'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...',
    image: 'https://i.pinimg.com/736x/f9/e7/17/f9e717e75fb68da7af309dbfe18e3b4d.jpg',
  },
  {
    title: 'Park Hyung Suk',
    description:
      'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại thực phẩm và rượu thuốc khác. Với một lượng nhỏ gia vị món ăn đã thêm hương thơm và vị hấp dẫn...',
    image: 'https://i.pinimg.com/736x/81/9e/80/819e805a8705f1801120a5d6bd7d87d7.jpg',
  },
  {
    title: 'Jong Gun',
    description:
      'Đậu lăng, đậu xanh, đậu phộng, đậu Hà Lan chứa rất cao protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim mạch...',
    image: 'https://i.pinimg.com/736x/f9/2d/e3/f92de3b8a666c0017dfafa48f0f80d47.jpg',
  },
])
</script>
<template>
  <div class="container">
    <div class="row">
        <div class="col-md-4" v-for="(obj,index) in objs" :key="index">
                    <div class="card h-100">
          <img :src="obj.image" class="card-img-top" alt="Image" />
          <div class="card-body">
            <h5 class="card-title">{{ obj.title }}</h5>
            <p class="card-text">{{ obj.description }}</p>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>