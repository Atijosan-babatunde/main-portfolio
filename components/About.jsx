import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch" data-aos="fade-right">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(/images/icon-2.png)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section" data-aos="fade-up">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  Senior Frontend Engineer with 5+ years of experience building mission-critical
                  financial infrastructure. Expert in architecting secure micro-frontend services
                  and high-performance web interfaces. I bridge the gap between complex backend
                  logic and intuitive, pixel-perfect design.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Babatunde Atijosan Christian</span>
                  </li>
                  <li className="d-flex">
                    <span>Role:</span> <span>Senior Frontend Engineer</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>Lagos, Nigeria</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>atijosanbabatunde@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span>{" "}
                    <span>
                      <a href="tel:09034775269">09034775269</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap d-flex mt-md-3" data-aos="fade-up">
              <div className="text">
                <p className="mb-4">
                  <AnimatedCounter target={25} className="number" /> <span>Project completed</span>
                </p>
                <p>
                  <a href="/BabatundeAtijosanPRINTT.pdf" className="btn btn-primary py-3 px-3">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
