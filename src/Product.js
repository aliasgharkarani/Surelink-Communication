import React, { Component } from 'react';
import logo1 from './logo1.jpg';
import Sales from './sales.jpg';
import Inventory from './inventory.jpg';
import Purchase from './purchse.jpg';
import Plant from './plant.jpg';
import erpbanner from './erpbanner.png';
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
                    <Col md={11}>
                        <h4 style={{ marginTop: "20px" }}>ALL-IN-ONE CLOUD BASED ERP SOFTWARE FOR MANUFACTURING AND TRADING COMPANIES</h4>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={6}>
                            <p style={{ textAlign: "justify" }}>Tech Cloud ERP is a web/cloud based ERP software in Hyderabad, India with modern tech-savvy functionalities of Business Process Management, designed specifically to fit all the types of business verticals. Developed in a web based environment, it includes robust functionalities which are considered as a part of the extended high-end enterprise application. Tech Cloud ERP is a perfect fit for any kind of any business process. Even, it offers the finest in technology, design, architecture, functionality, features and the ease of use which propose a great user experience. To get a deeper understanding of how ERP solutions can transform your business, it helps to get a better sense of what ERP actually is and how it works. As we are the best ERP software providers in Hyderabad, India here's a brief introduction to ERP and why it seems like everyone's talking about it. ERP is an acronym for Enterprise Resource Planning, but even its full name doesn't shed much light on what ERP is or what it does. For that, you need to take a step back and think about all of the various processes that are essential to running a business, including sales & marketing, purchase, inventory, production, accounting, human resources and beyond. At its most basic level, ERP software integrates these various functions into one complete system to streamline processes and information across the entire organization.</p>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={5}>
                            <img src={erpbanner} style={{ width: '350px', height: '295px' }} />
                        </Col>
                    </Col>
                </Col>

                <Row>
                    <Col md={12} style={{ marginTop: "2%" }}>
                        <Col md={1} />
                        <Col md={11}>
                            <h4>The core business activities of Tech Cloud ERP:</h4>
                            <Col style={{ display: "flex", flexDirection: "column" }} md={5}>
                                <ul>
                                    <li>Dynamic Costing Sheets</li>
                                    <li>Quotation Revisions</li>
                                    <li>Dispatch</li>
                                    <li>Inventory Location Transfers</li>
                                    <li>Re-order/Minimum Stock Levels</li>
                                    <li>Automatic Standard Costs Calculation</li>
                                    <li>Customer P.O Deficit View</li>
                                    <li>Purchase Planning</li>
                                    <li>Good Receipt Note</li>
                                    <li>Credit Notes</li>
                                </ul>
                            </Col>
                            <Col style={{ display: "flex", flexDirection: "column" }} md={5}>
                                <ul>
                                    <li>Quotation Comparison Sheet</li>
                                    <li>Design & BOM</li>
                                    <li>Upload BOM Drawings</li>
                                    <li>Production Stages</li>
                                    <li>Inspection Parameters</li>
                                    <li>Quality Check</li>
                                    <li>Job Work (Outsourcing to 3rd Party)</li>
                                    <li>Banking & General Ledger</li>
                                    <li>HRM</li>
                                </ul>
                            </Col>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} style={{ marginTop: "2%" }}>
                        <Col md={1} />
                        <Col md={11}>
                            <h4 style={{ color: "#ef471d" }}>TECH CLOUD ERP MODULES FOR MANUFACTURING</h4>
                            <Col style={{ display: "flex", flexDirection: "column", boxShadow: "5px 5px #888888" }} md={10}>
                                <ul>
                                    <li>CRM</li>
                                    <li>Sales Management</li>
                                    <li>Purchase Management</li>
                                    <li>Items & Inventory Management</li>
                                    <li>Production Management</li>
                                    <li>Job Work</li>
                                    <li>Quality Check</li>
                                    <li>Plant Maintenance</li>
                                    <li>HRMS</li>
                                    <li>Asset Management</li>
                                    <li>Analytics</li>
                                </ul>
                            </Col>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} style={{ marginTop: "2%" }}>
                        <Col md={1} />
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Sales & Marketing</h3>
                            <ul>
                                <li>Handles pre-sales and sales activities of the organization</li>
                                <li>Complete stock-to-dock tracking of sales order processing cycle</li>
                                <li>Detailed Customers/ Business Partners/ Dealers database</li>
                                <li>Order amendment history</li>
                                <li>Authorization of orders and invoices</li>
                                <li>Order scheduling</li>
                                <li>Invoice generation with adjustments</li>
                                <li>Customer-specific prices</li>
                                <li>Enquiries</li>
                                <li>Quotations and amendments</li>
                                <li>Letter of credit details</li>
                                <li>Dashboards</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
                            <h3>Purchase Management</h3>
                            <ul>
                                <li>Purchase Indents</li>
                                <li>Enquiries to multiple vendors</li>
                                <li>Quotation comparisons</li>
                                <li>Outstanding purchase orders</li>
                                <li>Configurable terms & conditions</li>
                                <li>Good Receipt Note</li>
                                <li>Supplier invoices & payments to suppliers</li>
                                <li>Credit Notes</li>
                                <li>Complete vendor database</li>
                                <li>Purchase planning report</li>
                                <li>Supplier aging analysis</li>
                                <li>Payment reports</li>
                                <li>Dashboards</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Stores & Inventory</h3>
                            <ul>
                                <li>Online status of item quantity</li>
                                <li>Multiple levels of classification of items</li>
                                <li>Barcode enabled tracking</li>
                                <li>Expiry control and warranty tracking</li>
                                <li>Linking of GRN to PO and Invoice</li>
                                <li>Gate pass – Returnable/Non-returnable</li>
                                <li>Maintaining optimum stock levels</li>
                                <li>Multiple inventory locations and stock transfers</li>
                                <li>Multiple units of measurement</li>
                                <li>Alternate items for Production Planning</li>
                                <li>Handling of non-stock low value items like stationery</li>
                                <li>Images, specifications and technical drawings can be attached.</li>
                            </ul>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Col md={1} />
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Production</h3>
                            <ul>
                                <li>Supports batch, discrete, made to order and made to stock types of production</li>
                                <li>Multi level bill of materials</li>
                                <li>Multiple BOM variants supported</li>
                                <li>Enables process routing</li>
                                <li>Formulation of production plans</li>
                                <li>Material requirement planning based on sales order and production plan</li>
                                <li>Production orders generated on the basis of BOM and process routing</li>
                                <li>Production scheduling</li>
                                <li>Issue of materials</li>
                                <li>Finished goods receipt against production order</li>
                                <li>By product and scrap tracking during production</li>
                                <li>Production costing methods</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
                            <h3>Quality Check</h3>
                            <ul>
                                <li>Define inspection plans and checklists</li>
                                <li>Define QC tests</li>
                                <li>Assign inventory with user defined QC stat uses</li>
                                <li>Disposition inventory based upon QC status</li>
                                <li>Generate customized Certificates of Analysis</li>
                                <li>Analyze QC historic results.</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Plant Maintenance</h3>
                            <ul>
                                <li>Equipment Details</li>
                                <li>Preventive Maintenance</li>
                                <li>Predictive Maintenance</li>
                                <li>Break-down Maintenance</li>
                                <li>Utility Details and maintenance</li>
                                <li>Work, planning and scheduling</li>
                                <li>Plant layout</li>
                                <li>Machine Loading</li>
                                <li>Inventory and Procurement</li>
                                <li>Built-in Documents</li>
                                <li>Analytical and Reporting</li>
                                <li>Dashboards</li>
                            </ul>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Col md={1} />
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Finance</h3>
                            <ul>
                                <li>Payments and Receipts</li>
                                <li>Total flow of money (Cash/Bank) and total expenditures</li>
                                <li>Bank account transfers</li>
                                <li>Journal Entries</li>
                                <li>Bank Reconcilation</li>
                                <li>General Ledger Inquiries</li>
                                <li>Ta Inquiries</li>
                                <li>Trial Balance</li>
                                <li>Profit & Loss A/c</li>
                                <li>Balance Sheet</li>
                                <li>Debtors creditors balances</li>
                                <li>Bank statement</li>
                                <li>Chart of Accounts</li>
                                <li>Audit Trail</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={3}>
                            <h3>Human Resources</h3>
                            <ul>
                                <li>Employee Database</li>
                                <li>Dynamic HR Letter templates</li>
                                <li>Attendance Management</li>
                                <li>Recruitment Management</li>
                                <li>Leave Management</li>
                                <li>Shift Management</li>
                                <li>Payroll Generation</li>
                                <li>PF & ESI calculation</li>
                                <li>Loan Management</li>
                                <li>Tax Management</li>
                                <li>Automatically hits finance</li>
                                <li>Reports</li>
                                <li>Dashboards</li>
                            </ul>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={4}>
                            <h3>Asset Management</h3>
                            <ul>
                                <li>Manage depreciable/non-depreciable assets and customize asset depreciation</li>
                                <li>Import/Export asset records</li>
                                <li>Track, monitor and transfer assets</li>
                                <li>Assign assets to Employees</li>
                                <li>Assign Vision Units to an asset to track billing value</li>
                            </ul>
                        </Col>
                    </Col>
                </Row>

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
