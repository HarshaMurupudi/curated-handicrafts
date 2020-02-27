
import React from "react";

function ContactUs() {
  return (
    <section id="contact-us-section" className="text-center">
      <h2>Contact Us</h2>
      <div id="contact-us-message">
        <h4>We love to hear from our customers!</h4>
        <p> Do you have a question or concern? Are you looking for any other handlooms or handmade products? Let us know! We will get back to you as soon as possible with an answer. </p>
      </div>

      <div>
        <a className="whatsapp-btn text-white">Message us on WhatsApp</a>
        <h4 id="dot-com">Curatedhandicrafts.com</h4>
        <p id="email-ph-info">
          <a>info.curatedhandicrafts@gmail.com</a>
          <a>+91 9390377029</a>
          <a>+91 7006458635</a>
        </p>
      </div>

      <div className="operation-hours d-flex flex-column justify-content-center align-items-center">
        <h4>Hours</h4>
        <div>
          <table>
            <tr><th>Sunday</th><td>Closed</td></tr>
            <tr><th>Monday</th><td>9am - 5pm</td></tr>
            <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
            <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
            <tr><th>Thursday</th><td>9am - 5pm</td></tr>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;