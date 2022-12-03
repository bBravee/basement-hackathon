import React from "react"
import Logo from "./../images/corner_logo.png"
import './styles/navbar.css'


export default function Navbar(props) {

    return (
        <nav className="nav-wrapper">
            <div className="nav-img-wrapper">
                <img className="nav-logo" src={Logo} alt="ikona"></img>
                <h2>Kicker Championships</h2>
            </div>
            <ul className="nav-ol">
                <li>
                    <div>{props.second}</div>
                </li>
                <li className="vertical-rule"></li>
                <li>
                    <div>{props.first}</div>
                </li>
            </ul>
        </nav>
    )


}