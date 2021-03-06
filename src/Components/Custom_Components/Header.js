import React, { Component } from 'react';
import logo1 from '../../assets/logo1.jpg';
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <Row style={{ height: "60px", background: "#f8f8f8", borderBottom: "1px solid #e6dbdb", borderRadius: "40px" }}>
          <Col md={1} />
          <Col md={3} style={{ height: "60px", display: "flex", justifyContent: "center" }} >
            <img src={logo1} alt="logo" style={{ height: "41px", width: "228px", alignSelf: "center" }} />
          </Col>
          <Col md={8} style={{ height: "60px", display: "flex", justifyContent: "flex-end" }}>
            <Col md={2} style={{ alignSelf: 'center' }}>
              <Link to="/home">Home</Link>
            </Col>
            <Col md={2} style={{ alignSelf: 'center' }}>
              <Link to="/about">About</Link>
            </Col>
            <Col md={2} style={{ alignSelf: 'center' }}>
              <Link to="/products">Products
                        </Link>
            </Col>
            <Col md={2} style={{ alignSelf: 'center' }}>
              <Link to="/contactus">Contact Us
                      </Link>
            </Col>
          </Col>
        </Row>
    );
  }
}
export default Header;
