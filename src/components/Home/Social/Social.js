import React from 'react';
import './Social.css'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

export default function Social() {
    return (
        <section className="social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 center-item">
                        <div className="scoial-icon-container">
                            <SocialIcon className="social-icon" url="https://github.com/jaketrent" />
                            <SocialIcon className="social-icon" url="https://facebook.com/jaketrent" />
                            <SocialIcon className="social-icon" url="https://twitter.com/jaketrent" />
                        </div>
                    </div>
                    <div className="col-lg-3 info-contact">
                        <p className="contact-title">
                            <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                            <a className="contact-link" href="tel:+201019278438">+201019278438</a>
                        </p>
                    </div>
                    <div className="col-lg-3 info-contact">
                        <p className="contact-title">
                            <span><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                            <a className="contact-link" href="mailto:Ahmedradi743@gmail.com">Ahmedradi743@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
