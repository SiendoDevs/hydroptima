"use client";

import React from "react";
import Image from "next/image";
const heroContent = {
  title: "Purificador de agua",
  subTitle1: "de alto nivel para tu casa",
  subTitle2: "",
  subTitleDescription1: "Tomá agua de tu canilla sin miedo",
  subTitleDescription2: "",
  detailsDescription: `Filtra con eficiencia incomparable todos los contaminantes como: Arsénico, Pesticidas, Plomo, Cloro`,
  detailsDescription2: `Elimina todos los microorganismos patógenos.`,
  detailsDescription3: `El filtro se instala directamente debajo de la mesada de la cocina.`,
};

const HeroTwo = () => {
  return (
    <div className="row">
      <div className="col-xl-9">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-80 fz-20--sm fz-60--md">{heroContent.title}</h1>
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-40
                fz-40--md
                lh-1p3
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
            {heroContent.subTitle2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "5rem",
            "--ptf-md": "2rem",
          }}
        ></div>
        <div className="row">
          <div className="col-xl-8">
            <div style={{ maxWidth: "545px" }}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
                <p
                  className="
                fz-36
                fz-20--sm
                fw-extrabold
                lh-1p1
                has-white-color
              "
                >
                  {heroContent.subTitleDescription1} <br />
                  {heroContent.subTitleDescription2}
                </p>
                <p className="fz-20 has-white-color">
                  {heroContent.detailsDescription}<br /><br />
                  {heroContent.detailsDescription2}<br /><br />
                  {heroContent.detailsDescription3}<br /><br />
                  Fabricado en <strong>Estados Unidos</strong>
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "6.875rem",
                  "--ptf-md": "3.4375rem",
                }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Button--> */}
                <a
                  className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                  href="https://wa.me/5491130669655?text=¡Hola, quiero más info sobre Hydroptima!"
                  target="_blank"
                >
                  Más Info
                  <i className="socicon-whatsapp" style={{ marginLeft: '10px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-none d-xl-block">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "3.75rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          {/* <!--Mask Image--> */}
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
