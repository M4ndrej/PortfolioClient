import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import './assets/css/custom.css'
import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
