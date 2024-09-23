function Faq2() {
    return (
        <>
        <div
        className="accordion mt-1 mx-4 mb-4 col-md-11 col-sm-11 col-10 faq container mx-auto"
        id="accordionExample"
    
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What types of products can I find on Threads of Artisans?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Threads of Artisans offers a diverse array of handcrafted
              treasures, including intricately woven textiles, beautifully
              hand-carved woodwork, exquisitely crafted ceramics, stunning
              jewelry, and much more. Our curated collections showcase the
              talent, passion, and dedication of artisans from around the globe.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Are the products on Threads of Artisans mass-produced or unique?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Each product on Threads of Artisans is unique and one-of-a-kind,
              meticulously crafted by skilled artisans. We celebrate artisanal
              craftsmanship and offer products that reflect the rich cultural
              heritage and artistic traditions of artisans worldwide. You'll
              find exclusive pieces that add a touch of authenticity and beauty
              to your life.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I be sure of the quality of the products I purchase?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse mb-4"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              At Threads of Artisans, we prioritize quality and authenticity. We
              work closely with artisans to ensure that every product meets our
              rigorous standards of craftsmanship and excellence. Additionally,
              we provide detailed product descriptions and images to give you a
              clear understanding of what to expect. Your satisfaction is our
              top priority.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Where do the artisans featured on Threads of Artisans come from?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse mb-4"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              Our artisans come from diverse backgrounds and regions around the
              globe. We believe in supporting artisans from all communities and
              cultures, celebrating their unique talents and traditions. By
              shopping on Threads of Artisans, you're not just purchasing a
              product – you're supporting artisanal communities and preserving
              their cultural heritage.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How does Threads of Artisans ensure fair compensation for
              artisans?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse mb-4"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              We believe in fair trade practices and ensuring that artisans
              receive fair compensation for their craftsmanship. We work
              directly with artisans or through reputable artisan cooperatives
              to ensure that they are paid fairly for their work. Your purchases
              on Threads of Artisans contribute to sustainable livelihoods for
              artisans and their communities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Can I customize or request personalized products on Threads of
              Artisans?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse pb-4"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              While we offer a curated selection of handcrafted products, we
              understand that you may have specific preferences or requirements.
              Please contact our customer support team to inquire about
              customization options or personalized orders. We'll do our best to
              accommodate your requests and connect you with artisans who can
              bring your vision to life.
            </div>
          </div>
        </div>
      </div>
        </>
      );
}

export default Faq2;