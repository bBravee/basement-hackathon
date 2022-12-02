import React from "react"
import Logo from "./../images/corner_logo.png"
import './styles/navbar.css'

export default function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-img-wrapper">
                <img className="nav-logo" src={Logo} alt="ikona"></img>
                <h2>Kicker Championships</h2>
            </div>
            <ul className="nav-ol">
                <li>
                    <button type="button" class="btn btn-outline-warning btn-lg">Rejestracja</button>
                </li>
                <li className="vertical-rule"></li>
                <li>
                    <button type="button" class="btn btn-outline-warning btn-lg">Zaloguj</button>
                </li>
            </ul>
        </nav>
    )


}