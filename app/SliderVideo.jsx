"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../components/jarallax/ContactJarallax.css"

function Slider() {
    const breakpoints = {
        // Cuando el ancho de la ventana es igual o inferior a 640px, muestra solo 1 imagen por diapositiva.
        640: {
            slidesPerView: 1,
        },
        // Cuando el ancho de la ventana es superior a 640px, muestra 3 imágenes por diapositiva.
        768: {
            slidesPerView: 2,
        },
    };

    return (
        <Swiper
           breakpoints={breakpoints}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // breakpoints={breakpoints} // Aplicar reglas de responsive definidas anteriormente
        >
            <SwiperSlide>
                <div className="background-container-video1">
                    <video autoPlay muted loop>
                        <source src="assets/img/imgs-de-la-marca/hydroptima.mp4" type="video/mp4" />
                    </video>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="background-container-video2">
                    <video autoPlay muted loop>
                        <source src="assets/img/imgs-de-la-marca/pelando papa jaja.mp4" type="video/mp4" />
                    </video>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;