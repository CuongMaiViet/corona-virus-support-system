import Navbar from "./Navbar"
import { useContext, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { GlobalState } from "../GlobalState";

export default function LoginPatient() {
    const endPoint = "http://localhost:3000"

    const state = useContext(GlobalState)
    const [loading, setLoading] = state.loading
    const [user, setUser] = useState({
        email: '',
        password: '',
    })


    //On change for user
    const onChangeValue = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const getRole = async (token) => {
        const response = await axios.get("http://localhost:3000/user/info", {
            headers: {
                Authorization: token
            }
        })
        setLoading(!loading)
        return response.data.role === 1 ? window.location.replace('/admin/patients') : window.location.replace('/patient/profile')
    }

    //Register check
    const loginSubmit = async e => {
        e.preventDefault()
        try {
            setLoading(!loading)
            const response = await axios.post(endPoint + "/user/login", { ...user },
                { withCredentials: 'include' })
            getRole(response.data.accessToken)

            localStorage.setItem('isLogin', true)
            toast(`User ${user.email} has been successfully login !`)
            // getRole(response.data.accessToken)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error.response.data.msg);
            toast(error.response.data.msg)
        }
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }} >
            <Navbar />

            <div className="login-container">
                <h1 className='asdas'>
                    Login as a patient account
                </h1>
                <div className='divider'>
                </div>
                <div className="login-form">
                    <div className="dashboardinput-container">
                        <input className="editable" type="email" id="email" name="email" value={user.email} onChange={onChangeValue} placeholder="Email.." />
                        <br />
                        <input className="editable" type="text" id="password" name="password" value={user.password} onChange={onChangeValue} placeholder="Password.." />
                        <br />
                        {/* <input type="submit" value="Log In" className="button blue" /> */}
                        <button id='patientlogin' className="button blue" onClick={loginSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}