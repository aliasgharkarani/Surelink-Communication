import React, { Component } from 'react';
import logo1 from './logo1.jpg';
import Sales from './sales.jpg';
import Inventory from './inventory.jpg';
import Purchase from './purchse.jpg';
import Plant from './plant.jpg';
import { Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {

    const ImportantModules = [
      { pic: Sales, heading: "Try Demo" },
      { pic: Inventory, heading: "Request Free Trial" },
      { pic: Purchase, heading: "Request Tutorial" },
      { pic: Plant, heading: "Contact Us" },
    ]
    return (
      <div style={{ overflowX: "hidden" }}>
        <Row style={{ marginRight: '0px' }}>
          <Navbar style={{ marginRight: '0px', height: "65px" }}>
            <Col md={4} xs={12} sm={12}>
              <Navbar.Brand>
                <img src={logo1} style={{ height: "69px", width: "228px" }} />
              </Navbar.Brand>
            </Col>
            <Col md={8} sm={12} xs={12} >
              <Nav>
                <NavItem eventKey={1} href="#" sm={2} xs={6} >
                  <Link to="/home">Home
                </Link>
                </NavItem>
                <NavItem eventKey={2} href="#" sm={6} xs={6}>
                  <Link to="/about">About
                </Link>
                </NavItem>
                <NavItem eventKey={3} href="#" sm={6} xs={6}>
                  <Link to="/products">Products
                </Link>
                </NavItem>
                <NavItem eventKey={4} href="#" sm={6} xs={6}>
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
        <Col md={12}>
          <Col md={1} />
          <Col style={{ display: "flex", flexDirection: "column", border: "4px solid #37addb" }} md={5}>
            <h3 style={{ fontWeight: "bold", marginTop: "20px" }}>About Us</h3>
            <p>Tech Cloud ERP is a web based innovative solution with modern tech-savy functionalities of Business Process Management, designed specifically to fit all the types of business verticals. Developed in a web based environment, it includes robust functionalities which are considered as a part of the extended high-end enterprise application.</p>
            <p>Tech Cloud ERP is a perfect fit for any kind of any business process. Even, it offers the finest in technology, design, architecture, functionality, features and the ease of use which propose a great user experience.</p>
            <h5 style={{ fontWeight: "bold" }}>Features of Tech Cloud ERP:</h5>
            <p>Multi user Online Real time System.<br />
              Menu driven and User Friendly System.<br />
              On-line support.<br />
              Data Import / Export Utility.<br />
              Backup facility / Restore Utilities.<br />
              Up to date information<br />
              Friendly Graphical Interface.<br />
              Customizable to any extent to go with different business necessities.<br />
              Easily adapts to your business terms.<br />
              Fully Web Based Model.<br />
              Inbuilt SMS Facility<br />
              Dashboards<br />
              Company Snap Shots<br />
              User Defined Alerting System<br />
              Indefinite Users<br />
              Password Protected Access<br />
              Business Intelligence Tools</p>
          </Col>
          <Col style={{ display: "flex", flexDirection: "column" }} md={5}>
            <h4 style={{ color: "red" }}>WHY TECHCLOUD ERP?</h4>
            <h4 style={{ fontWeight: "bold" }}>Improved Visibility</h4>
            <p>All the departments across an entire business can access and view the same reliable and precise data in real time. So, everybody from the manufacturing group to the production floor to the purchasing and finance sections has complete visibility into designs and plans, production status, quality control, inventory, cost of goods sold, and more. This enables better, smoother coordination and execution of all related processes and procedures.</p>
            <h4 style={{ fontWeight: "bold" }}>Increased Efficiency</h4>
            <p>Tech Cloud ERP allows firms to monitor all supply chain activates in a great aspect from beginning till the end – a task that would be nearly not possible or else. So, processes that hinder efficiency and slow down the plan, design, and delivery of goods can be immediately tracked, and remedial act can be quickly taken to ensure best efficiency</p>
            <h4 style={{ fontWeight: "bold" }}>On-time Delivery</h4>
            <p>Enhanced control over machinery stock, more precise demand scheduling, smooth production scheduling, and more useful coordination of distribution channels – all key benefits of manufacturing ERP software systems – enable companies to improve on-time delivery of products, a critical performance metric for today’s manufacturers.</p>
            <h4 style={{ fontWeight: "bold" }}>Improved Product Quality</h4>
            <p>Our ERP make it easier for big business to monitor product defect and problems, point out accurately where in the planning or manufacturing process the problem is occurring, and take the necessary steps to make sure products of the utmost quality. This leads to boost sales, customer satisfaction, and profits.</p>
            <h4 style={{ fontWeight: "bold" }}>Reduced Costs</h4>
            <p>Reduces costs in many ways. Improved employee efficiency reduces overtime and related labor and payroll expenses, reduces the scrap and re-work that can drain financial resources.</p>
            <h4 style={{ fontWeight: "bold" }}>Improved Collaboration</h4>
            <p>Enable firms to share the most important production-related data with not only internal employees, but with external agent such as vendor, suppliers, and distributors. This improves communication and facilitates better coordination of activities among these key business partners.</p>
          </Col>
        </Col>

        {ImportantModules.map((obj, i) => {
          return (
            <Col md={3} style={{ display: "flex", alignItems: 'center', flexDirection: 'column', marginTop: "3%" }}>
              <img src={obj.pic} height={100} width={100} />
              <h4>{obj.heading}</h4>
            </Col>
          )
        })}
        <Row>
          <Col md={12} style={{ borderBottom: "3px solid red", marginTop: "3%" }}></Col>
        </Row>
        <Row>

          <Col md={12}>
            <Col md={1} />
            <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Why Tech Cloud ERP?</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Unique Tech Cloud ERP</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Whats Set's us Different?</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Pricing & Plans</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Product Comparison</p>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Products</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud ERP</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud CRM</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud POS</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud Trading Software</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud eCommerce</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud HRMS</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud Finance</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud CRM-eCommerce-POS</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Tech Cloud Restaurant ERPF</p>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Services</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Digital Marketing</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Whats Set's us Different?</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Web Design & Development</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Mobile Application Development</p>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }} md={2}>
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Help</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Contact Us</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Contact Our MD</p>
            </Col>
          </Col>
        </Row>


        <Row>
          <Col md={1} />
          <Col md={10} style={{ background: "#37addb", borderBottom: "5px solid black", marginTop: "1%", height: '145px' }}>
            <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white" }}>Call us now</h3></Col>
            <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white" }}>+91-891-943-9603</h3></Col>
          </Col>
          <Col md={1} />
        </Row>

        <Row>
          <Col md={1} />
          <Col md={10} style={{ marginTop: "1%", paddingLeft: "0px" }}>
            <Col md={12} style={{ paddingLeft: "0px" }}>
              <Col md={3} style={{ paddingLeft: "0px" }}>
                <img src={logo1} style={{ height: "69px", width: "228px" }} />
              </Col>
              <Col style={{ display: "flex", alignItems: 'center', flexDirection: "column", height: "69px", justifyContent: "center" }} md={6}>
                <Col style={{color:"#f69a83",textShadow:"0.2px 0.2px"}}>©2018 Tech Cloud ERP. All Rights Reserved. <span style={{color:"#1fb1ce",textShadow:"0.5px 0.5px"}}>Privacy Policy</span><br/><span style={{color:'#ef471d',textShadow:"0.5px 0.5px"}}>Terms & Conditions.</span></Col>
              </Col>
              <Col md={3} style={{ display: "flex", alignItems: 'center', height: "69px", justifyContent: "center" }}>
                Get Social
                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                <img src={Plant} style={{ height: "28px", width: "28px" }}/>
                <img src={Plant} style={{ height: "28px", width: "28px" }}/>
              </Col>
            </Col>
          </Col>
          <Col md={1} />
        </Row>



      </div>
    );
  }
}
// https://techclouderp.com/
export default App;
