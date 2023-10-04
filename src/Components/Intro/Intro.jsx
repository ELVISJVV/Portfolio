import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy2.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I am </span>
                    <span>Elvis Vásquez</span>
                    <span>Full Stack Developer with a track record in diverse projects, including E-commerce. Currently in the sixth semester of a Computer Science and Systems Engineering program. Committed to continuous learning, integrating academic knowledge with practical expertise. Enthusiastic about achieving technical excellence and driving innovation in dynamic development environments.</span>
                </div>
                {/* <button className="button i-button">Hire me</button> */}
                <div className="i-icons">
                    <a href="https://github.com/ELVISJVV" target='_blank'>

                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/elvis-vásquez-ab9277264" target='_blank'>
                        <img src={LinkedIn} alt="" />
                    </a>
                    {/* <a href="">

                        <img src={Instagram} alt="" />
                    </a> */}
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={Glassesimoji} alt="" />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className='floating-div'>
                    <FloatingDiv image={Crown} txt1='Full Stack' txt2=' Developer' />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-div'>
                    <FloatingDiv image={Thumbup} txt1='Solutions ' txt2='Expert' />
                </motion.div>

                {/* {blur divs} */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>

                <div className="blur" style={
                    {
                        background: '#c1f5ff',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem',
                    }
                }></div>
            </div>

        </div>

    )
}

export default Intro