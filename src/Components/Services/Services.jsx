import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id='Services'>

            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }} >My Awesome</span>
                <span>services</span>
                <span>Providing comprehensive Full Stack development solutions, I specialize in both
                    <br />
                    the frontend and backend, excelling in the following competencies:
                </span>

                {/* <a href="" download>
                    <button className="button s-button">Download CV</button>
                </a> */}
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>

            <div

                className="cards">
                <motion.div
                    initial={{ left: "19rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Backend'}
                        detail={"Node.js, Sequelize, Expres.js, SQL & PostgreSQL. "} ></Card>
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Frontend'}
                        detail={"HTML, CSS, JavaScriot, React & Redux."} ></Card>
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Other Languages'}
                        detail={"Java, Python & Go "} ></Card>
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services