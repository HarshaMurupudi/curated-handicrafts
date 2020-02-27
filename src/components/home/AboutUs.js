import React from 'react';
import aboutUsWebp from '../../images/img-aboutus.webp';
// import aboutUsPng from '../../images/img-aboutus.png';
import aboutUsJpg from '../../images/img-aboutus.jpg';

function AboutUs() {
  return (
    <section id="about-section" className="row">
      <div className="col-12 col-md-6 padded-text">
        <h2>About Us</h2>
        <div className="note">
          <h4>Mission</h4>
          <p id="mission">Saving the fine arts of Indian Handlooms from being extinct by providing a bigger market and better prices to the Indian Artisans.</p>
        </div>
        <div className="note">
          <h4>Committed to Quality Handlooms and Handmade products</h4>
          <p> We believe that quality should never be a compromise. No matter what type of handlooms or handmade item you're looking for, we guarantee durability. We want you to enjoy our designs with confidence in the high standards we hold for our products.</p>
        </div>
        <div className="note">
          <h4>100% Satisfaction Guaranteed</h4>
          <p>&nbsp;While shopping with us for handlooms and handmade products, we want you to be completely happy with the experience. If you have questions about us, our products, or even shipping, get in touch! We hope you continue to shop with us for many years to come.</p>
        </div>
      </div>
      <picture>
        <source srcSet={aboutUsWebp} type="image/webp" />
        <source srcSet={aboutUsJpg} type="image/jpeg" />
        <img src={aboutUsJpg} alt="weaving" className="col-12 col-md-6" />
      </picture>
    </section>
  )
}

export default AboutUs;