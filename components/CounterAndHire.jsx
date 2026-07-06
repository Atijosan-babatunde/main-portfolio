import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { target: 5, label: "Years Experience" },
  { target: 25, label: "Completed Projects" },
  { target: 90, label: "Average Performance Score" },
];

export default function CounterAndHire() {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center">
            {STATS.map((s) => (
              <div className="col-md d-flex justify-content-center counter-wrap" data-aos="fade-up" key={s.label}>
                <div className="block-18">
                  <div className="text">
                    <strong className="number">
                      <AnimatedCounter target={s.target} className="number" />
                    </strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-hireme img margin-top" style={{ backgroundImage: "url(/images/bg_1.jpg)" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade-up">
              <h2>
                I&apos;m <span>Available</span> for full-time &amp; freelance projects
              </h2>
              <p className="mb-0">
                <a href="mailto:atijosanbabatunde@gmail.com" className="btn btn-primary py-3 px-5">
                  Hire me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
