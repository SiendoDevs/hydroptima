"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import "react-pro-sidebar/dist/css/styles.css";
import dynamic from "next/dynamic";

import "../public/assets/scss/main.scss";
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    if (typeof window !== "undefined") {
      setShowCursor(true);
    }
  }, []);
  return (
    <html suppressHydrationWarning={true} className="html" lang="en">
      <body>
        {children}
        {showCursor}
        {showCursor && <ScrollToTop />}{" "}
      </body>
    </html>
  );
}
