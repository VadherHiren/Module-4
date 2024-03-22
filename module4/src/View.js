import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {
    const [id1, setId1] = useState("");
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [file, setFile] = useState();

    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:4000/EmpData/' + id)
            .then((res) => { return res.json() })
            .then((data) => {
                setId1(data.id)
                setName(data.name)
                setSalary(data.salary)
                setFile(data.file)
            })
    })
    return (
        <div>

            <div className="card" >
                <div className="card-body">

                    <div className='container'>
                        <div className='row'>

                            <div className='col-sm'>
                                <div className="card" >
                                    <div className="card-body">
                                        {file}
                                    </div>
                                </div>
                                <a href="/" className="btn btn-primary">Back To HOME</a>
                            </div>

                            <div className='col-sm'>
                                <div className="card" >
                                    <div className="card-body">
                                        <h2>ID :{id1} </h2>
                                        <p>Name:{name} </p>
                                        <p>Salary:{salary} </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default View
