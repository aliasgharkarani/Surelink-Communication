import React, { Component } from 'react';
import pic from '../../assets/pic.jpg';
import SFALL from '../../assets/SolutionforAll.png';
import Flexible from '../../assets/flexible.png';
import Sequrity from '../../assets/security.png';
import Smart from '../../assets/smart.png';
import Secure from '../../assets/secure.png';
import Fast from '../../assets/fast.png';
import Sales from '../../assets/sales.jpg';
import Inventory from '../../assets/inventory.jpg';
import Purchase from '../../assets/purchse.jpg';
import Plant from '../../assets/plant.jpg';
import Quality from '../../assets/quality.jpg';
import Production from '../../assets/production.jpg';
import Assets from '../../assets/asset-management.jpg';
import Finance from '../../assets/finance.jpg';
import HumanResourse from '../../assets/hrms.jpg';
import { Carousel, Row, Col,Panel } from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';

class Home extends Component {
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
        <Header />
        <Row>
          <Col md={12} sm={12} xs={12}>
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
          </Col>
        </Row>

        <Row style={{ marginTop: "3%" }}>
          <Col md={1} xs={0} sm={0} />
          <Col md={3} xs={11} sm={11}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">20 years of Experience</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={4} xs={11} sm={11}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">200+ Clients</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
          <Col md={3} xs={11} sm={11}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">1000+ Users</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </Col>
        </Row>
        <div>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red" }}>Why Surelink?</h3></Col>
          {whySurelink.map((obj, i) => {
            return (
              <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column', marginTop: "2%" }}>
                <img src={obj.pic} height={100} width={100} alt="collection"/>
                <h4>{obj.heading}</h4>
                <p style={{ fontSize: '13px', textAlign: 'center' }}>{obj.para}</p>
              </Col>
            )
          })}
        </div>
        <div>
          <Row>
            <Col md={1} sm={1} xs={1} />
            <Col md={5} sm={11} xs={11} style={{ marginTop: "1%" }}>
              <iframe title="YoutubeIntroLink" style={{ width: "300px", height: "200px" }} src="https://www.youtube.com/embed/xV_Bc5a8u60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col md={6} sm={11} xs={11} style={{ marginTop: "1%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ textAlign: 'center', marginTop: '6%', borderBottom: "1px solid red", fontSize: "12px" }}>
                  We change the way you think about ERP!
             </h4>
                <h4 style={{ textAlign: 'center', marginTop: '2%', fontSize: "12px" }}>
                  See how our Tech Cloud ERP software uses intelligent technologies like digital assistants, AI and machine learning, and predictive analytics – to deliver instant, future proof value.
            </h4>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red" }}>Important Modules</h3></Col>
          {ImportantModules.map((obj, i) => {
            return (
              <Col md={4} style={{ display: "flex", alignItems: 'center', flexDirection: 'column', marginTop: "2%" }}>
                <img src={obj.pic} height={200} width={200} alt="collection"/>
                <h4>{obj.heading}</h4>
                <p style={{ fontSize: '13px', textAlign: 'center' }}>{obj.para}</p>
              </Col>
            )
          })}
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red" }}>Other Modules</h3></Col>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h5>Job work, Dynamic Costing,..........................................................................</h5></Col>
        </div>
        <Col md={12} style={{ background: "#37addb", borderBottom: "3px solid red" }}>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ borderBottom: "3px solid red", color: "white" }}>Tech Cloud ERP Features</h3></Col>
          <Col style={{ display: "flex", alignItems: 'center', color: "white", flexDirection: "column" }} md={6}>
            <h4>Web Based and Cloud Computing</h4>
            <h4>Dynamic Dash Board with a GUI</h4>
            <h4>Inbuilt Email & SMS Integration</h4>
            <h4>Multi Language</h4>
            <h4>Unlimited Data Storage</h4>
          </Col>
          <Col style={{ display: "flex", alignItems: 'center', color: "white", flexDirection: "column" }} md={6}>
            <h4>Mobile and Tab Compatibility</h4>
            <h4>Unlimited Users</h4>
            <h4>Auto Back-up Facility</h4>
            <h4>Flexible Software</h4>
            <h4>Lifetime Product, No Renewals</h4>
          </Col>
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h4 style={{ color: "white" }}>+Other Awesome Features in Tech Cloud ERP</h4></Col>
        </Col>
        <Footer/>
      </div>
    );
  }
}
export default Home;
