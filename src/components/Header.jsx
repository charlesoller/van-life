import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/vanlife_logo.png"

export default function Header(){
    const navigate = useNavigate();

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        navigate("../..")
    }

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="The text logo of #VANLIFE in bolded, capitalized letters." />
            </Link>
            <nav className="header__nav">
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="host">Host</NavLink>
                <button onClick={fakeLogOut}>X</button>
            </nav>

        </header>
    )
}
