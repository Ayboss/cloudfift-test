import React from 'react';
import { Link } from 'react-router-dom';
//styles in HeroTestimonial.css
import testimonialImg from '../assets/testimonial.svg'

function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial__box">
                <div className="testimonial__img">
                    <img className="testimonial__img--img" src={testimonialImg} alt="testimonial" />
                </div>
                <div className="testimonial__text">
                    <h3 className="testimonial__heading">Tolu &amp; Joy’s Experience</h3>
                    <span className="testimonial__tag">CUSTOMER</span>
                    <p className="testimonial__p">I had the best experience shopping with vasiti. 
                        Usability of the website was great, 
                        very good customer service, 
                        an all round great experience. 
                        I would definately be coming back!
                        I had the best experience shopping with vasiti.
                        Usability of the website was great, 
                        very good customer service,
                        an all round great experience. 
                        I would definately be coming back!</p>
                        <Link className="testimonial__link" to="/story">
                            SHARE YOUR OWN STORY!
                            <svg className="underline" width="297" height="12" viewBox="0 0 297 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125" stroke="#FF5C00"/>
                            </svg>
                        </Link>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
