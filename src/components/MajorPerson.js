import React from 'react';
import { Link } from 'react-router-dom';
import womanshopping from '../assets/womanshopping.svg'

function MajorPerson() {
    return (
        <section className="majorperson">
            <div className="majorperson__box">
                <div className="majorperson__text">
                    <h3 className="majorperson__heading">Josiah's Experience</h3>
                    <span className="majorperson__tag">VENDOR</span>
                    <p className="majorperson__p">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                        <Link className="majorperson__link" to="/story">
                            SHARE YOUR OWN STORY!
                            <svg width="297" height="12" viewBox="0 0 297 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125" stroke="#FF5C00"/>
                            </svg>

                        </Link>
                </div>
                <div className="majorperson__img">
                    <img className="majorperson__img--img" src={womanshopping} alt="majorperson" />
                </div>
            </div>
        </section>
    )
}

export default MajorPerson
