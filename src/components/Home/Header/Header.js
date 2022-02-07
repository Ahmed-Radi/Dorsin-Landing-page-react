import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <header>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>We help startups launch their products</h1>
                            <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                            <form>
                                <input type="email" placeholder="Email" />
                                <button type="submit" className="btn-submit hover-effect-px">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;