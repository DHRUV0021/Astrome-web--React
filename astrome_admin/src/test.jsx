import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const test = () => {

    const auth = localStorage.getItem('user')

    return auth ? <Outlet /> : <Navigate to="/Admin" />
}

export default test














