import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {

    const [bar, setBar] = useState(false);
    const [menu, setMenu] = useState("home");

    const handleBar = () => {
        setBar(!bar);
    }

    return (
        <section className="header">

            <div className="flex">

                <a href="/" className='logo'>Hotel Pacific</a>
                <a href="/availability" className='btn'>check availability</a>
                <div id="menu-btn" className='fa-bars'>
                    <FontAwesomeIcon icon={faBars} className='bar-icon' onClick={handleBar}/>
                </div>

            </div>

            <div className={`navbar ${bar ? 'active' : ''}`}>

                <a href="/" onClick={() => setMenu("home")}>home</a>
                <a href="/about" onClick={() => setMenu("about")}>about</a>
                <a href="/reservation" onClick={() => setMenu("reservation")}>reservation</a>
                <a href="/gallery" onClick={() => setMenu("gallery")}>gellary</a>
                <a href="/contact" onClick={() => setMenu("contact")}>contact</a>
                <a href="/review" onClick={() => setMenu("review")}>reviews</a>

            </div>

        </section>
  )
}

export default Navbar