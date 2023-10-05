import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Pagination } from 'swiper/modules'
// import { Pagination } from 'swiper'
import "swiper/css/pagination"

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import Rickadnmorty from "../../img/rickadnmorty.png"
import Videogames from "../../img/videogames.png"
import Biblioteca from "../../img/biblioteca.png"
import 'swiper/css'
import Dlujo from "../../img/Dlujo.jpg"


const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
    ]

    const projects = [{
        id: 1,
        title: "E-commerce D`lujo",
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
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>


                {/* {projects.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <span>{client.title}</span>
                                <img src={client.img} alt="" />
                                <span>{client.link}</span>
                            </div>
                        </SwiperSlide>
                    )
                })} */}
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={project.img} alt="" />
                                <h3>{project.title}</h3>
                                <a href={project.link} target='_blank'>Deployment</a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials