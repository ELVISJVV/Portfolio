import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Rickadnmorty from "../../img/rickadnmorty.png"
import Ecommerce from "../../img/ecommerce.png"
import Videogames from "../../img/videogames.png"
import Biblioteca from "../../img/biblioteca.png"
import 'swiper/css'
import Dlujo from "../../img/Dlujo.jpg"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const projects = [{
        id: 1,
        title: "E-commerce Dlujo",
        img: Dlujo,
        link: "https://dlujo-app.netlify.app",
    },
    {
        id: 2,
        title: "Videogames",
        img: Videogames,
        link: "https://videogames-app.netlify.app",
    },
    {
        id: 3,
        title: "Rick and Morty",
        img: Rickadnmorty,
        link: "https://rickandmorty-app.netlify.app",
    },

    {
        id: 4,
        title: "Biblioteca Usac",
        img: Biblioteca,
        link: "https://biblioteca-app.netlify.app",
    }]
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

                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="portfolio-item">
                                <img src={project.img} alt="" />
                                <h3>{project.title}</h3>
                                <a href={project.link} target='_blank'>Deployment</a>
                            </div>
                        </SwiperSlide>
                    )
                })}


                {/* <SwiperSlide>
                    <span>E-commerce Dlujo</span>
                    <img src={Dlujo} alt="" />
                    <a href="https://dlujo-app.netlify.app
                    " target='blank'>Deployment</a>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Probando</span>
                    <img src={Videogames} alt="" style={{ width: "18rem", height: "auto" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <span>Probando</span>
                    <img src={Rickadnmorty} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <span>Probando</span>
                    <img src={Biblioteca} alt="" style={{ width: "18rem" }} />
                </SwiperSlide> */}
            </Swiper>
        </div>

    )
}

export default Portfolio