// import lib
import { lazy } from 'react'

export default [
  {
    path: '/admin/transactions',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  }
]
