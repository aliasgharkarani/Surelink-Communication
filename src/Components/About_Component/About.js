import React, { Component } from 'react';
import Sales from '../../assets/sales.jpg';
import Inventory from '../../assets/inventory.jpg';
import Purchase from '../../assets/purchse.jpg';
import Plant from '../../assets/plant.jpg';
import { Row, Col} from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer.js'

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
        <Header />
        <Col md={12} style={{ marginTop: "3%" }}>
          <Col md={1} />
          <Col style={{ display: "flex", flexDirection: "column", border: "4px solid #37addb" }} md={5}>
            <h3 style={{ fontWeight: "bold", marginTop: "20px" }}>About Us</h3>
            <p>Surelink Communication is a web based innovative solution with modern tech-savy functionalities of Business Process Management, designed specifically to fit all the types of business verticals. Developed in a web based environment, it includes robust functionalities which are considered as a part of the extended high-end enterprise application.</p>
            <p>Surelink Communication is a perfect fit for any kind of any business process. Even, it offers the finest in technology, design, architecture, functionality, features and the ease of use which propose a great user experience.</p>
            <h5 style={{ fontWeight: "bold" }}>Features of Surelink Communication:</h5>
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
            <p>Surelink Communication allows firms to monitor all supply chain activates in a great aspect from beginning till the end – a task that would be nearly not possible or else. So, processes that hinder efficiency and slow down the plan, design, and delivery of goods can be immediately tracked, and remedial act can be quickly taken to ensure best efficiency</p>
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
              <img src={obj.pic} height={100} width={100} alt="collection"/>
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
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Why Surelink Communication?</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Unique Surelink Communication</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Whats Set's us Different?</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Pricing & Plans</p>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Product Comparison</p>
            </Col>
            <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
              <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>Products</h4>
              <p style={{ margin: '0px', textShadow: '0.2px 0.2px' }}>Surelink Communication</p>
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
        <Footer />
      </div>
    );
  }
}
export default App;
