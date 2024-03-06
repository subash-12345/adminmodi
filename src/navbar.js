import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg-md-sm-col navbar-light bg-primary">
            <Container>
                <Row>
                    <Col>
                        <a className="navbar-brand" href="#">Dashboard</a>
                    </Col>
                    
                </Row>
            </Container>
        </nav>
    );
};

export default Navbar;
