// import lib
import { lazy } from 'react'

const routes = [
  {
    path: '/admin/dashboard',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/dashboard')),
  }
]

export default routes
