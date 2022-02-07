import React from 'react';
import { pricing } from '../../../data/pricing'
import './Pricing.css'
export default function Pricing() {
    const item = pricing.price.map((data, index) => {
        let addClass = '';
        index === 1 ? addClass = 'price-active' : addClass = '';
        return (
            <div className="col-md-4 col-sm-12" key={index}>
                <div className={`text-center ${addClass} price-div hover-effect`} key={index}>
                    <h4>{data.title}</h4>
                    <h1>$ {data.cost}</h1>
                    <h6>{data.subTitile}</h6>
                    <div className="gray-line"></div>
                    <ul className="price-div__table-info">
                        <li>Bandwidth: <span>{data.Bandwidth}</span></li>
                        <li>Onlinespace: <span>{data.Onlinespace}</span></li>
                        <li>Support: <span>{data.Support}</span></li>
                        <li><span>{data.Domain}</span> Domain</li>
                        <li><span>{data.HiddenFees}</span> HiddenFees</li>
                    </ul>
                    <div className="hover-effect-px">
                        <button className="btn mt-4 price-div__btn">Join Now</button>
                    </div>
                </div>
            </div>
    )})
    return <section id="price">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2 className="price__title">OUR PRICING</h2>
                    <div className="section-title-border"></div>
                    <p className="price__subtitle">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                </div>
            </div>

            <div className="row mt-5">
                {item}
            </div>
        </div>
    </section>;
}
