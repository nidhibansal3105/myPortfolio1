import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Hello from './components/Hello.jsx'
import App from './components/App.jsx'
import './index.css'

const router = createBrowserRouter([
  {path: "/", element: <Hello/>},
  {path:"/portfolio", element: <App/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
