import React from 'react'
import hero from '../assets/hero.svg';
import '../css/HeroTestimonial.css';
function HeroSection() {
    return (
        <section className="hero">
            <div className="hero__text">
                <h2 className="hero__maintext">Amazing<br/> Experiences from Our Wonderful Customers</h2>
                <p className="hero__subtext">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className="hero__img">
                <img src={hero} className="hero__img--img" alt="hero"/>
            </div>
        </section>
    )
}

export default HeroSection
