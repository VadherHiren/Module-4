import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmp() 
{
    const navigate = useNavigate();

    const [id1, setId1] = useState("");
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const { eid } = useParams();

    useEffect(() => {
        fetch('http://localhost:4000/EmpData/' + eid)
            .then((res) => { return res.json() })
            .then((data) => {
                setId1(data.id)
                setName(data.name)
                setSalary(data.salary)
            })
    },)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { name, salary }
        console.log(data)

        fetch('http://localhost:4000/EmpData/' + eid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res) {
                    alert('updated...!');
                    navigate('/')
                }
            })
    };

    return (
        <div>
            <div className="container w-50 text-start">
                <div>
                    <h2>Create Employee</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input
                                type="text"
                                readOnly
                                value={id1}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Salary</label>
                            <input
                                type="text"
                                value={salary}
                                onChange={(e) => { setSalary(e.target.value) }}
                                className="form-control"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmp;
