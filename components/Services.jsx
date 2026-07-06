const SERVICES = [
  {
    icon: "fa fa-ravelry",
    title: "Fintech Orchestration",
    desc: "Building secure payment gateways, switching systems, and core banking interfaces.",
  },
  {
    icon: "fa fa-free-code-camp",
    title: "Micro-Frontend Architecture",
    desc: "Scaling large applications through modular, independent frontend services and design systems.",
  },
  {
    icon: "fa fa-laptop",
    title: "Web Performance & SEO",
    desc: "Optimizing technical SEO and Core Web Vitals to reach elite Lighthouse standards.",
  },
];

export default function Services() {
  return (
    <section className="ftco-section" id="services">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center" data-aos="fade-up" style={{ marginTop: "-80px" }}>
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Expertise</h2>
            <p>Specialized solutions for modern digital economies.</p>
          </div>
        </div>
        <div className="row">
          {SERVICES.map((s) => (
            <div className="col-md-4 text-center d-flex" data-aos="fade-up" key={s.title}>
              <a className="services-1">
                <span className="icon">
                  <i className={s.icon}></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
