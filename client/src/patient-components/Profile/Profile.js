import React, { useContext } from 'react'
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import HomeAddress from './HomeAddress'
import { GlobalState } from '../../GlobalState';
import { toast } from 'react-toastify';

function Profile(props) {
    const state = useContext(GlobalState)
    const [info] = state.patientAPI.info
    const [token] = state.token
    const [callback, setCallback] = state.patientAPI.callback
    const [loading, setLoading] = state.loading

    const updateInfo = async (e) => {
        e.preventDefault()
        setLoading(!loading)
        try {
            
            await fetch("http://localhost:3000/user/update", {
                method: 'PUT',
                headers: {
                    "Authorization": token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": document.getElementById("name").value,
                    "district": {
                        "_id": document.getElementById("district").value,
                    },
                    "phone": document.getElementById("phone").value,
                    img: info.img
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    toast(data.msg)
                    
                })
                .then(setCallback(!callback))
        } catch (error) {
            toast(error.response.data.msg)
        }
        setLoading(false)
    }

    return (
        <div className="dashboardmain-container">
            <div className="row">
                <div className="header">PROFILE PICTURE</div>
                <ProfilePicture setLoading={setLoading} info={info} token={token} callback={callback} setCallback={setCallback} />
            </div>
            <div className="row">
                <div className="header">PERSONAL INFORMATION</div>
                <PersonalInfo setLoading={setLoading} info={info} />
            </div>
            <div className="row">
                <div className="header">HOME ADDRESS</div>
                <HomeAddress setLoading={setLoading} info={info} />
            </div>
            <div className="row">
                <button className="button green" onClick={updateInfo}>Save</button>
            </div>
        </div>
    )
}

export default Profile
