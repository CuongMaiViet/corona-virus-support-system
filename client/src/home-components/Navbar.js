import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/logo.svg'
import menuIcon from '../assets/icons/menu.svg'
import closeIcon from '../assets/icons/menu-close.svg'
import { useState } from 'react';

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <div className="nav-container" style={open ? { maxHeight: "100vh" } : { maxHeight: "7rem" }}>
            <div className="logo-container">
                <img className="logo" src={LogoImg} alt="logo" onClick={() => { window.location.replace('/') }} />
                {!open && <img alt='hamburgerr' className="hamburger" src={menuIcon} onClick={() => { setOpen(true) }} />}

                {open &&
                    <img alt='hamburger-closee' className="hamburger-close" src={closeIcon} onClick={() => { setOpen(false) }} />
                }
            </div>
            <div className={open ? "hamburger-bg" : "hamburger-bg active"}></div>
            <div className={open ? "menu mobile" : "menu mobile active"}>
                <Link to="/">Home</Link>
                <Link to="/">How It Works</Link>
                <Link to="/">Contact Us</Link>
            </div>

            <div className={open ? "button-container mobile" : "button-container mobile active"}>
                <Link id="login" to="/login-portal" className="button blue">Login</Link>
                <Link id="register" to="/register" className="button green">Register</Link>
            </div>
            <div className="menu desktop">
                <Link to="/">Home</Link>
                <Link to="/">How It Works</Link>
                <Link to="/">Contact Us</Link>
            </div>

            <div className="button-container desktop">
                <Link id="login" to="/login-portal" className="button blue">Login</Link>
                <Link id="register" to="/register" className="button green">Register</Link>
            </div>
        </div>
    )
}