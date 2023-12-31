"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";
import Image from "next/image";
const logo = "/assets/img/imgs-de-la-marca/logo-hydroptima-white.svg";

const CopyRight = () => {
  const inicioHome = () => {
    const portfolioSection = document.getElementById("inicio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a onClick={inicioHome}>
          <Image
            width={1200}
            height={1200}
            style={{ width: "139px", height: "24px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright --ptf-accent-1" style={{color:"white"}}>
          ©{new Date().getFullYear()}{" "}
          <span>
            <a
              class="has-accent-1"
              onClick={inicioHome}
              rel="noopener noreferrer"
              target="_self"
            >
              Hydroptima{" "}
            </a>
          </span>
          Todos{" "}
          los derechos reservados.
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials --ptf-accent-1 ">
          <SocialTwo />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
