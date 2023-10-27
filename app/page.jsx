import Link from "next/link";

// import Award from "../../../components/award/Award";

import Blog from "../components/blog/Blog";
import Brand from "../components/brand/Brand";
import Counter from "../components/counter/Counter";
import CopyRight from "../components/footer/copyright/CopyRight";
import Footer from "../components/footer/Footer";
import HeaderHomeDefault from "../components/header/HeaderHomeDefault";
import HeroDefault from "../components/hero/HeroDefault";
import Portfolio from "../components/portfolio/Portfolio";
import Approach from "../components/service/Approach";
import ServiceOne from "../components/service/ServiceOne";
import Testimonial from "../components/testimonial/Testimonial";
import Faq from "@/app/(others-pages)/faq/page";
import ImageGridTwo from "@/components/image-grid/ImageGridTwo";
// import ImageGridFive from "@/components/image-grid/ImageGridFive"
import ContactJarallax from "@/components/jarallax/ContactJarallax";
import Image from "next/image";

export const metadata = {
  title: "Hydroptima - La solución al sarro",
  description: "La solución al sarro"
};

const HomeDefault = () => {

  return (
    <div className="ptf-site-wrapper animsition  ptf-is--home-default">
      {/* End Page SEO Content */}

      <HeaderHomeDefault />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default">
            {/*=============================================
                Start Hero Section
              ============================================== */}
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "15rem" }}
              ></div>
              <div className="container-xxl">
                <HeroDefault />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            <section id="portfolio-section">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1rem", "--ptf-md": "4rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h2 large-heading">
                        Nuestra <br />
                        solución
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                        En Hydroptima utilizamos un proceso más eficiente y sin sal para combatir la dureza del agua.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        {/* <!--Button--> */}
                        <a
                          className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                          href="https://youtu.be/msxkKI3QOiU?feature=shared"
                          target="_blank"
                        >
                          Ver video
                        </a>
                      </div>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Portfolio Section
              ============================================== */}
            <div className="container-fluid" style={{ padding: 0, position: "relative" }}>
              <div>
                <div>
                  <ContactJarallax />
                </div>
              </div>
            </div>
            {
              /* <section>
                <div className="container-xxl">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-9">
                      {/* <!--Animated Block--> */
              /* <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h2 large-heading d-inline-flex">
                  Agua Dura
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-3 text-md-end">
              {/* <!--Spacer--> */
              /* <div
                className="ptf-spacer"
                style={{ "--ptf-md": "1.875rem" }}
              ></div>
              {/* <!--Animated Block--> */
              /* <Link
                className="
                    ptf-link-with-arrow
                    fz-18
                    text-uppercase
                    fw-semibold
                    has-black-color
                    d-none d-lg-inline-flex
                  "
                href="/works-grid"
                style={{ marginLeft: "5.625rem" }}
              >
                Detección <i className="lnil lnil-chevron-right"></i>
              </Link>
            </div>
          </div>
          {/* <!--Spacer--> */
              /* <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem" }}
              ></div>
              {/* <!--Animated Block--> */
              /* <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Content Slider--> */
              /* <Portfolio />
            </div>
          </div>
          {/* <!--Spacer--> */
              /* <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
            </section> */
            }
            {/*=============================================
                Start Our Approach Section
              ============================================== */}
            <section
              id="beneficios"
              className="has-accent-1-background"
              style={{
                backgroundImage: `url(${"" + "/assets/img/root/service-bubble.png"
                  })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% calc(100% + 120px)",
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1rem", "--ptf-md": "4rem" }}
                  ></div>
                  <h2 className="h1 large-heading">Beneficios</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <Approach />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section id="vanguardia">
              <Faq />
              <div className="container-xxl">
                {/* <ImageGridTwo /> */}
                <Portfolio />
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
                <div style={{ borderBottom: '2px solid var(--ptf-accent-1)', marginBottom: '20px' }}></div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": " 2rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-6 order-lg-1">
                    <img src="/assets/img/imgs-de-la-marca/hydroptima-tubo1.jpg" alt="" />
                  </div>
                  <div className="col-lg-6 order-lg-2">
                    <div className="ptf-faq__category">
                      <h2 style={{ paddingTop: "35px" }}>Eficacia Pura</h2>
                    </div>
                    <div className="ptf-spacer" style={{ '--ptf-xxl': '2.5rem' }}></div>
                    <p className="fz-24">Experimenta la versatilidad del descalcificador Hydroptima y disfruta de la excelencia, tanto en tu hogar como en proyectos de construcción y diseño. Nuestra innovadora tecnología, que no depende de sal o electricidad, preserva la integridad de las cañerías y electrodomésticos.Olvídate de las preocupaciones por el sarro y asegura agua pura y espacios radiantes. ¡La elección definitiva para el confort de todos tus proyectos!</p>
                    <div className="ptf-spacer" style={{ '--ptf-xxl': '10rem', '--ptf-md': '5rem' }}></div>
                  </div>
                </div>
              </div>
              <div
                id="Nosotros"
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="container-xxl">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div className="ptf-spacer" style={{ '--ptf-xxl': '10rem', '--ptf-md': '5rem' }}></div>
                      <h2 className="large-heading">Nosotros</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-24">
                        Somos una empresa de origen francés que expandió su presencia a Argentina a fines de 2022. Desde entonces, hemos colaborado estrechamente con arquitectos y usuarios finales para potenciar la calidad de vida de nuestros clientes.<br /><br />En Hydroptima, comprendemos que el agua es un elemento vital y consideramos de suma importancia mejorar la calidad del agua en los hogares. Nuestro compromiso no solo se centra en la excelencia, sino también en la responsabilidad medioambiental. Estamos dedicados a brindar soluciones que no solo mejoren la calidad de vida, sino que también contribuyan a un mundo más sostenible y saludable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <Counter />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url("/assets/img/about-us-testimonial-background.jpg")`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                      style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                      <Image
                        width={1200}
                        height={1200}
                        style={{ width: "30%", height: "30%" }}
                        src="/assets/img/root/quote.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>

                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    <Testimonial />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Award Section
              ============================================== */}


            <section>
              {/* <!--Spacer--> */}
              {/* <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div> */}
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <Blog />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              {/* <!--Spacer--> */}
              {/* <ContactJarallax />
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div> */}
            </section>



            {/*=============================================
                End Blog Section
              ============================================== */}
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-1" id="footer">
          <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "3rem", "--ptf-md": "5rem" }}
          ></div>
          <div className="container-xxl">
            <div className="ptf-footer__top">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeDefault;