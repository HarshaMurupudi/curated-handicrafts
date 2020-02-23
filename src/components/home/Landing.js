import React from "react";
import LandingImg from '../../images/landing-women.webp';

function Landing() {
  return (
    <section id="landing" className="row my-5">
      <div className="col-md-5 d-flex flex-column justify-content-center align-items-start text-left">
        <p>
          <span>We procure handwoven and handmade sarees, dress materials,fabric and other items direct from the Indian Artisans.</span>
        </p>
        <div className="shop-btn">
          <a href="/"><span>Shop Now</span></a>
        </div>
      </div>
      <img className="col-md-7" src={LandingImg} alt="women weaving" />
    </section>
  )

}

export default Landing;