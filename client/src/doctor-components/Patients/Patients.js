import React, { useContext } from 'react'
import FilterPatient from '../../Feature/FilterPatient';
import { GlobalState } from '../../GlobalState';
// import "./patient.css"
function Patients(props) {
    const state = useContext(GlobalState)
    const [data] = state.getAllPatientAPI.patients
    const [sort, setSort] = state.getAllPatientAPI.sort
    // console.log(sort)

    return (
        <div>
            <h2 className="list"> Patient List</h2>
            <FilterPatient />
            <div class="patients-container">
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>
                            {sort === '' || sort === 'sort=+name' || sort === undefined
                                ? <button
                                    value="sort=-name" onClick={e => setSort(e.target.value)}>
                                    Name <i className="fas fa-arrow-down"></i>
                                </button>
                                : <button
                                    value="sort=+name" onClick={e => setSort(e.target.value)}>
                                    Name <i className="fas fa-arrow-up"></i>
                                </button>
                            }
                        </th>
                        <th>
                            {sort === '' || sort === 'sort=+email' || sort === undefined
                                ? <button
                                    value="sort=-email" onClick={e => setSort(e.target.value)}>
                                    Email <i className="fas fa-arrow-down"></i>
                                </button>
                                : <button
                                    value="sort=+email" onClick={e => setSort(e.target.value)}>
                                    Email <i className="fas fa-arrow-up"></i>
                                </button>
                            }
                        </th>
                        <th>
                            {sort === '' || sort === 'sort=+phone' || sort === undefined
                                ? <button
                                    value="sort=-phone" onClick={e => setSort(e.target.value)}>
                                    Phone <i className="fas fa-arrow-down"></i>
                                </button>
                                : <button
                                    value="sort=+phone" onClick={e => setSort(e.target.value)}>
                                    Phone <i className="fas fa-arrow-up"></i>
                                </button>
                            }
                        </th>
                        <th>District</th>
                        <th>City</th>


                    </tr>
                    {data.map(i => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                            <td>{i.district?.name}</td>
                            <td>{i.district?.city?.name}</td>
                        </tr>
                    ))}

                </table>
            </div>

        </div>
    )
}

export default Patients
