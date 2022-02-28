import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import "../../doctor-components/Patient Chat/GetHealthPatient.css"
import MedicinePopup from './MedicinePopup';
import HealthPopup from './HealthPopup';
import viewHealth from '../../assets/icons/view-medicine.svg'
import prescriptions from '../../assets/icons/prescriptions.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import { toast } from 'react-toastify'
import axios from 'axios'

function AllHealth(props) {
    const state = useContext(GlobalState)
    const [healthDeclares] = state.getHealthDeclareForPatient.healths
    const [filter, setFilter] = state.getHealthDeclareForPatient.filter
    const [trueOrFalse, setTrueOrFalse] = state.getHealthDeclareForPatient.trueOrFalse
    const [page, setPage] = state.getHealthDeclareForPatient.page
    const [realLength] = state.getHealthDeclareForPatient.realLength
    const [callback, setCallBack] = state.getHealthDeclareForPatient.callback

    const [token] = state.token
    const [loading, setLoading] = state.loading

    const [modalDisplay, setModalDisplay] = useState("")
    const [modalDisplayHealth, setModalDisplayHealth] = useState("")

    const trueorfalse = ["true", "false"]
    const filterName = [
        "fever", "cough", "breathing", "sorethroat", "phlegm", "runnynose", "tiredness",
        "blocknose", "losssmell", "musclepain", "vaccinated", "covid", "status"
    ]
    const totalPages = Math.ceil(realLength / 10)

    const pageIncrease = () => {
        if (page > 0 && page !== totalPages) {
            setPage(i => i + 1)
        } else {
            toast("No more data available, please go back ")
        }
    }

    const pageDecrease = () => {
        if (page > 1) setPage(i => i - 1)
    }

    const deleteHealth = async (e) => {
        const id = e.currentTarget.value
        window.confirm(`Confirm to delete Health Declaration ID: ${id}`)

        setLoading(!loading)
        try {
            await axios.delete(`http://localhost:3000/health/delete/${id}`, {
                headers: {
                    Authorization: token,
                }
            })
            toast("Health declaration " + id + " has been deleted")
            setCallBack(!callback)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)

    }

    // console.log(healthDeclares)

    return (
        <div>
            <div className="filter-section">
                <div className="filter-by-status">
                    <label > Choose a conditions:</label>
                    <select className="filterCondition" name="filter" id="filter" value={filter} onChange={e => {
                        setPage(1)
                        setFilter(e.target.value)
                    }
                    }>
                        {filterName.map((name, i) =>
                            <option key={i} value={name}>{name}</option>
                        )}
                    </select>
                </div>

                <div className="true-false">
                    {trueorfalse.map((ToF, i) => (
                        <label key={i} htmlFor={ToF}>
                            {ToF === 'true' ? 'prescribed' : 'unprescribed'}
                            <input type="radio" name="radiovalues" value={ToF}
                                onChange={e => {
                                    setTrueOrFalse(e.target.value)
                                    setPage(1)
                                }}
                                checked={ToF === trueOrFalse} id={ToF}
                            />
                        </label>
                    ))}
                </div>
                <div className="paginate">
                    <button className='btn-prev' onClick={pageDecrease}> <i className="fas fa-chevron-left"></i> Prev page </button>
                    <input className='inputPage' min='1' max={totalPages} type="number" value={page} onChange={e => setPage(e.target.value)} />
                    <button className='btn-next' onClick={pageIncrease}> Next page <i className="fas fa-chevron-right"></i> </button>
                </div>
            </div>
            {/* <div className="display"> */}
            <div className="healthdeclare-container">
                <table className="display">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Health Declaration ID</th>
                            <th>Doctor name</th>
                            <th>Vaccinated</th>
                            <th>Covid</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {healthDeclares.map(health => (
                        <tbody key={health._id}>
                            <tr >

                                <td>{health.createdAt.substring(0, 10)}</td>
                                <td style={{ color: "#00A473", cursor: "pointer" }} onClick={() => { setModalDisplayHealth(health._id) }}>{health._id}</td>
                                <td>{health.doctor_id?.name}</td>
                                <td> {health.vaccinated ? "true" : "false"}</td>
                                <td> {health.covid ? "true" : "false"}</td>
                                <td style={{ cursor: "pointer", textAlign: "center" }} >
                                    {trueOrFalse == "true" && <img alt='hover icon' onClick={() => { setModalDisplay(health._id) }} className="hover icon" src={prescriptions} />}

                                    <img alt='hover icon' onClick={() => { setModalDisplayHealth(health._id) }} className="hover icon" style={{ marginLeft: "1rem" }} src={viewHealth} />
                                </td>
                                <td><button className="button-none" value={health._id} onClick={deleteHealth}>
                                    <img className="icon hover" src={deleteIcon} alt="delete icon" />
                                </button>
                                </td>
                                {trueOrFalse == "true" && <td><MedicinePopup key={health._id + "medicine"} modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} healthData={health} medicineData={health.medicineform_id} /></td>}
                                <td><HealthPopup key={health._id} modalDisplayHealth={modalDisplayHealth} setModalDisplayHealth={setModalDisplayHealth} healthData={health} /></td>

                            </tr>
                        </tbody>

                    ))}

                </table>
            </div>

            {/* </div> */}
        </div>
    )
}

export default AllHealth
