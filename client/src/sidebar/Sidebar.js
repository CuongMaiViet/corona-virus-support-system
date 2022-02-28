import React from 'react'
import Menu from './Menu/Menu'
import logo from '../assets/images/logo.svg'
import closeIcon from '../assets/icons/menu-close.svg'

function Sidebar({ active, setToggle, toggle }) {

    const Out = async () => {
        localStorage.clear()
        window.location.replace("/login-portal")
    }

    return (
        <div className={toggle ? "sidebar-container active" : "sidebar-container"}>
            <div className="item top">
                <img alt='logo' className="logo" src={logo} />
                <img className="close" src={closeIcon} alt="menu" onClick={() => { setToggle(false) }} />
            </div>
            <Menu />
            <div className="item">
                <h2 id="logout" style={{ color: "#616161", cursor: "pointer" }} onClick={Out}>Log out</h2>
            </div>
        </div>
    )
}

export default Sidebar
