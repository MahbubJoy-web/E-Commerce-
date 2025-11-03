import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Otpverification from './Pages/otpverification'
import ResendOtp from './Pages/ResendOtp'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import LayoutOne from './layout/LayoutOne'
import Home from './Pages/Home'
import ProductDetails from './Components/Singleproduct'
import Singleproduct from './Components/Singleproduct'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/otp' element={<Otpverification/>}/>
        <Route path='/resendotp' element={<ResendOtp/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<LayoutOne/>}>
          {/* <Route index element={<Home/>}/> */}
          <Route path='/singelProduct' element={<Singleproduct/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={myRoute} />
     <ToastContainer/>

    </>
  )
}

export default App
