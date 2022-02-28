import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import ChatRoom from "./ChatRoom";
import { GlobalState } from "../GlobalState";

const api = "http://localhost:3000"

const Home = () => {
    const state = useContext(GlobalState)
    const [patientInfo] = state.patientAPI.info
    const [isPatient] = state.patientAPI.patient

    const [user, setUser] = useState([])
    const [roomId, setRoomId] = useState(false)
    const [pop, setPop] = useState(false)
    const [loading, setLoading] = state.loading


    const getUser = async () => {
        setLoading(!loading)
        const res = await axios.get(`${api}/doctor?limit=99`)
        setUser(res.data.data);
        setLoading(false)
    }

    useEffect(() => {
        getUser()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {isPatient && (
                <>
                    <div className="home-container">
                        {user.filter(f => patientInfo.district?._id === f.district?._id).map(user => (
                            <div className="doctor-container doctor-container-gradient" onClick={e => {
                                setRoomId(user._id)
                                setPop(true)
                            }}>
                                <div className="picture-container">
                                    <div style={{ backgroundImage: `url(${user.img?.url}` }} ></div>
                                </div>
                                <div className="info-container">
                                    <h3>Dr.</h3>
                                    <h1>{user.name}</h1>
                                </div>

                            </div>
                        )

                        )}
                    </div>
                    {roomId && <ChatRoom roomId={roomId} doctors={user} currentPatient={patientInfo} isWho={"isPatient"} setRoomId={setRoomId} pop={pop} setPop={setPop} />}
                </>
            )}
        </>
    );
};

export default Home;