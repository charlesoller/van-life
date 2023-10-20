import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/vanlife_logo.png"

export default function Header(){
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="The text logo of #VANLIFE in bolded, capitalized letters." />
            </Link>
            <nav className="header__nav">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/host">Host</Link>
            </nav>
        </header>
    )
}
