import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glassesimoji from '../../img/glassesimoji.png'

const Services = () => {
    return (
        <div className="sevices">

            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est a, cum officia quis. Reiciendis saepe mollitia illum quidem hic!
                <br />
                    quisquam saepe in ab vi. Reiciendis saepe mollitia illum quidem hic!
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{background:"#abf1ff94"}}></div>
            </div>

            <div className="cards">
                right side
            </div>
        </div>
    )
}

export default Services