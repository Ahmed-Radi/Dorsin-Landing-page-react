import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Visa, Mastercard, Maestro, PaypalTransparent } from "react-pay-icons";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4>DORSIN</h4>
                            <ul className="list-unstyled footer-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">about us</a></li>
                                <li><a href="#Careers">Careers</a></li>
                                <li><a href="#Contact">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Information</h4>
                            <ul className="list-unstyled footer-list">
                                <li><a href="#home">Terms & Condition</a></li>
                                <li><a href="#about">About us</a></li>
                                <li><a href="#Careers">Jobs</a></li>
                                <li><a href="#Contact">Bookmarks</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Support</h4>
                            <ul className="list-unstyled footer-list">
                                <li><a href="#home">FAQ</a></li>
                                <li><a href="#about">Contact</a></li>
                                <li><a href="#Careers">Disscusion</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Subscribe</h4>
                            <p className="">
                            In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.
                            </p>
                            <div className="footer__subscribe">
                                <input type="email" placeholder="Email" />
                                <a href="#subscribe" className="footer__subscribe-icon"><FontAwesomeIcon icon={faPaperPlane} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="under-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="copy-right">
                                2022 &copy; Ahmed Radi
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="payment-method">
                                <span>
                                    <Visa style={{ marginRight: 10 }} />
                                </span>
                                <span>
                                    <Mastercard style={{ marginRight: 10 }} />
                                </span>
                                <span>
                                    <PaypalTransparent className="paypal" style={{ marginRight: 10 }} />
                                </span>
                                <span>
                                    <Maestro />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
