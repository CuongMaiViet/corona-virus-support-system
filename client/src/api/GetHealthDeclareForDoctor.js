import { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetHealthDeclareForDoctor(token) {
    const [healths, setHealths] = useState([])
    const [callback, setCallBack] = useState(false)
    const [filter, setFilter] = useState('status')
    const [trueOrFalse, setTrueOrFalse] = useState("false")
    const [limit, setLimit] = useState(1)
    const [page, setPage] = useState(1)
    const [realLength, setRealLength] = useState(0)

    const getHealth = async () => {
        const res = await axios.get(`http://localhost:3000/health/doctor?limit=${limit * 5}&${filter}=${trueOrFalse}&page=${page}`, {
            headers: { Authorization: token }
        })
        setHealths(res.data.data)
    }

    const getRealLength = async () => {
        const res = await axios.get(`http://localhost:3000/health/doctor?limit=999999`, {
            headers: { Authorization: token }
        })
        setRealLength(res.data.data.length)
    }

    useEffect(() => {
        if (token) {
            getHealth()
            getRealLength()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, callback, filter, trueOrFalse, page, limit])

    return {
        healths: [healths, setHealths],
        callback: [callback, setCallBack],
        filter: [filter, setFilter],
        trueOrFalse: [trueOrFalse, setTrueOrFalse],
        limit: [limit, setLimit],
        page: [page, setPage],
        realLength: [realLength, setRealLength]
    }
}
