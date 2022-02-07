import React from 'react';
import './BannerTwo.css'
import wave from '../../../assets/bg-pattern.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function BannerTwo() {
            return (
                <section>
                    <div className="banner-two">
                        <div className="banner-two__layout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                    <h2 classNmae="h1">Let's Get Started</h2>
                                    <div className="section-title-border"></div>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="hover-effect-px">
                                        <button>Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                    </div>
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
