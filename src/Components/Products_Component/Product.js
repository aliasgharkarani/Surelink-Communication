import React, { Component } from 'react';
import Sales from '../../assets/sales.jpg';
import Inventory from '../../assets/inventory.jpg';
import Purchase from '../../assets/purchse.jpg';
import Plant from '../../assets/plant.jpg';
import erpbanner from '../../assets/erpbanner.png';
import { Row, Col} from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer.js'

class Products extends Component {
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
                <Col md={12}>
                    <Col md={1} />
                    <Col md={11}>
                        <h4 style={{ marginTop: "20px" }}>ALL-IN-ONE CLOUD BASED ERP SOFTWARE FOR MANUFACTURING AND TRADING COMPANIES</h4>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={6}>
                            <p style={{ textAlign: "justify" }}>Tech Cloud ERP is a web/cloud based ERP software in Hyderabad, India with modern tech-savvy functionalities of Business Process Management, designed specifically to fit all the types of business verticals. Developed in a web based environment, it includes robust functionalities which are considered as a part of the extended high-end enterprise application. Tech Cloud ERP is a perfect fit for any kind of any business process. Even, it offers the finest in technology, design, architecture, functionality, features and the ease of use which propose a great user experience. To get a deeper understanding of how ERP solutions can transform your business, it helps to get a better sense of what ERP actually is and how it works. As we are the best ERP software providers in Hyderabad, India here's a brief introduction to ERP and why it seems like everyone's talking about it. ERP is an acronym for Enterprise Resource Planning, but even its full name doesn't shed much light on what ERP is or what it does. For that, you need to take a step back and think about all of the various processes that are essential to running a business, including sales & marketing, purchase, inventory, production, accounting, human resources and beyond. At its most basic level, ERP software integrates these various functions into one complete system to streamline processes and information across the entire organization.</p>
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "column" }} md={5}>
                            <img src={erpbanner} alt="collection" style={{height: '320px' }} />
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
                            <img src={obj.pic} alt="collection" height={100} width={100} />
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
                <Footer />
            </div>
        );
    }
}
export default Products;
