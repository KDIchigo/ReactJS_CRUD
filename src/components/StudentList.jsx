import React, { Component, Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "reactstrap";
import { Table, InputGroup } from "react-bootstrap";
import Students from "./Students";
import "bootstrap/dist/css/bootstrap.min.css"
import { Input } from 'antd'

function StudentList() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [id, setId] = useState('')

    let history = useNavigate();

    const handleEdit = (id, name, age, address) => {
        localStorage.setItem('Name', name)
        localStorage.setItem('Age', age)
        localStorage.setItem('Address', address)
        localStorage.setItem('Id', id)
    }

    const handleDelete = (id) => {
        var index = Students.map(function (e) {
            return e.id
        }).indexOf(id);

        Students.splice(index, 1);

        history('/');
    }

    const handleSearch = (id) => {

    }

    return <>
        <div className="navBar_heading">
            <Link className="node_heading" to="/">Home</Link>
            <Link className="node_heading" to="/studentList">Student List</Link>
            <Link className="node_heading" to="/addStudent">Add Student</Link>
        </div>

        <div className="node_center search">
            <input
                type="text"
                style={{ width: "55%", height: "40px" }}
                placeholder="Search">
            </input>
            {/* <Form className="d-grid gap-2 mt-5">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name " value={id} required onChange={(e) => {
                        setName(e.target.value)
                    }}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e => { handleSearch(e) })}>Search</Button>
            </Form> */}
        </div>

        <Fragment>
            <div>
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th className="node_center">
                                ID
                            </th>
                            <th className="node_center">
                                Name
                            </th>
                            <th className="node_center">
                                Age
                            </th>
                            <th className="node_center">
                                Address
                            </th>
                            <th className="node_center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Students && Students.length > 0
                                ?
                                Students.map((item) => {
                                    return (
                                        <tr>
                                            <td className="node_center">
                                                {item.id}
                                            </td>
                                            <td className="node_center">
                                                {item.Name}
                                            </td>
                                            <td className="node_center">
                                                {item.Age}
                                            </td>
                                            <td className="node_center">
                                                {item.Address}
                                            </td>
                                            <td className="node_center">
                                                <Link to={'/editStudent'}>
                                                    <Button onClick={() => {
                                                        handleEdit(item.id, item.Name, item.Age, item.Address)
                                                    }}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => {
                                                    handleDelete(item.id)
                                                }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    </>
}

export default StudentList