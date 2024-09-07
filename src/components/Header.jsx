import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <Navbar className="bg-body-tertiary position-fixed w-100 mb-3" style={{ top: '0px', zIndex: "10" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ textDecoration: 'none' }}>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Redplay
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
