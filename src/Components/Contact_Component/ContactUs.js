import React, { Component } from 'react';
import team from '../../assets/team123.png';
import pak_flag from '../../assets/pak_flag.png'
import { Row, Col,FormGroup, FormControl, Button } from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './ContactUs.css';
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer.js'

class ContactUs extends Component {
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

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <Header />
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
                <br />
                <br />
                <Row>
                    <Col md={12} style={{ flexDirection: "column" }}>
                        <Col md={1} />
                        <Col md={5}>
                            <form>
                                <FormGroup
                                    controlId="formBasicText"
                                >
                                    <FormControl
                                        style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        required
                                        placeholder="Name"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                        type="text"
                                        name="phonenumber"
                                        value={this.state.phonenumber}
                                        required
                                        placeholder="phone number"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        required
                                        placeholder="email"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                        type="text"
                                        name="company"
                                        value={this.state.company}
                                        required
                                        placeholder="company"
                                        onChange={this.handleChange}
                                    />
                                    <FormControl
                                        componentClass="textarea"
                                        style={{ width: "80%", marginTop: "3%", height: "100px" }}
                                        type="text"
                                        name="message"
                                        value={this.state.message}
                                        required
                                        placeholder="message"
                                        onChange={this.handleChange}
                                    />
                                    <Button type="submit" style={{ marginTop: "3%", width: "130px", height: "40px", color: "#ffff", fontWeight: "bold", background: "#01a2ca" }}>Send Message</Button>
                                </FormGroup>
                            </form>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={12} style={{ marginTop: "2%" }}>
                                    <Col md={3} xs={4} sm={4}>
                                        <img src={team} alt="team" style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email:pallavi@clouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{ marginTop: "2%" }}>
                                    <Col md={3} xs={4} sm={4}>
                                        <img src={team} alt="team" style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email:pallavi@clouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{ marginTop: "2%" }}>
                                    <Col md={3} xs={4} sm={4}>
                                        <img src={team} alt="team" style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email:pallavi@clouderp.com</p>
                                        </Col>
                                    </Col>
                                    <Col md={3} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} style={{ marginTop: "2%" }}>
                                    <Col md={3} xs={4} sm={4}>
                                        <img src={team} alt="team" style={{ background: "#fffff", height: "80px", width: "90px" }} />
                                    </Col>
                                    <Col md={6}>
                                        <Col md={12} style={{ flexDirection: "column" }}>
                                            <p>Name: Pallavi</p>
                                            <p>Phone: +91-8919439603</p>
                                            <p>Email:pallavi@clouderp.com</p>
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
                    <Col md={1} />
                    <Col md={6}>

                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe style={{ width: "615px", height: "339px" }} title="Office_location_map" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.688214481618!2d67.08159641447854!3d24.90861454946135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f027e8efea3%3A0x910e5e870c6ed89d!2sSurelink+Communication!5e0!3m2!1sen!2s!4v1545134087853" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <a href="https://www.crocothemes.net">wordpress themes by crocothemes.net</a></div></div>
                    </Col>
                    <Col md={4} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: "331px" }}>
                        <Col md={4}>
                            <img src={pak_flag} alt="Pak-Flag" style={{ width: "100px", height: "100px", border: "1px solid grey" }} />
                        </Col>
                        <Col md={6}>
                            <h3 style={{ marginTop: "0px" }}>Corporate Office</h3>
                            <p>Surelink Communication
                               Plot No. A-20 Mehmoob Square, Block-14,
                               FB.Area, Karachi.
                               Phone - +92-335-5100234
                               Email - info@surelinkpk.com</p>
                        </Col>
                    </Col>
                    <Col md={1} />
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
                <Footer />
            </div>
        );
    }
}
export default ContactUs;
