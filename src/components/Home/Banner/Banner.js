import React from 'react';
import './Banner.css'
import wave from '../../../assets/bg-pattern.png'

export default function Banner() {
            return (
                <section>
                    <div className="banner">
                        <div className="banner__layout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                    <h2>Build your dream website today</h2>
                                    <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
                                    <button>View Plan & Pricing</button>
                                    </div>
                                </div>
                            </div>
                            <div className="image-wave">
                                <img src={wave} alt="wave" />
                            </div>
                        </div>
                    </div>
                </section>
            );
}
