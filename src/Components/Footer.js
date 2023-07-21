import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column footer-column-logo">
        <h1>CUREAZZY</h1>
        <p>2023 © Medic ™ Ltd. All rights reserved.</p>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="/who-we-are">Who are we</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/work-with-us">Work With Us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Learn More</h3>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/security">Security</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us On</h3>
        <ul>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
