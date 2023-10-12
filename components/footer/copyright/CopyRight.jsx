"use client";

import React from "react";
import SocialTwo from "../../social/SocialTwo";
import Image from "next/image";
const logo = "/assets/img/imgs-de-la-marca/logo-hydroptima-dark (1).svg";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="#">
          <Image
            width={1200}
            height={1200}
            style={{ width: "141px", height: "46px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright --ptf-accent-1">
          ©{new Date().getFullYear()}{" "}
          <span>
            <a
              class="has-accent-1"
              href="https://tuhydroptima.com/"
              rel="noopener noreferrer"
              target="_blank"
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
