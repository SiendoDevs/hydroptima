"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

import Social from "../../social/Social";

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

const MobileMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  currentPage = pathname.split("-")[0].split("/")[1];

  if (
    currentPage !== "works" &&
    currentPage !== "blog" &&
    currentPage !== "home"
  ) {
    currentPage = "others";
  }
  // titleStyle={item.page == currentPage ? {color: '#fa4529'}:''}
  const inicioHome = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("inicio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBeneficios = (e) => {
    e.preventDefault();
    const beneficiosSection = document.getElementById("beneficios");
    if (beneficiosSection) {
      beneficiosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToVanguardia = (e) => {
    e.preventDefault();
    const vanguardiaSection = document.getElementById("vanguardia");
    if (vanguardiaSection) {
      vanguardiaSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const scrollToContacto = (e) => {
    e.preventDefault();
    const contactoSection = document.getElementById("footer");
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <MenuItem
                  className={item.routerPath == pathname ? "active-page" : ""}
                  key={i}
                >
                  <Link href={`#${item.name}-section`} onClick={item.name === "Solución" ? scrollToPortfolio : item.name === "Beneficios" ? scrollToBeneficios : item.name === "Vanguardia" ? scrollToVanguardia : item.name === "Inicio" ? inicioHome : item.name === "Contacto" ? scrollToContacto : null}>{item.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span><a href="https://tuhydroptima.com/" className="has-accent-1">Hydroptima</a></span>. Todos los derechos reservados.{" "}
          <br />
          {/* Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
          </span>
          . */}
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
