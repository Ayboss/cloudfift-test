import React from 'react'

function ShareStory() {
    return (
        <div className="story">
            <form className="story__form">
                <h2 className="story__heading">Share your amazing story!</h2>
                <div className="story__form-group">
                    <label className="story__label" for="image">Upload your picture</label>
                    <label className="story__file-box" for="image">
                        <span className="story__file-box--span">Choose Image</span>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.44 11.0499L11.25 20.2399C10.1241 21.3658 8.59717 21.9983 7.00498 21.9983C5.4128 21.9983 3.88583 21.3658 2.75998 20.2399C1.63414 19.1141 1.00165 17.5871 1.00165 15.9949C1.00165 14.4027 1.63414 12.8758 2.75998 11.7499L11.95 2.55992C12.7005 1.80936 13.7185 1.3877 14.78 1.3877C15.8414 1.3877 16.8594 1.80936 17.61 2.55992C18.3605 3.31048 18.7822 4.32846 18.7822 5.38992C18.7822 6.45138 18.3605 7.46936 17.61 8.21992L8.40998 17.4099C8.0347 17.7852 7.52571 17.996 6.99498 17.996C6.46426 17.996 5.95527 17.7852 5.57998 17.4099C5.2047 17.0346 4.99387 16.5256 4.99387 15.9949C4.99387 15.4642 5.2047 14.9552 5.57998 14.5799L14.07 6.09992" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </label>
                    <input accept="image/*" placeholder="Choose Image" className="story__file" type="file" id="image"/>
                </div>    
                <div className="story__form--grid">
                    <div className="story__form-group">
                        <label className="story__label" for="firstname">First Name</label>
                        <input type="text" className="story__input" id="firstname"/>
                    </div>
                    <div className="story__form-group">
                        <label className="story__label" for="lastname">Last Name</label>
                        <input type="text" id="lastname" className="story__input" />
                    </div>
                </div>
                <div className="story__form-group">
                    <label className="story__label" for="textarea">Share your story</label>
                    <textarea id="textarea" className="story__textarea">
                    </textarea>
                </div>
                <div className="story__form-group">
                    <div className="story__radiogroup">
                        <p className="story__radiotext">What did you interact with Vasiti as?</p>
                        <div className="story__radiobox">
                            <label className="story__radiolabel">
                                <input type="radio" name="check"/>
                                <span>Customer</span>
                            </label>
                            <label className="story__radiolabel">
                                <input type="radio" name="check"/>
                                <span>Vendor</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="story__form-group">
                    <label className="story__label">City or Higher Institution (for Students)</label>
                    <input type="text" className="story__input"/>
                </div>
                <div className="story__buttondiv">
                    <button className="story__button">
                        Share your story!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShareStory
