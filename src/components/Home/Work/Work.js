import React from 'react';
import './Work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAddressCard, faBullseye, faPenFancy } from '@fortawesome/free-solid-svg-icons'

export default function Work() {
    return(
        <section className="work">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h2 className="h1 work__title">WORK PROCESS</h2>
                        <div className="section-title-border"></div>
                        <p className="work__subtitle">It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className="container work__second-section">
                <div className="row">
                    <div className="col-md-4 section-content line">
                        <FontAwesomeIcon className="icon" icon={faPenFancy} />
                        <h4 className="section-content__title">Tell us what you need</h4>
                        <p>The Big Oxmox advised her not to do so.</p>
                    </div>
                    <div className="col-md-4 section-content line">
                        <FontAwesomeIcon className="icon" icon={faAddressCard} />
                        <h4 className="section-content__title">Get free quotes</h4>
                        <p>Little Blind Text didn’t listen.</p>
                    </div>
                    <div className="col-md-4 section-content">
                        <FontAwesomeIcon className="icon" icon={faBullseye} />
                        <h4 className="section-content__title">Deliver high quality product</h4>
                        <p>When she reached the first hills.</p>
                    </div>
                </div>
                <button className="btn">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </section>
    );
}
