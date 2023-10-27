"use client"


import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` Quiero agradecerles a la gente de Hydroptima. Instalé su sistema anti sarro y no he tenido que preocuparme por el mantenimiento. La acumulación de sarro se redujo notablemente. ¡Gracias por mejorar la calidad de mi agua!`,
    name: "Ana D.",
    designation: "Pilar, Buenos Aires",
  },
  {
    descriptions: ` No solo obtuve agua de mejor calidad, sino que mi casa se ha revalorizado. Los posibles compradores ven el valor de su producto. Gracias por transformar mi hogar y mi inversión.`,
    name: "Agustin W.",
    designation: "Bariloche, Río Negro",
  },
  {
    descriptions: ` Soy arquitecto y siempre estoy buscando soluciones eficientes para mis proyectos. El descalcificador de Hydroptima ha demostrado ser una elección brillante. No solo protege las instalaciones de agua de mis diseños, sino que también agrega valor a las propiedades. ¡Es una inversión que realmente marca la diferencia!`,
    name: "Javier R.",
    designation: "San Isidro, Buenos Aires",
  },
  {
    descriptions: ` Instalar el descalcificador de Hydroptima ha sido un cambio significativo en mi hogar. Adiós a las manchas de sarro en la ducha y a los electrodomésticos estropeados. Ahora, mi agua es más pura y mi vida más sencilla. Estoy impresionada por la efectividad y facilidad de uso de este sistema. ¡Lo recomiendo encarecidamente! `,
    name: "Pilar M.",
    designation: "Nordelta, Buenos Aires",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 700,
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
