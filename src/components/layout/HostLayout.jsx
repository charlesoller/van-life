import React from "react"
import  {NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    return (
        <div>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} end to="/host">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/income">Income</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
