import React, { Component } from 'react';
import logo1 from './logo1.jpg';
import Plant from './plant.jpg';
import team from './team123.png';
import { Row, Col, Nav, NavDropdown, Navbar, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            name: "",
            phonenumber: "",
            email: "",
            company: "",
            message: ""
        };
    }

    //   getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
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
                                    <Link to="/contactus">Contact
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

                <Row>
                    <Col md={2} />
                    <Col md={8} style={{ textAlign: "center" }}><h3>Interested in Tech Cloud Enterprise Resource Planning  Software System?</h3></Col>
                    <Col md={2} />
                </Row>

                <Row>
                    <Col md={2} />
                    <Col md={8} style={{ textAlign: "center" }}><h4>We would love to hear from you</h4></Col>
                    <Col md={2} />
                </Row>

                <Row>
                    <Col md={12} style={{ flexDirection: "column" }}>
                        <Col md={1} />
                        <Col md={5}>
                            <form>
                                <FormGroup
                                    controlId="formBasicText"
                                // validationState={this.getValidationState()}
                                >
                                    <FormControl
                                        style={{ width: "80%",marginTop:"3%",height:"45px" }}
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        placeholder="Name"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%",marginTop:"3%",height:"45px" }}
                                        type="text"
                                        name="phonenumber"
                                        value={this.state.phonenumber}
                                        placeholder="phone number"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%",marginTop:"3%",height:"45px" }}
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        placeholder="email"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%",marginTop:"3%",height:"45px" }}
                                        type="text"
                                        name="company"
                                        value={this.state.company}
                                        placeholder="company"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        componentClass="textarea"
                                        style={{ width: "80%",marginTop:"3%",height:"100px" }}
                                        type="text"
                                        name="message"
                                        value={this.state.message}
                                        placeholder="message"
                                        onChange={this.handleChange}
                                    />
                                    <Button type="submit" style={{marginTop:"3%",width:"130px",height:"40px",color:"#ffff",fontWeight:"bold",background:"#01a2ca"}}>Send Message</Button>
                                </FormGroup>
                            </form>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={12} style={{marginTop:"2%"}}>
                                    <Col md={3}>
                                        <img src={team} style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email: pallavi@techclouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{marginTop:"2%"}}>
                                    <Col md={3}>
                                        <img src={team} style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email: pallavi@techclouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{marginTop:"2%"}}>
                                    <Col md={3}>
                                        <img src={team} style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email: pallavi@techclouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{marginTop:"2%"}}>
                                    <Col md={3}>
                                        <img src={team} style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email: pallavi@techclouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1} />
                    </Col>
                </Row>

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
                                <Col style={{ color: "#f69a83", textShadow: "0.2px 0.2px" }}>©2018 Tech Cloud ERP. All Rights Reserved. <span style={{ color: "#1fb1ce", textShadow: "0.5px 0.5px" }}>Privacy Policy</span><br /><span style={{ color: '#ef471d', textShadow: "0.5px 0.5px" }}>Terms & Conditions.</span></Col>
                            </Col>
                            <Col md={3} style={{ display: "flex", alignItems: 'center', height: "69px", justifyContent: "center" }}>
                                Get Social
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} style={{ height: "28px", width: "28px" }} />
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
