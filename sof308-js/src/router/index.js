import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import App from '@/App.vue'
import Book from '@/components/Book.vue'
import API from '@/components/API.vue'
import StudentList from '@/components/StudentList.vue'
import StudentAdd from '@/components/StudentAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //   path: '/',
      //   name: 'app',
      //   component: App,
      // },
      // {
      //   path: '/book',
      //   name: 'book',
      //   component: Book,
      // },
      path: '/students',
      component: StudentList,
    },
    {
      path: '/students/add',
      component: StudentAdd,
    },
  ],
})

export default router
