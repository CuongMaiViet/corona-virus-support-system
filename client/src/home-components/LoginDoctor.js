import Navbar from "./Navbar"
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalState } from "../GlobalState";

toast.configure()
export default function LoginDoctor() {
    const endPoint = "http://localhost:3000"

    const state = useContext(GlobalState)
    const [loading, setLoading] = state.loading
    const [doctor, setDoctor] = useState({
        email: '',
        password: '',
    })

    //On change for doctor
    const onChangeValue = e => {
        const { name, value } = e.target
        setDoctor({ ...doctor, [name]: value })
    }

    //Register check
    const loginSubmit = async e => {
        e.preventDefault()
        try {
            setLoading(!loading)
            await axios.post(endPoint + "/doctor/login", { ...doctor },
                { withCredentials: 'include' })

            localStorage.setItem('isDoctorLogin', true)
            toast(`Doctor ${doctor.email} has been successfully login !`)
            setLoading(false)
            window.location.replace('/doctor/profile')

        } catch (error) {
            setLoading(false)
            toast(error.response.data.msg)
        }
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }} >
            <Navbar />

            <div className="login-container">
                <h1 className='asdas'>
                    Login as a doctor account
                </h1>
                <div className='divider'>
                </div>
                <div className="login-form">
                    <div className="dashboardinput-container">
                        <input className="editable" type="email" id="email" name="email" value={doctor.email} onChange={onChangeValue} placeholder="Email.." />
                        <br />
                        <input className="editable" type="text" id="password" name="password" value={doctor.password} onChange={onChangeValue} placeholder="Password.." />
                        <br />
                        {/* <input type="submit" value="Log In" className="button blue" /> */}
                        <button id='doctorlogin' className="button blue" onClick={loginSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}