import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table, InputGroup } from "react-bootstrap";
import Students from "./Students";
import { Button } from "reactstrap";

class Home extends Component {

    render() {

        return <>
            <div className="navBar_heading mb-5">
                <Link className="node_heading" to="/">Home</Link>
                <Link className="node_heading" to="/studentList">Student List</Link>
                <Link className="node_heading" to="/addStudent">Add Student</Link>
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
}

export default Home