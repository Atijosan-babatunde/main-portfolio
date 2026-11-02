const PROJECTS = [
  {
    title: "Ultainfinity Wealth Launchpad",
    tag: "Fintech / Web3",
    href: "https://ultainfinitywealthlaunchpad.com/",
    img: "/images/Projectone.png",
    col: "col-md-4",
  },
  {
    title: "Ultainfinity Airdrop & Bounty Platform",
    tag: "Performance Optimization (90% Lighthouse)",
    href: "https://ultainfinityairdropandbounty.com/",
    img: "/images/airdrop.png",
    col: "col-md-8",
  },
  {
    title: "Active Workforce Solution",
    tag: "Medical Care solution",
    href: "http://activeworkforcesolutions.com/",
    img: "/images/projecttwo.png",
    col: "col-md-8",
  },
  {
    title: "NEXACREDO",
    tag: "Pension management, made clear and secure",
    href: "https://nexacredo.com/",
    img: "/images/projectthree.png",
    col: "col-md-4",
  },
  {
    title: "The Neat Head Quarter",
    tag: "Effortless Cleaning, Exceptional Results",
    href: "https://www.theneathq.com/",
    img: "/images/projectfour.png",
    col: "col-md-8",
  },
  {
    title: "YOVA TECHNOLOGIES",
    tag: "Expert Business Analysis",
    href: "https://www.yovatechnologies.com/",
    img: "/images/projectfive.png",
    col: "col-md-4",
  },
];

export default function Projects() {
  return (
    <section className="ftco-section ftco-project" id="projects">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Key Projects</h2>
            <p>Fintech, Crypto, and Enterprise-level solutions.</p>
          </div>
        </div>
        <div className="row">
          {PROJECTS.map((p) => (
            <div className={p.col} key={p.title}>
              <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${p.img})` }} data-aos="fade-up">
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  </h3>
                  <span>{p.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
