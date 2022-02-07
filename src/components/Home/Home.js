import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';
import Team from './Team/Team';
import Work from './Work/Work';
import FeedBack from './FeedBack/FeedBack';
import BannerTwo from './BannerTwo/BannerTwo';
import Blog from './Blog/Blog';
import Form from './Form/Form';
import Social from './Social/Social';

export default function Home() {
    return (
        <div>
            <Header />
            <Services />
            <Banner />
            <Pricing />
            <Team />
            <Work />
            <FeedBack />
            <BannerTwo />
            <Blog />
            <Form />
            <Social />
        </div>
    )
}