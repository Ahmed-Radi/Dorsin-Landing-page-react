import React from 'react';
import './Blog.css'
import { data } from '../../../data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Blog() {
    const blogInfo = data.blog.map((el, index) => {
        return (
            <div className="col-lg-4 hover-effect" key={index}>
                <div className="blog-box">
                    <div className="blog__card">
                        <img src={el.image} alt={el.image} />
                        <h5 className="blog-card-job-title">{el.title}</h5>
                        <h4>
                            <a className="blog-title" href={el.link}>{el.linkTitle}</a>
                        </h4>
                        <p className="blog-description">{el.description}</p>
                        <div>
                            <a  className="read-btn" href={el.link}>Read more <FontAwesomeIcon icon={faArrowRight}/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="blog">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="blog__title">BLOG</h2>
                            <div className="section-title-border"></div>
                            <p className="blog__subtitle">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-4">
                        { blogInfo }
                    </div>
                </div>
            </div>
        </section>
    );
}
