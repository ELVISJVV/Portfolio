import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services">

            <div className="awesome">
                <span style = {{color: darkMode? 'white' : ''}} >My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetug elit. Quo est a,  saepe mollitia illum quidem hic!
                    <br />
                    quisquam saepe in ab vi. Reiciendis saepe mollitia illum quidem hic!
                </span>

                <a href="" download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>

            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshpo,Adobe, Adobe xd "} ></Card>
                </div>

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, CSS, JavaScriot, React "} ></Card>
                </div>

                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"loerem adadadaekdakd "} ></Card>
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services