import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Students from "./Students";
import { v4 as uuid } from "uuid"
import { Link, useNavigate } from "react-router-dom";

function EditStudent() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [id, setId] = useState('')

    let history = useNavigate();

    var index = Students.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleUpdate = (e) => {
        e.preventDefault();

        let arr = Students[index];
        arr.Name = name;
        arr.Age = age;
        arr.Address = address;

        history('/')

    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setAddress(localStorage.getItem('Address'))
        setId(localStorage.getItem('Id'))
    }, [])

    return (
        <>
            <div className="navBar_heading">
                <Link className="node_heading" to="/">Home</Link>
                <Link className="node_heading" to="/studentList">Student List</Link>
                <Link className="node_heading" to="/addStudent">Add Student</Link>
            </div>
            <Form className="d-grid gap-2 mt-5">
                <Form.Group className="mb-3" controlId="formId">
                    <Form.Control type="text" placeholder="Enter Id " value={id} required onChange={(e) => {
                        setId(e.target.value)
                    }} readOnly>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name " value={name} required onChange={(e) => {
                        setName(e.target.value)
                    }}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age " value={age} required onChange={(e) => {
                        setAge(e.target.value)
                    }}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Control type="text" placeholder="Enter Address " value={address} required onChange={(e) => {
                        setAddress(e.target.value)
                    }}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e => { handleUpdate(e) })}>Update</Button>
            </Form>
        </>
    )
}

export default EditStudent
