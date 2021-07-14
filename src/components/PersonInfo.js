import React from 'react';
import '../css/Person.css'

function PersonInfo({image, name, location, role, text}) {
    return (
        <div className="person">
            <img src={image} className="person__img" alt="person" />
            <h3 className="person__heading">{name}</h3>
            <div className="person__tabs">
                {location?<span className="person__tab person__tab--location">{location}</span>:null}
                <span className={`person__tab person__tab--role ${role?.toLowerCase() === 'vendor'?'vendor':''}`}>{role}</span>
            </div>
            <p className="person__text">
                {text}
            </p>
        </div>
    )
}

export default PersonInfo
