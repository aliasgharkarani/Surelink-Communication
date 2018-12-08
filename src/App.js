import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './pic.jpg';
import SFALL from './SolutionforAll.png';
import Flexible from './flexible.png';
import Sequrity from './security.png';

import { Carousel, Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem, Panel } from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginRight: '0px' }}>
          <Navbar style={{ marginRight: '0px' }}>
            <Col md={4}>
              <Navbar.Brand>
                <a href="#home">logo</a>
              </Navbar.Brand>
            </Col>
            <Col md={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Home
                </NavItem>
                <NavItem eventKey={2} href="#">
                  About
             </NavItem>
                <NavItem eventKey={3} href="#">
                  Products
             </NavItem>
                <NavItem eventKey={4} href="#">
                  Contact
             </NavItem>
                <NavDropdown eventKey={3} title="Pricing" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>1</MenuItem>
                  <MenuItem eventKey={3.2}>2</MenuItem>
                  <MenuItem eventKey={3.3}>3</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
          </Navbar>
        </Row>




        <Carousel>
          <Carousel.Item>
            <img width={500} height={500} alt="900x500" src={logo1} />
            <Carousel.Caption>
              <h3>Package 1</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={500} alt="900x500" src={logo1} />
            <Carousel.Caption>
              <h3>Package 2</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={500} alt="900x500" src={logo1} />
            <Carousel.Caption>
              <h3>Package 3</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
          <Col md={3}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">20 years of Experience</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">200+ Clients</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={3}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">1000+ Users</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
        </div>
        <div>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red" }}>Why Tech Cloud Surelink?</h3></Col>
        </div>
        <div>
          <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column',marginTop:"2%" }}>
            <img src={SFALL} height={100} width={100} />
            <h4>Solutions for All</h4>
          </Col>
          <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column',marginTop:"2%" }}>
            <img src={Flexible} height={100} width={100} />
            <h4>Flexibility</h4>
          </Col>
          <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column',marginTop:"2%" }}>
            <img src={Sequrity} height={100} width={100} />
            <h4>Security</h4>
          </Col>
        </div>
      </div>
    );
  }
}
// https://techclouderp.com/
export default App;
