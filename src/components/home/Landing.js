import React from "react";
import LandingImg from '../../images/landing-women.webp';

function Landing() {
  return (
    <section id="landing" className="d-flex flex-column justify-content-around">
      <div className="row">
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start text-left">
          <p>
            <span>We procure handwoven and handmade sarees, dress materials,fabric and other items direct from the Indian Artisans.</span>
          </p>
          <div className="shop-btn">
            <a href="/"><span>Shop Now</span></a>
          </div>
        </div>
        <img className="col-md-7" src={LandingImg} alt="women weaving" />

      </div>

      <div id="landing-form" className="row d-flex">
        <div className="col-md-5"><h1>Handpicked Handlooms</h1></div>
        <form className="col-md-7 d-flex" action="post">
          <div class="order-2 col-md-8 floating-form">
            <input class="floating-input" type="text" placeholder=" " id="email" name="email" aria-describedby="email" />
            <span class="highlight"></span>
            <label for="email">Email Address</label>
          </div>
          <div className="order-2 col-md-4 shop-btn">
            <a href="/"><span>Sign up</span></a>
          </div>
        </form>

      </div>
    </section >
  )

}

export default Landing;