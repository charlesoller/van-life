import React from "react"
import  {NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    return (
        <div className="host">
            <nav className="host__nav">
                <NavLink className={({isActive}) => isActive ? "active-link" : null} end to=".">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="income">Income</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
