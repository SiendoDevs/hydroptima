"use client"


import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` Quiero agradecerles a la gente de Hydroptima. Instalé su sistema anti sarro y no he tenido que preocuparme por el mantenimiento. La acumulación de sarro se redujo notablemente. ¡Gracias por mejorar la calidad de mi agua!`,
    name: "Ana D.",
    designation: "CEO at Liarch Studio",
  },
  {
    descriptions: ` No solo obtuve agua de mejor calidad, sino que mi casa se ha revalorizado. Los posibles compradores ven el valor de su producto. Gracias por transformar mi hogar y mi inversión.`,
    name: "Agustin W.",
    designation: "CEO at Liarch Studio",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
            key={i}
          >
            <div
              className="ptf-testimonial ptf-testimonial--style-2"
              style={{
                "--ptf-text-align": "left",
                "--ptf-content-color": "var(--ptf-color-white)",
                "--ptf-author-color": "var(--ptf-color-white)",
                "--ptf-info-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-testimonial__content">
                <p>{val.descriptions}</p>
              </div>
              <div className="ptf-testimonial__meta">
                <h6 className="ptf-testimonial__author">{val.name}</h6>
                <div className="ptf-testimonial__info">{val.designation}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
