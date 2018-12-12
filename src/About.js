import React, { Component } from 'react';
// import logo from './logo.svg';
import pic from './pic.jpg';
// import logo from './logo.jpg';
import logo1 from './logo1.jpg';
import SFALL from './SolutionforAll.png';
import Flexible from './flexible.png';
import Sequrity from './security.png';
import Smart from './smart.png';
import Secure from './secure.png';
import Fast from './fast.png';
import Sales from './sales.jpg';
import Inventory from './inventory.jpg';
import Purchase from './purchse.jpg';
import Plant from './plant.jpg';
import Quality from './quality.jpg';
import Production from './production.jpg';
import Assets from './asset-management.jpg';
import Finance from './finance.jpg';
import HumanResourse from './hrms.jpg';
import { Carousel, Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem, Panel } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    const ImportantModules = [
      { pic: Sales, heading: "Sales & Marketing", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Inventory, heading: "Inventory Management", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Purchase, heading: "Purchase Management", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Plant, heading: "Plant Maintanance", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: Quality, heading: "Quality Control", para: "Tap into Tech Cloud ERP world class cloud infrastructure to run lean and flexible business processes. Get up and running quickly anywhere in the world for a low monthly & yearly cost." },
      { pic: Production, heading: "Production Management", para: "Our cloud based ERP software solutions have covered from system security to compliance. Your data is hosted on world-class servers with global teams dedicated to its safety." },
      { pic: Assets, heading: "Assets Management", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Finance, heading: "Fianance", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: HumanResourse, heading: "Human Resourse", para: "Whether you have 2 or 2000 employees, Tech Cloud ERP has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" }
    ]
    return (
      <div style={{ overflow: "hidden" }}>
        <Row style={{ marginRight: '0px' }}>
          <Navbar style={{ marginRight: '0px', height: "65px" }}>
            <Col md={4} xs={12} sm={12}>
              <Navbar.Brand>
                <img src={logo1} style={{ height: "69px", width: "228px" }} />
              </Navbar.Brand>
            </Col>
            <Col md={8} sm={12} xs={12} >
              <Nav>
                <NavItem eventKey={1} href="#" sm={12} xs={12} >
                  <Link to="/home">Home
                  </Link>
                </NavItem>
                <NavItem eventKey={2} href="#" sm={12} xs={12}>
                <Link to="/about">About
                  </Link>
             </NavItem>
                <NavItem eventKey={3} href="#" sm={12} xs={12}>
                <Link to="/products">Products
                  </Link>  
             </NavItem>
                <NavItem eventKey={4} href="#" sm={12} xs={12}>
                <Link to="/contact">Contact
                  </Link>   
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
    
        <Row >
          <Col md={2} />
          <Col md={8} style={{ marginTop: "1%", paddingLeft: "0px" }}>
            <Col md={12} style={{ paddingLeft: "0px" }}>
              <Col md={3} style={{ paddingLeft: "0px" }}>
                <img src={logo1} style={{ height: "69px", width: "228px" }} />
              </Col>
              <Col style={{ display: "flex", alignItems: 'center', flexDirection: "column", height: "69px", justifyContent: "center" }} md={6}>
                <Col >©2018 Tech Cloud ERP. All Rights Reserved. Privacy Policy</Col>
                <Col >Terms & Conditions.</Col>
              </Col>
              <Col md={3} style={{ display: "flex", alignItems: 'center', height: "69px", justifyContent: "center" }}>
                Get Social
              </Col>
            </Col>
          </Col>
          <Col md={2} />
        </Row>
      </div>
    );
  }
}
// https://techclouderp.com/
export default App;
