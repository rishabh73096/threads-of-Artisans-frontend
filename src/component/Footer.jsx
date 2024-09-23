import { NavLink } from "react-router-dom";
import "../css/index.css";
function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-primary text-muted navbar-color text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block text-light">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <NavLink href="" className="me-4 text-reset text-light">
              <i className="fab fa-facebook-f text-light"></i>
            </NavLink>
            <a href="" className="me-4 text-reset text-light">
              <i className="fab fa-twitter text-light"></i>
            </a>
            <a href="" className="me-4 text-reset text-light">
              <i className="fab fa-google text-light"></i>
            </a>
            <a href="" className="me-4 text-reset text-light">
              <i className="fab fa-instagram text-light"></i>
            </a>
            <a href="" className="me-4 text-reset text-light">
              <i className="fab fa-linkedin text-light"></i>
            </a>
            <a href="" className="me-4 text-reset text-light">
              <i className="fab fa-github text-light"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Threads Of Artisans
                </h6>
                <p>
                  "Threads of Artisan": A platform connecting shopkeepers to
                  artisans, enabling product addition, and facilitating customer
                  purchases through state management.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4 style-none ">
                  Products
                </h6>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Home Decoration
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Furnishing
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Paintings
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset ">
                    Gift Hampers
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Ayodhya Ram Mandir
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="Customer_login" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Atarsand 230401 , Up,
                  India
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  <a
                    href="mailto:rishabhtiwari73096@gmail.com"
                    className="text-decoration-none text-light"
                  >
                    rishabhtiwari73096@gmail.com
                  </a>
                </p>

                <p>
                  <i className="fas fa-phone me-3"></i> + 91 7309651657
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 text-light">
          © 2024 Copyright:
          <a
            className="text-reset fw-bold text-light"
            href="https://mdbootstrap.com/"
          >
            ThreadsOfArtisans.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
