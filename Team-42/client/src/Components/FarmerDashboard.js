import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import './FarmerDashboard.css';
import Carousel from 'react-bootstrap/Carousel';
import Millet from './Millet01.jpg';
import MSP from './MSP-1.jpg';
import farmer from './farmer.jpeg';
import Gt from './GoogleTranslator';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import CPUreqform from './CPUreqform';
import ImageCPU1 from './CPU-1.jpg';
import ImageCPU2 from './CPU-2.jpg';
import ImageCPU3 from './CPU-3.jpg';
import ImageCPU4 from './CPU-4.jpg';
import ImageCPU5 from './CPU-5.jpg';
import ImageCPU6 from './CPU-6.jpg';
import ImageCPU7 from './CPU-7.jpg';
import ImageCPU8 from './CPU-8.png';
import ImageCPU9 from './CPU-9.jpg';

function FarmerDashboard() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <div>
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
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Millet} alt="First slide" />
          <Carousel.Caption className="bg-white opacity-75" style={{ color: '#38b000' }}>
            <h5>Government Schemes</h5>
            <p>Govt. schemes are the schemes to safeguard farmers from financial loss occurring due to non-preventable natural risks.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={MSP} alt="Second slide" />
          <Carousel.Caption className="bg-white opacity-75" style={{ color: '#38b000' }}>
            <h5>MSP - Minimum Support Price</h5>
            <p>MSP is price fixed by Government of India to protect the producer - farmers - against excessive fall in price during bumper production years.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={farmer} alt="Third slide" />
          <Carousel.Caption className="bg-white opacity-75" style={{ color: '#38b000' }}>
            <h5>Order pesticides, tools, etc. online</h5>
            <p>Agricultural farming products and equipment concerns all tools and machinery used in horticulture and animal husbandry. A wide variety of equipment and products are required based on the industries and operations of a particular farm.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CPU Requirement Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CPUreqform />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU1} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU2} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU3} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU4} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU5} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU6} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU7} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU8} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={ImageCPU9} />
              <Card.Body>
                <Card.Title>Sample CPU</Card.Title>
                <Card.Text>
                  <details>
                    <summary>More Details</summary>
                    <p className="my-2">Location: XYZ</p>
                    <p className="my-0">Price List</p>
                    <ul className="my-0">
                      <li>Item 1: Price 1</li>
                      <li>Item 2: Price 2</li>
                      <li>Item 3: Price 3</li>
                    </ul>
                    <p className="my-2">Capacity: abc</p>
                  </details>
                </Card.Text>
                <Button variant="primary">Request</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FarmerDashboard;
