import React from 'react';
import './FeedBack.css'
import { data } from '../../../data/feedback'

export default function FeedBack() {
    const content = data.feedbackInfo.map((el, index) => {
        return (
            <div className="col-lg-4 hover-effect" key={index}>
                <div className="feedback__content">
                    <img src={el.image} alt={el.image} />
                    <p>
                        {el.feedback}
                    </p>
                </div>
                <div className="user-feedback-info">
                    <h5 className="user-name">{el.name} - <span className="text-muted">{el.jobTitle}</span></h5>
                </div>
            </div>
        )
    })
    return(
        <section className="feedback">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h2 className="h1 feedback__title">WHAT THEY'VE SAID</h2>
                        <div className="section-title-border"></div>
                        <p className="feedback__subtitle">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
                    </div>
                </div>
            </div>
            <div className="container user-feedback">
                <div className="row">
                    {content}
                </div>
            </div>
        </section>
    );
}
