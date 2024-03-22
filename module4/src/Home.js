import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";


function Home() {
  const [details, setDetails] = useState();
  const naviagte = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/EmpData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
  }, []);

  const handleView = (id) => {
    console.log(id);
    naviagte("/view/" + id)
  }
  const handleEdit = (id) => {
    console.log(id);
    naviagte("/editemp/" + id)
  }
  // const handleDelete = (id) => {
  //   console.log(id)
  //   setDetails(details.filter(id));
  // }


  return (
    <div className='container'>
      <div>
        <h2>Employees Data</h2>
      </div>

      <div>
        <Link to="/addemp" className="my-3 btn btn-primary">Add Employee</Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead className=" table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {details &&
                  details.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.salary}</td>
                      <td>
                        <button onClick={() => { handleView(emp.id) }} className="btn btn-info">View</button>
                        <button onClick={() => { handleEdit(emp.id) }} className="btn btn-success mx-3">Edit</button>
                        {/* <button onClick={() => handleDelete(emp.id)} className="btn btn-danger">Delete</button> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
