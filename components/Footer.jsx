export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Mission</h2>
              <p>
                Engineering digital payment solutions that empower businesses and simplify user
                experiences across the globe.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/babatunde-atijosan-b12849230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ATIJOSANWORKS"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <span className="icon-twitter"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4" style={{ paddingLeft: "80px" }}>
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <a>
                    <span className="icon-long-arrow-right mr-2"></span>Fintech Infrastructure
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon-long-arrow-right mr-2"></span>Micro-Frontends
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon-long-arrow-right mr-2"></span>Performance Audits
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon-long-arrow-right mr-2"></span>UI Systems
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; {year} All rights reserved | Babatunde Atijosan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
