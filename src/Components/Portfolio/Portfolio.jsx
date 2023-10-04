import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
import Dlujo from "../../img/dlujo.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'>
                <SwiperSlide>
                    <span>Probando</span>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <span>Probando</span>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <span>Probando</span>
                    <img src={Dlujo} alt="" />
                    <a href="https://dlujo-app.netlify.app
                    " target='blank'>Deployment</a>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Probando</span>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Portfolio