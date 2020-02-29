import React, { useState } from "react";

function ContactUs() {
  const [isToggled, setToggle] = useState(true);

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
          <span onClick={() => setToggle(!isToggled)}>Open today 09:00 am - 05:00 pm</span>
          {
            isToggled && <table>
              <tr><th>Mon</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Tue</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Wed</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Thu</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Fri</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Sat</th><td>09:00 am - 05:00 pm</td></tr>
              <tr><th>Sun</th><td>09:00 am - 05:00 pm</td></tr>
            </table>
          }
        </div>
      </div>
    </section>
  )
}

export default ContactUs;