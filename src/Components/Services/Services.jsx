import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Card from '../Card/Card'

const Services = () => {
    return (
        <div className="services">

            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetug elit. Quo est a,  saepe mollitia illum quidem hic!
                    <br />
                    quisquam saepe in ab vi. Reiciendis saepe mollitia illum quidem hic!
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
            </div>

            <div className="cards">
                <div>
                    <Card
                    emoji ={HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshpo,Adobe, Adobe xd "} ></Card>
                </div>
            </div>
        </div>
    )
}

export default Services