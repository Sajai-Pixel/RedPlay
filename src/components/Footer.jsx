import React from 'react'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <Container style={{ marginTop: "100px" }}>
                <Row>
                    <Col sm>
                        <div className='d-flex gap-1'>
                            <img style={{ width: '25px', height: '25px' }} src={logo} alt="" />
                            <h3>REDPLAY</h3>
                        </div>
                        <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
                        <p>Code licensed Luminar, docs CC BY 3.0.</p>
                        <p>Currently v5.3.2.</p>
                    </Col>
                    <Col sm>
                        <h3>Links</h3>
                        <ul className='list-unstyled' >
                            <Link to={'/'} style={{ textDecoration: 'none' }}><li >Landing Page</li></Link>
                            <Link to={'/home'} style={{ textDecoration: 'none' }}><li >Home Page</li></Link>
                            <Link to={'/history'} style={{ textDecoration: 'none' }}><li >Watch History Page</li></Link>
                        </ul>
                    </Col>
                    <Col sm>
                        <h3>Guides</h3>
                        <ul className='list-unstyled'>
                            <li>React</li>
                            <li>React Bootstrap</li>
                            <li>React Router</li>
                        </ul>
                    </Col>
                    <Col sm>
                        <h3>Contact Us</h3>
                        <Form className='d-flex align-items center'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com"
                                    className='rounded'
                                    style={{ backgroundColor: "#CDFADB", height: "50px" }}
                                />
                            </FloatingLabel>
                            <button className='btn rounded ms-2 fs-5'
                                style={{ backgroundColor: "#CDFADB", height: "50px" }}
                            ><i className="fa-solid fa-arrow-right"></i></button>
                        </Form>
                        <div className='d-flex justify-content-between fs-3 mx-2'>
                            <i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }}></i>
                            <i className="fa-brands fa-facebook-f" style={{ color: '#1877F2' }}></i>
                            <i className="fa-brands fa-instagram" style={{ color: '#E4405F' }}></i>
                            <i className="fa-brands fa-youtube" style={{ color: '#FF0000' }}></i>
                            <i className="fa-brands fa-linkedin-in" style={{ color: '#0077B5' }}></i>
                            <i className="fa-brands fa-github" style={{ color: '#333' }}></i>

                        </div>
                    </Col>
                </Row>
                <p className='text-center'>Copyright © Jan 2024 Batch, Media Player. Built with React.</p>
            </Container>
        </>
    )
}

export default Footer
