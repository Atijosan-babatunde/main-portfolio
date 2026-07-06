const CONTACT_BOXES = [
  {
    icon: "icon-map-signs",
    title: "Address",
    content: <p>Lagos, Nigeria</p>,
  },
  {
    icon: "icon-phone2",
    title: "Phone",
    content: (
      <>
        <p>
          <a href="tel:09034775269">09034775269</a>
        </p>
        <p>
          <a href="tel:07011300526">07011300526</a>
        </p>
      </>
    ),
  },
  {
    icon: "icon-paper-plane",
    title: "Email",
    content: (
      <p>
        <a href="mailto:atijosanbabatunde@gmail.com">atijosanbabatunde@gmail.com</a>
      </p>
    ),
  },
  {
    icon: "icon-linkedin",
    title: "LinkedIn",
    content: (
      <p>
        <a href="https://www.linkedin.com/in/babatunde-atijosan-b12849230/" target="_blank" rel="noopener noreferrer">
          Connect
        </a>
      </p>
    ),
  },
];

export default function Contact() {
  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Get in Touch</h2>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          {CONTACT_BOXES.map((box) => (
            <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" key={box.title}>
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className={box.icon}></span>
                </div>
                <h3 className="mb-4">{box.title}</h3>
                {box.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
