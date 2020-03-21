import React from "react";

const Contact = props => {
  return (
    <section className="contact  section" ref={props.contact}>
      <section className="contact__phone">
        <div className="phone__speaker"></div>
        <div className="phone__screen">
          {/* Form uses formspree to handle sending emails */}
          <form action="https://formspree.io/mlebvbkz" method="POST">
            <header>Get in Touch</header>
            <label htmlFor="email">Email Address</label>
            <input name="email" type="email" required></input>
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text" required></input>
            <label htmlFor="message">Message</label>
            <textarea
              className="message"
              required
              type="text"
              name="message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="phone__button"></div>
      </section>
    </section>
  );
};

export default Contact;
