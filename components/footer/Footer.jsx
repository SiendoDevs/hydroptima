"use client";

import React from "react";
import Link from "next/link";

const linkList = [
  {
    itemName: "Faqs",
    link: "/",
  },
  {
    itemName: "Term & Conditions",
    link: "/",
  },
  {
    itemName: "Privacy Policy",
    link: "/",
  },
  {
    itemName: "Help",
    link: "/",
  },
  {
    itemName: "Affiliate",
    link: "/",
  },
  {
    itemName: "Services",
    link: "/",
  },
];

const Product = [
  {
    itemName: "Inicio",
    link: "/",
  },
  {
    itemName: "Solución",
    link: "/",
  },
  {
    itemName: "Beneficios",
    link: "/",
  },
  {
    itemName: "Vanguardia",
    link: "/",
  },
];

const Footer = () => {

  const inicioHome = () => {
    const portfolioSection = document.getElementById("inicio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBeneficios = () => {
    const beneficiosSection = document.getElementById("beneficios");
    if (beneficiosSection) {
      beneficiosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToVanguardia = () => {
    const vanguardiaSection = document.getElementById("vanguardia");
    if (vanguardiaSection) {
      vanguardiaSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const scrollToContacto = () => {
    const contactoSection = document.getElementById("footer");
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading --ptf-accent-1"
            style={{ maxWidth: "37.5rem" }}
          >
            Protege tus Cañerías y Electrodomésticos
          </div>

          <div className="ptf-footer-heading --ptf-accent-1">
            ¡Contactate con{" "}
            <Link
              className="has-accent-1 text-decoration-underline"
              href="https://wa.me/5491130669655?text=¡Hola, quiero más info sobre Hydroptima!"
              target="_blank"
            >
              nosotros!
            </Link>
          </div>

          <p className="fz-24 --ptf-accent-1">Corona Golf Club, Pilar 1629, Buenos Aires</p>
          <a className="fz-40 --ptf-accent-1 has-accent-1" href="mailto:info@tuhydroptima.com">
            info@tuhydroptima.com
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          {/* <div className="ptf-widget ptf-widget-links --ptf-accent-1">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i} class="has-accent-1">
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Enlaces Rápidos</h4>
            <div className="ptf-widget ptf-widget-links --ptf-accent-1">
              <ul>
                {Product.map((val, i) => (
                  <li key={i} class="has-accent-1">
                    <a onClick={val.itemName === "Solución" ? scrollToPortfolio : val.itemName === "Beneficios" ? scrollToBeneficios : val.itemName === "Vanguardia" ? scrollToVanguardia : val.itemName === "Inicio" ? inicioHome : val.itemName === "Contacto" ? scrollToContacto : null}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
