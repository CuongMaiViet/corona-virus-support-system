import React, { useContext } from 'react'
import ProfilePicture from './ProfilePicture'
import Certificate from './Certificate'
import PersonalInfo from './PersonalInfo'
import Location from './Location'
import { GlobalState } from '../../GlobalState'
import { toast } from 'react-toastify';


function Profile(props) {
    const state = useContext(GlobalState)
    const [doctorInfo] = state.doctorAPI.doctorInfo
    const [doctorToken] = state.doctorToken
    const [callbackDoctor, setCallbackDoctor] = state.doctorAPI.callbackDoctor
    const [loading, setLoading] = state.loading

    const updateInfo = async (e) => {
        e.preventDefault()
        setLoading(!loading)
        await fetch("http://localhost:3000/doctor/update", {
            method: 'PUT',
            headers: {
                "Authorization": doctorToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": document.getElementById("name").value,
                "district": {
                    "_id": document.getElementById("district").value,
                },
                "phone": document.getElementById("phone").value,
                "experience": document.getElementById("experience").value
            })
        })
            .then(resp => resp.json())
            .then(data => {
                toast(data.msg)
            })
            .then(setCallbackDoctor(!callbackDoctor))
        setLoading(false)
    }

    return (
        <div className="dashboardmain-container">
            <div className="row">
                <div className="header">PROFILE PICTURE</div>
                <ProfilePicture setLoading={setLoading} doctorInfo={doctorInfo} doctorToken={doctorToken} callbackDoctor={callbackDoctor} setCallbackDoctor={setCallbackDoctor} />
            </div>
            <div className="row">
                <div className="header">PERSONAL INFORMATION</div>
                <PersonalInfo doctorInfo={doctorInfo} />
            </div>
            <div className="row">
                <div className="header">CERTIFICATE</div>
                <Certificate setLoading={setLoading} doctorInfo={doctorInfo} doctorToken={doctorToken} callbackDoctor={callbackDoctor} setCallbackDoctor={setCallbackDoctor} />
            </div>
            <div className="row">
                <div className="header">ASSIGNED LOCATION</div>
                <Location doctorInfo={doctorInfo} />
            </div>
            <div className="row">
                <button className="button green " onClick={updateInfo}>Save</button>
            </div>
        </div>
    )
}

export default Profile
