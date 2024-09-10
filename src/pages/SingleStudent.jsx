import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

const SingleStudent = () => {
    const [data, setData] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
            }).catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            <div id='div'>
            <h2>{ data ? data.name : "loading..."}</h2>
            <h3>{ data ? data.username : "loading..."}</h3>
            <p>{ data ? data.email : "loading..."}</p>
            <p>{ data ? data.phone : "loading..."}</p>
            <p>{ data ? data.company.name : "loading..."}</p>
            </div>
        </>
    )
}

export default SingleStudent