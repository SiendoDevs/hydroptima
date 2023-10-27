"use client"


import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      // Code that depends on the window object
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    if (typeof window !== 'undefined') {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);

    }

  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <button className="scroll-top " onClick={scrollToTop}>
            <Image
              width={1200}
              height={1200}
              style={{ width: '17px', height: '17px', filter: "hue-rotate(120deg)", }} src="/assets/img/chevron-w.png" alt="icon" />
          </button>
        </div>
      )}
      {isVisible && (
        <div className="scroll-topp" onClick={scrollToTop} style={{ bottom: '10px', left: '10px', marginBottom:"30px" }}>
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
      )}

    </>
  );
}
