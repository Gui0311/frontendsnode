import React from 'react'
import { Link } from 'react-router-dom'
import "./menus.css"


export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link class="itemMenu" to="/">Pag 1 </Link> </li>
                    <li><Link class="itemMenu" to="/usuarios">Clientes</Link></li>
                    <li><Link class="itemMenu" to="/sobre"> Pag 3 </Link></li>
                    <li><Link class="itemMenu" to="/pessoas"> pessoas </Link></li>
                </ul>
            </nav>
        </header>
    )
}
