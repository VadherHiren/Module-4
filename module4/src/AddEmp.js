import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {


    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [file, setFile] = useState();


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, salary, file };
        fetch('http://localhost:4000/EmpData', {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res) {
                    alert("Employee created...!");
                    navigate('/')
                }
            })
    }


    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
      }

    return (
        <div>
            <div className="container w-50 text-start">
                <div>
                    <h2>
                        Create Employee
                    </h2>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="App">
                        <h2>Add Image:</h2>
                        <input type="file" onChange={handleChange} />
                        <img src={file} alt="Uploaded preview" />
                    </div>

                    <div className="form-group">
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Salary
                            </label>
                            <input
                                type="text"
                                value={salary}
                                onChange={(e) => { setSalary(e.target.value) }}
                                className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmp;
