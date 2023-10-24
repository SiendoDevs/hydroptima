"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuContent = [
  {
    name: "Inicio",
    activeClass: "sf-with-ul",
    page: "home",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "Home Default",
        routerPath: "/home-default",
      },
      {
        name: "Home Studio",
        routerPath: "/home-studio",
      },
      {
        name: "Home Agency",
        routerPath: "/home-agency",
      },
      {
        name: "Home Minimal",
        routerPath: "/home-minimal",
      },
      {
        name: "Home Dark",
        routerPath: "/home-dark",
      },
      {
        name: "Home Freelancer",
        routerPath: "/home-freelancer",
      },
      {
        name: "Home Trending",
        routerPath: "/home-trending",
      },
      {
        name: "Home Modern",
        routerPath: "/home-modern",
      },
    ],
  },
  {
    name: "Solución",
    page: "works",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Works Grid",
        routerPath: "/works-grid",
      },
      {
        name: "Works Masonry",
        routerPath: "/works-masonry",
      },
      {
        name: "Works Listing",
        routerPath: "/works-listing",
      },
      {
        name: "Works Carousel",
        routerPath: "/works-carousel",
      },
      {
        name: "Works Showcase",
        routerPath: "/works/3",
      },
    ],
  },
  {
    name: "Beneficios",
    activeClass: "",
    menuClass: "",
    page: "blog",

    //   dropDownItems: [
    //     {
    //       name: "Blog Grid",
    //       routerPath: "/blog-grid",
    //     },
    //     {
    //       name: "Blog Masonry",
    //       routerPath: "/blog-masonry",
    //     },
    //     {
    //       name: "Blog Sidebar",
    //       routerPath: "/blog-sidebar",
    //     },
    //     {
    //       name: "Blog Details",
    //       routerPath: "/blog/2",
    //     },
    //     {
    //       name: "Blog Details Sidebar",
    //       routerPath: "/blog-details-sidebar/7",
    //     },
    //   ],
  },
  {
    name: "Vanguardia",
    activeClass: "",
    page: "others",
    menuClass: "two-columns",
    //   dropDownItems: [
    //     {
    //       name: "About Us",
    //       routerPath: "/about-us",
    //     },
    //     {
    //       name: "About Me",
    //       routerPath: "/about-me",
    //     },
    //     {
    //       name: "Services",
    //       routerPath: "/service",
    //     },
    //     {
    //       name: "Service Details",
    //       routerPath: "/service/5",
    //     },
    //     {
    //       name: "Pricing",
    //       routerPath: "/pricing",
    //     },
    //     {
    //       name: "Team",
    //       routerPath: "/team",
    //     },
    //     {
    //       name: "FAQ",
    //       routerPath: "/faq",
    //     },
    //     {
    //       name: "Contact",
    //       routerPath: "/contact",
    //     },
    //     {
    //       name: "Page 404",
    //       routerPath: "/404",
    //     },
    //     {
    //       name: "Coming Soon",
    //       routerPath: "/coming-soon",
    //     },
    //   ],
  },
  {
    name: "Contacto",
    activeClass: "",
    page: "others",
    menuClass: "two-columns",
  },
];



const DropdownMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  if (pathname.split("/")[1].trim() != "home-default") {
    currentPage = pathname.split("-")[0].split("/")[1];

    // if (
    //   currentPage !== "works" &&
    //   currentPage !== "blog" &&
    //   currentPage !== "home" &&
    //   currentPage !== "Vanguardia"
    // ) {
    //   currentPage = "others";
    // }
  }

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
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a className={item.activeClass} onClick={item.name === "Solución" ? scrollToPortfolio : item.name === "Beneficios" ? scrollToBeneficios : item.name === "Vanguardia" ? scrollToVanguardia : item.name === "Inicio" ? inicioHome : item.name === "Contacto" ? scrollToContacto : null}>
            <span className={item.page == currentPage ? "active-page" : ""}>
              {item.name}
            </span>
          </a>

          {/* <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link href={val.routerPath}>
                  {" "}
                  <span
                    className={val.routerPath == pathname ? "active-page" : ""}
                  >
                    {val.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul> */}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
