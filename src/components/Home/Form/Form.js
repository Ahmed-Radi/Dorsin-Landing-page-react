import React from 'react';
import './Form.css'

export default function Form() {
    return (
        <section className="form">

            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h2 className="h1 form__title">GET IN TOUCH</h2>
                        <div className="section-title-border"></div>
                        <p className="form__subtitle">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <div className="form-info-contnet">
                            <p className="form-info">
                                <span className="h5">Office Address 1:</span>
                                <br />
                                <span className="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span>
                            </p>
                            <p className="form-info">
                                <span className="h5">Office Address 2:</span>
                                <br />
                                <span className="text-muted d-block mt-2">
                                    2467 Swick Hill Street
                                    <br />
                                    New Orleans, LA 70171
                                </span>
                            </p>
                            <p className="form-info">
                                <span className="h5">Working Hours:</span>
                                <br />
                                <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="form-input">
                            <form>
                                <div className="row">
                                    <div className="col-lg">
                                        <input className="form-control" type="text" placeholder="Your name*" />
                                    </div>
                                    <div className="col-lg">
                                        <input className="form-control" type="email" placeholder="Your email*" />
                                    </div>
                                </div>
                                <input className="form-control" type="text" placeholder="Your subject..."/>
                                <div className="">
                                    <textarea className="form-control textarea-input" name="" spellCheck="false" id="" placeholder="Your message..." cols="30" rows="4"></textarea>
                                </div>
                                <div className="text-end hover-effect-px">
                                    <button className="btn form-button">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
