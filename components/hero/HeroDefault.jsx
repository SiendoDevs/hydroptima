"use client";

import React from "react";
import Image from "next/image";
const heroContent = {
  title: "Hydroptima",
  subTitle1: "La solución al sarro",
  subTitle2: "",
  subTitleDescription1: "Descalcificador de agua",
  subTitleDescription2: "",
  detailsDescription: `Nuestro revolucionario sistema Anti Sarro es la solución definitiva para prevenir la acumulación de minerales de calcio y magnesio, manteniendo tus instalaciones libres de escamas y eliminando contaminantes en el agua mediante la avanzada tecnología IPSE.`,
};

const HeroDefault = () => {
  return (
    <div className="row">
      <div className="col-xl-9">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-120 fz-110--lg fz-60--md">{heroContent.title}</h1>
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
                lh-1p3
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
            {heroContent.subTitle2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "8.125rem",
            "--ptf-md": "4.0625rem",
          }}
        ></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <p
            className="
                fz-70
                fz-40--md
                fw-extrabold
                lh-1p1
                has-white-color
              "
          >
            {heroContent.subTitleDescription1} <br />
            {heroContent.subTitleDescription2}
          </p>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{
            "--ptf-xxl": "9.375rem",
            "--ptf-md": "4.6875rem",
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
                <p className="fz-24 has-white-color">
                  {heroContent.detailsDescription}
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
                  href="about-us.html"
                  target="_self"
                >
                  Más Info.
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
          <div className="ptf-mask-image" style={{ maxWidth: "18.25rem" }}>
            <Image
              width={1200}
              height={1200}
              style={{ width: "100%", height: "100%" }}
              className="spin"
              src="/assets/img/imgs-de-la-marca/circular-iso-2.png"
              alt="logo"
              loading="lazy"
            />
            <Image
              width={1200}
              height={1200}
              style={{ width: "100%", height: "100%" }}
              src="/assets/img/imgs-de-la-marca/circular-iso.png"
              alt="logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDefault;
