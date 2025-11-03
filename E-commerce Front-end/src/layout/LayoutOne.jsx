import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nevber from '../Components/Navber/Nevbar'


const LayoutOne = () => {

  return (
    <>
    <div className="flex">
     <Nevber/>
     <Outlet/>
    </div>
    </>
  )
}

export default LayoutOne
