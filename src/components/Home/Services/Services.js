import React from 'react';
import './Services.css';
import { data } from '../../../data/data'
import ServicesItem from '../ServicesItem/ServicesItem';
import online from '../../../assets/online-world.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    const item = data.serve.map((item, index) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 services__items mt-3" key={index}>
                <ServicesItem title={item.title} text={item.text} icon={item.icon} index={index}/>
            </div>
        )
    })
    return (
        <section className="services">
            <div className="container services__first-section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-center">
                        <h2>OUR SERVICES</h2>
                        <div className="section-title-border"></div>
                        <p className="par pt-4">
                            We craft digital, graphic and dimensional thinking, to create category leading brand experiences that
                            have meaning and add a value for our clients.
                        </p>
                    </div>
                </div>
                <div className="row mt-4 text-center">
                    {item}
                </div>
            </div>
            <div className="services__second-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 services__second-section__left">
                            <h3 className="service-second-section-title">A digital web design studio creating modern & engaging online experiences</h3>
                            <p className="service-second-section-subtitle">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <ul>
                                <li>We put a lot of effort in design.</li>
                                <li>The most important ingredient of successful website.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                <li>Submit Your Orgnization.</li>
                            </ul>
                            <button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className="col-md-6">
                            <div className="services__section-image">
                                <img src={online} alt="Online" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
