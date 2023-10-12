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
    itemName: "Works",
    link: "/",
  },
  {
    itemName: "About",
    link: "/",
  },
  {
    itemName: "News",
    link: "/",
  },
  {
    itemName: "Contact",
    link: "/",
  },
];

const Footer = () => {
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
              href="/contact"
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
          <div className="ptf-widget ptf-widget-links --ptf-accent-1">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i} class="has-accent-1">
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div>
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
            <h4 className="ptf-widget-title">Product</h4>
            <div className="ptf-widget ptf-widget-links --ptf-accent-1">
              <ul>
                {Product.map((val, i) => (
                  <li key={i} class="has-accent-1">
                    <a href={val.link}>{val.itemName}</a>
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
