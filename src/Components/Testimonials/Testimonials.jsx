import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Pagination } from 'swiper/modules'
// import { Pagination } from 'swiper'
import "swiper/css/pagination"

// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";

import Rickadnmorty from "../../img/rickadnmorty.png"
import Videogames from "../../img/videogames.png"
import Biblioteca from "../../img/biblioteca.png"
import 'swiper/css'
import Dlujo from "../../img/Dlujo.jpg"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Testimonials = () => {
    // const clients = [
    //     {
    //         img: profilePic1,
    //         review:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //     },
    //     {
    //         img: profilePic2,
    //         review:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //     },
    //     {
    //         img: profilePic3,
    //         review:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //     },
    //     {
    //         img: profilePic4,
    //         review:
    //             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    //     },
    // ]
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const projects = [{
        id: 1,
        title: "E-commerce D`lujo",
        img: Dlujo,
        nameLink: "Deployment",
        link: "https://dlujo-app.netlify.app",
        content: "Web application designed and developed to transform the electronic components purchasing experience, providing an intuitive and secure platform for customers. It stands out for attractive user interfaces created with React and CSS, backed by efficient server logic on the backend using Node.js and related technologies. Database management is carried out with PostgreSQL and Sequelize, ensuring optimal performance. It collaborates in integrating payment gateways, including Mercado Pago, for secure transactions. The application's security is optimized through the implementation of Auth0 and Nodemailer."
    },
    {
        id: 2,
        title: "Videogames",
        img: Videogames,
        nameLink: "Github",
        link: "https://github.com/ELVISJVV/PI-VIDEOGAMES",
        content:
            "Web application crafted with technologies such as React for interactive interfaces, Redux for efficient client-side state management, and Node with Express for handling the application's logic and communication with the RAWG API. It leverages Sequelize and PostgreSQL for effective database management, empowering users to search, visualize, filter, sort, and create new video games, enhancing the exploration and management experience on the platform."

    },
    {
        id: 3,
        title: "Rick and Morty",
        img: Rickadnmorty,
        nameLink: "Github",
        link: "https://github.com/ELVISJVV/rick_and_morty",
        content: "Web application crafted to explore the Rick and Morty universe, leveraging the official API. It features interactive interfaces designed in React and utilizes Redux for efficient client-side state management. In the backend, Node.js with Express is implemented to handle the application logic and communicate with the Rick and Morty API. The platform offers character search and exploration functions, along with the ability to add characters to favorites for a personalized experience."
    },

    {
        id: 4,
        title: "Biblioteca Usac",
        img: Biblioteca,
        content: "A desktop application developed in Java aims to manage a library through dedicated software. The application comprises two main views: administration and user.The administration view allows for creating, modifying, deleting, and viewing bibliographic sources and users in the system. On the other hand, the normal user view facilitates the borrowing of bibliographic sources. All loans are recorded in a table, and each user has the ability to return any book, thesis, or journal that has been borrowed.",
        nameLink: "Github",
        link: "https://github.com/ELVISJVV/IPC1_Proyecto1_202006666",
    }]

    return (
        <div className="t-wrapper" id='Portfolio'>
            <div className="t-heading">
                <span style={{ color: darkMode ? 'white' : '' }} >Recent Projects</span>
                <br />
                <span>  Portfolio </span>
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
                                <div className='projects-description'>
                                    <h3>{project.title}</h3>
                                    <span>{project.content}</span>
                                    <br />
                                    <a href={project.link} target='_blank'>{project.nameLink}</a>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials