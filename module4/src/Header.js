import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import AddEmp from './AddEmp';
import View from './View';
import EditEmp from './EditEmp';

function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/addemp' element={<AddEmp/>}></Route>
                <Route path='/view/:id' element={<View/>}></Route>
                <Route path='/editemp/:eid' element={<EditEmp/>}></Route>
            </Routes>
        </div>
    )
}

export default Header
