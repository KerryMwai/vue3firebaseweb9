import { createRouter, createWebHistory } from 'vue-router'
import ViewEmployee from '../views/ViewEmployeeView.vue'
import AddEmployee from '../views/AddEmployeeView.vue'
import EditEmployee from '../views/EditEmployeeView.vue'
import Dashboard from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/:id',
    name: 'ViewEmployee',
    component: ViewEmployee
  },
  {
    path: '/new-employee',
    name: 'NewEmlpoyee',
   component:AddEmployee
  },
  {
    path: '/edit-employee/:id',
    name:'EditEmployee',
    component: EditEmployee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
