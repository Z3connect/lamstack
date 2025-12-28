import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import FeatureSection from '../components/FeatureSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-screen">
            <Hero />
            <Navbar />
            <FeatureSection />
            <ServicesSection />
            <TestimonialSection />
            <StatsSection />
            <Footer />
        </div>
    );
};

export default Home;
