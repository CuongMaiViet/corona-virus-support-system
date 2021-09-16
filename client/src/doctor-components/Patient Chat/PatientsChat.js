import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom';
import "./GetHealthPatient.css"
import { toast } from 'react-toastify'

function Patients(props) {
    const state = useContext(GlobalState)
    const [healthDeclares, setHealthDeclares] = state.getHealthDeclareForDoctor.healths
    const [filter, setFilter] = state.getHealthDeclareForDoctor.filter
    const [trueOrFalse, setTrueOrFalse] = state.getHealthDeclareForDoctor.trueOrFalse
    const [page, setPage] = state.getHealthDeclareForDoctor.page
    const [realLength] = state.getHealthDeclareForDoctor.realLength

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

    console.log(healthDeclares);

    return (
        <div>
            <div className="filter-section">
                <div className="filter-by-status">
                    <label>Choose a condition: </label>
                    <select className="filterCondition" name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
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
                                onChange={e => setTrueOrFalse(e.target.value)}
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

            <table className="display">
                <thead>
                    <tr>
                        <th>health declaration ID</th>
                        <th>patient</th>
                        <th>covid</th>
                        <th>vaccinated</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                {healthDeclares.map(health => (
                    <tbody key={health._id}>
                        <tr>
                            <td>{health._id}</td>
                            <td>{health.user_id?.name}</td>
                            <td>{health.covid ? 'positive' : 'negative'}</td>
                            <td>{health.vaccinated ? 'approved' : 'disapproved'}</td>
                            <td>{health.status ? 'got medicine' : 'no medicine'}</td>
                            <td>
                                <button>view health</button>
                                {trueOrFalse === 'false' &&
                                    <Link to={`/doctor/prescriptions/medicine/${health._id}`}>
                                        add medicine
                                    </Link>
                                }
                                {trueOrFalse === 'true' &&
                                    <button>view medicine</button>
                                }
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Patients
