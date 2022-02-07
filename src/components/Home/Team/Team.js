import React from 'react';
import teamData from '../../../data/team'
import './Team.css'

export default function Team() {
    const team = teamData.info.map((member, index) => {
        return (
            <div className="col-lg-3 col-sm-6 text-center" key={index}>
                <div className="team__content">
                    <div className="team__image">
                        <img src={member.image} alt={member.image} />
                    </div>
                    <div className="team__info">
                        <h5>{member.name}</h5>
                        <p>{member.position}</p>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section className="team">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h2 className="h1 team__title">BEHIND THE PEOPLE</h2>
                        <div className="section-title-border"></div>
                        <p className="team__subtitle">It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {team}
                </div>
            </div>
        </section>
    );
}
