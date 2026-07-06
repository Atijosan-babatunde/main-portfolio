const EXPERIENCE = [
  {
    date: "2024-Present",
    title: "Senior Frontend Engineer",
    company: "Peerless Technology",
    desc: "Architected a micro-frontend service app for core banking systems. Implemented complex transaction logic and led frontend-to-backend integrations for high-stakes financial operations.",
  },
  {
    date: "2024 (Contract)",
    title: "Frontend Software Engineer",
    company: "Gryn-index",
    desc: "Designed multi-role dashboard systems for real-time liquidity tracking. Built a unified, scalable component library using Tailwind CSS and Material-UI to ensure brand consistency.",
  },
  {
    date: "2022-2023",
    title: "Lead Frontend Engineer",
    company: "Ultainfinity Global Group",
    desc: "Led the full development lifecycle for global crypto platforms. Spearheaded performance optimizations that increased Lighthouse scores from 40% to 90%, directly impacting user retention.",
  },
  {
    date: "2020-2022",
    title: "Frontend Developer",
    company: "Techpet Global",
    desc: "Developed 'Appera,' a high-performance SaaS tool. Implemented comprehensive unit and integration testing using Cypress to ensure enterprise-grade reliability.",
  },
];

export default function Resume() {
  return (
    <section className="ftco-section ftco-no-pb" id="resume">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Experience</h2>
            <p>
              A proven track record of engineering scalable platforms and optimizing performance
              for elite fintech and crypto organizations.
            </p>
          </div>
        </div>
        <div className="row">
          {[0, 1].map((col) => (
            <div className="col-md-6" key={col}>
              {EXPERIENCE.filter((_, i) => i % 2 === col).map((job) => (
                <div className="resume-wrap" data-aos="fade-up" key={job.title}>
                  <span className="date">{job.date}</span>
                  <h2>{job.title}</h2>
                  <span className="position">{job.company}</span>
                  <p className="mt-4">{job.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
