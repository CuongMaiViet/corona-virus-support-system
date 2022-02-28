import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import PatientSidebarItems from './sidebar/PatientSidebarItems'
import AdminSidebarItems from './sidebar/AdminSidebarItems'
import DoctorSidebarItems from './sidebar/DoctorSidebarItems'
import menuIcon from './assets/icons/menu.svg'

function Layout(props) {
    const location = useLocation();
    let HeadingTitle = ""
    let HeadingIcon = ""
    const [toggle, setToggle] = useState(false)

    if (location.pathname.startsWith("/patient")) {
        for (let i = 0; i < PatientSidebarItems.length; i++) {
            if (PatientSidebarItems[i].link === location.pathname) {
                HeadingTitle = PatientSidebarItems[i].title;
                HeadingIcon = PatientSidebarItems[i].icon_blue;
            }
        }
    }

    if (location.pathname.startsWith("/doctor")) {
        for (let i = 0; i < DoctorSidebarItems.length; i++) {
            if (DoctorSidebarItems[i].link === location.pathname) {
                HeadingTitle = DoctorSidebarItems[i].title;
                HeadingIcon = DoctorSidebarItems[i].icon_blue;
            }
        }
    }

    if (location.pathname.startsWith("/admin")) {
        for (let i = 0; i < AdminSidebarItems.length; i++) {
            if (AdminSidebarItems[i].link === location.pathname) {
                HeadingTitle = AdminSidebarItems[i].title;
                HeadingIcon = AdminSidebarItems[i].icon_blue;
            }
        }
    }

    return (
        <div style={{ width: "100vw" }} >
            <div className="dashboard-container">
                <Sidebar toggle={toggle} setToggle={setToggle} />
                <div className="spacer"></div>
                <div className="main-container">
                    <div className="heading-container">
                        <div>
                            <img className="heading-icon" src={HeadingIcon} alt='headingicon' />
                            <h1>{HeadingTitle}</h1>
                        </div>
                        <img className="menu" src={menuIcon} alt="menu" onClick={() => { setToggle(true) }} />
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
