import React from 'react'
import Home from '../pages/Home'
import { Dashboard,user } from '../pages/admin/Dashboard'
export const AdminNavbar = () => {
  return (
    <>
    <div>
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user">User</Link>
        </nav>
    </div>
    </>
  )
}
