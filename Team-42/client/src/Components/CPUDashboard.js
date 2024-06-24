import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import './CPUDashboard.css';
import Gt from './GoogleTranslator';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import crop1 from "./cpu_dashboard_crop1.png"
import crop2 from "./cpu_dashboard_crop2.jpeg"
import crop3 from "./cpu_dashboard_crop3.jpg"

function CPUDashboard() {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Gt />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Profile</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Container className="my-4">
                <h1>Requests</h1>
                <Row className="my-3 justify-content-center">
                    <Col xs={11} md={6} lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                    <h1 class="h3">Item Name</h1>
                                    <p className="my-2">Quantity: ...</p>
                                    <p className="my-2">Farmer's Name: ...</p>
                                    <p className="my-2">Farmer's Contact Number: ...</p>
                                    <div className="mt-3">
                                        <p className="my-1">Quality Check Image: </p>
                                        <img className="img-fluid" src={crop1} alt="..." />
                                    </div>
                                    <div className="d-flex justify-content-end my-3">
                                        <Button variant="outline-primary" className="me-3">Accept</Button>
                                        <Button variant="outline-danger" className="">Reject</Button>
                                    </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={11} md={6} lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                    <h1 class="h3">Item Name</h1>
                                    <p className="my-2">Quantity: ...</p>
                                    <p className="my-2">Farmer's Name: ...</p>
                                    <p className="my-2">Farmer's Contact Number: ...</p>
                                    <div className="mt-3">
                                        <p className="my-1">Quality Check Image: </p>
                                        <img className="img-fluid" src={crop2} alt="..." />
                                    </div>
                                    <div className="d-flex justify-content-end my-3">
                                        <Button variant="outline-primary" className="me-3">Accept</Button>
                                        <Button variant="outline-danger" className="">Reject</Button>
                                    </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={11} md={6} lg={4} className="p-3">
                        <Card>
                            <Card.Body>
                                    <h1 class="h3">Item Name</h1>
                                    <p className="my-2">Quantity: ...</p>
                                    <p className="my-2">Farmer's Name: ...</p>
                                    <p className="my-2">Farmer's Contact Number: ...</p>
                                    <div className="mt-3">
                                        <p className="my-1">Quality Check Image: </p>
                                        <img className="img-fluid" src={crop3} alt="..." />
                                    </div>
                                    <div className="d-flex justify-content-end my-3">
                                        <Button variant="outline-primary" className="me-3">Accept</Button>
                                        <Button variant="outline-danger" className="">Reject</Button>
                                    </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    
                
                </Row>
            </Container>
        </>
    )
}

export default CPUDashboard;