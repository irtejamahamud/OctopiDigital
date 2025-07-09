import React from 'react'
import { Link } from 'react-router-dom'

import Home from '../pages/Home'
import { About } from '../pages/About'
import  Dashboard  from '../pages/admin/Dashboard'
import { user } from '../pages/admin/user'
export const Navbar = () => {
  return (
    <div>
        <link to="/">Home</link>
        <link to="/about">About</link>
        <link to="/dashboard">Admin Dashboard</link>
    </div>
  )
}
