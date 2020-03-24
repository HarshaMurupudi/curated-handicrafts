import React, { useState } from "react";
// import landingWebp from '../../images/landing-women.webp';
// import landingPng from '../../images/landing-women.png';
// import landingJpg from '../../images/landing-women.jpg';
// import Img from "gatsby-image"
import Image from '../shared/Image';




const Landing = ({ data }) => {
  const [status, setStatus] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  console.log(data)
  return (
    <section id="landing" className="d-flex flex-column justify-content-around">
      <div className="order-0 row mb-5 mb-md-0">
        <div className="order-1 order-md-0 col-12 col-md-5 d-flex flex-column justify-content-center align-items-start text-left">
          <p>
            <span>We procure handwoven and handmade sarees, dress materials,fabric and other items direct from the Indian Artisans.</span>
          </p>
          <div className="shop-btn">
            <a href="/"><span>Shop Now</span></a>
          </div>
        </div>

        <Image />
      </div>

      <div id="landing-form" className="row d-flex  d-md-flex align-items-end order-1">
        <h1 className="col-12 col-md-5 mb-0">Handpicked Handlooms</h1>
        <form
          onSubmit={submitForm}
          className="col-12 col-md-7 d-block d-md-flex align-items-baseline"
          action="https://formspree.io/mqklwklp"
          method="post"
        >
          <div className="order-1 d-inline col-12 col-md-8 floating-form">
            <input className="floating-input" type="text" placeholder=" " id="email" name="email" aria-describedby="email" />
            <span class="highlight"></span>
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="order-2 col-12 col-md-4 shop-btn">
            {status === "SUCCESS" ? <p>Thanks!</p> : <input type="submit" value="Send" />}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>


        </form>

      </div>
    </section>
  )
}

export default Landing;

            // <a href="/"><span>Sign up</span></a>
