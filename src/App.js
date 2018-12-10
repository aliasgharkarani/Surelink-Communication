import React, { Component } from 'react';
// import logo from './logo.svg';
import pic from './pic.jpg';
import logo from './logo.jpg';
import logo1 from './logo1.jpg';
import SFALL from './SolutionforAll.png';
import Flexible from './flexible.png';
import Sequrity from './security.png';
import Smart from './smart.png';
import Secure from './secure.png';
import Fast from './fast.png';

import { Carousel, Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem, Panel } from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {

    const whySurelink = [
      { pic: SFALL, heading: "Solutions for All", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Flexible, heading: "Flexibility", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Sequrity, heading: "Security", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Smart, heading: "Smart and Adaptable", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: Fast, heading: "Fast and Affordable", para: "Tap into Tech Cloud ERP world class cloud infrastructure to run lean and flexible business processes. Get up and running quickly anywhere in the world for a low monthly & yearly cost." },
      { pic: Secure, heading: "Secure and Reliable", para: "Our cloud based ERP software solutions have covered from system security to compliance. Your data is hosted on world-class servers with global teams dedicated to its safety." }
    ]
    return (
      <div>
        <Row style={{ marginRight: '0px' }}>
          <Navbar style={{ marginRight: '0px', height: "65px" }}>
            <Col md={4}>
              <Navbar.Brand>
                <img src={logo1} style={{ height: "69px", width: "228px" }} />
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
            <img width={500} height={500} alt="900x500" src={pic} />
            <Carousel.Caption>
              <h3>Package 1</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={500} alt="900x500" src={pic} />
            <Carousel.Caption>
              <h3>Package 2</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={500} alt="900x500" src={pic} />
            <Carousel.Caption>
              <h3>Package 3</h3>
              <p>it contains .................</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
          <Col md={3} xs={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">20 years of Experience</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={4} xs={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">200+ Clients</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={3} xs={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">1000+ Users</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
        </div>
        <div>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red" }}>Why Surelink?</h3></Col>
        </div>
        <div>
          {whySurelink.map((obj, i) => {
            return (
              <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column', marginTop: "2%" }}>
                <img src={obj.pic} height={100} width={100} />
                <h4>{obj.heading}</h4>
                <p style={{ fontSize: '13px', textAlign: 'center' }}>{obj.para}</p>
              </Col>
            )
          })}
        </div>
        <div>
          <Col md={1} />
          <Col md={5} style={{ marginTop: "1%" }}>
            <iframe style={{ width: "500px", height: "300px" }} src="https://www.youtube.com/embed/xV_Bc5a8u60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col md={6} style={{ marginTop: "1%" }}>
            <div style={{display: "flex", flexDirection: "column" }}>
              <h4 style={{ textAlign: 'center', marginTop: '6%',borderBottom:"1px solid red" }}>
                We change the way you think about ERP!
             </h4>
              <h4 style={{ textAlign: 'center', marginTop: '2%' }}>
                See how our Tech Cloud ERP software uses intelligent technologies like digital assistants, AI and machine learning, and predictive analytics – to deliver instant, future proof value.
            </h4>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
// https://techclouderp.com/
export default App;
