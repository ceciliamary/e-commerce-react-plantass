import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CartContent from './Compnents/CartContent/CartContent.jsx'
import "./index.css"
import ContextProvider from './Context/Context.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />
},
{
  path: '/Cart',
  element: <CartContent />
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
