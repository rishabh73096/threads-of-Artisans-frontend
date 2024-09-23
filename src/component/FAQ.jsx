import "../css/index.css";
import Faq2 from "./Faq2";

function FAQ() {
  return (
    <>
      <div className="row bg-light w-100">
        <section className="py-2 py-md-4 py-xl-5">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <h3 className="trend fw-bold ">
                Threads Of Artisans: A Home For All Handcrafted Items
              </h3>
              <div className="col-12 col-lg-6 col-xl-6">
                <img
                  className="img-fluid rounded "
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1632157071684-a1cf9c22fe98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="no image"
                  style={{ width: "700px" }}
                />
              </div>
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 className="h1 mb-3 text-primary text-center fw-bold ">
                      Our mission
                    </h2>
                    <p className="lead fs-5 text-secondary mb-3">
                      Our mission is to curate exquisitely handcrafted products
                      from around the world, preserving India's rich artistic
                      heritage passed down through generations. By showcasing
                      the talents of our artisans, we aim to elevate them onto
                      the global stage, offering practical yet artful creations
                      for everyday urban living. Our vision is to establish an
                      internationally recognized brand synonymous with
                      craftsmanship. With a dedicated focus on empowering rural
                      artisans, we're committed to fostering economic prosperity
                      while safeguarding India's cherished handicraft
                      traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-2 py-md-4 py-xl-5">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 col-xl-6">
              <h2 className="h1 mb-3 text-primary text-center fw-bold ">
                     Make in India
                    </h2>
              <p className="lead fs-5 text-secondary mb-3">
              Threads of Artisans is an online craft platform established in 2024, driven by the mission to uplift Indian artisans through global recognition. Our vision aligns with the Make in India initiative, striving to empower local artisans across diverse regions of India. By showcasing their traditional crafts on an international scale, we aim to provide sustainable livelihoods and preserve India's rich artisanal heritage for generations to come.
                    </p>
              </div>
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <img
                  className="img-fluid rounded "
                  loading="lazy"
                  src="https://images.pexels.com/photos/3622671/pexels-photo-3622671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="no image"
                  style={{ width: "700px" }}
                />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h3 className="trend fw-bold text-center"> Do You Have Questions?</h3>
      <h3 className="trend fw-bold text-center ">
        We have answer(well,most of the times)
      </h3>
      <p className="px-5  text-center below">
        Below You'll find answer to the most common questions you may have on
        threads of artisans, also feel free to check put our facbook & google
        Advertisiting guide &Academy. if you still can't find the answer you're
        looking for just <a>Contact us!</a>
      </p>
      <div className="container1">
        <img
          className="img-fluid rounded  centered-image"
          loading="lazy"
          src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg?w=740&t=st=1712507394~exp=1712507994~hmac=b2bbafe3c730c1f29c911e65b44937fb5b2ae01e5c6e4bb4fdd549f77b7195f0"
          alt=""
          style={{ width: "450px" }}
        />
      </div>
     <Faq2/>
    </>
  );
}

export default FAQ;
