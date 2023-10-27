"use client"

import React from "react";
import Link from "next/link";
import "./ContactJarallax.css"

const ContactJarallax = () => {
  return (
    <div className="text-center background-container">
      <div className="d-inline-flex text-start align-items-center justify-content-center h-100">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="fz-36 fw-bold" style={{ color: "white" }}>Agua más limpia</div>
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
          <div className="fz-120 fz-90--md --ptf-color-white fw-bold lh-1p1 ptf-filled-link" style={{ color: "white" }}>
            0% Sarro
          </div>
          <p className="fz-20" style={{ color: "white" }}>Ahora tu caldera, y tus artefactos de cocina y baño van a durar muchísimo más</p>
          {/* <div className="fz-80 --ptf-color-white" style={{ color: "white" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ height: "1em" }}
              viewBox="0 0 17 17"
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};


export default ContactJarallax;
