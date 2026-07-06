const SKILLS = [
  { name: "ReactJS / NextJS / React Native", value: 90 },
  { name: "JavaScript / TypeScript", value: 95 },
  { name: "Fintech Integration / API Security", value: 85 },
  { name: "Tailwind CSS / UI Systems", value: 95 },
  { name: "Git / CI/CD (Bitbucket/GitHub)", value: 90 },
  { name: "Performance Optimization (Lighthouse)", value: 95 },
];

export default function Skills() {
  return (
    <section className="ftco-section" id="skills">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
          </div>
        </div>
        <div className="row">
          {SKILLS.map((skill) => (
            <div className="col-md-6" key={skill.name}>
              <div className="progress-wrap" data-aos="fade-up">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.value}%` }}
                  >
                    <span>{skill.value}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
