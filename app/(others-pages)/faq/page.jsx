import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import FaqTwo from "../../../components/faq/FaqTwo";

export const metadata = {
  title: "Faq || Moonex Portfolio and Agency NextJS Template",
};

const Faq = () => {
  return (
    <div id="vanguardia">
      {/* <HeaderDefault /> */}
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--faq">
          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
          ></div>
          <div className="container-xxl">
            <div className="row">
              <div className="col-xl-10">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="large-heading">Vanguardia</h2>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem" }}
                  ></div>
                  <p className="fz-18">
                    Nuestra tecnología avanzada elimina el sarro sin sal, electricidad ni mantenimiento constante, protegiendo tus cañerías y electrodomésticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
          ></div>
          <FaqTwo />
        </div>

      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      {/* <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Faq;
