// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>Travel Explorer &copy; 2024. All rights reserved.</p>
        <div className="social-links">
        <div class="col-12 d-flex flex-row justify-content-md-center justify-content-around">
            <div class="follow-icon-container">
              <i class="fa-brands fa-twitter"></i>
            </div>
            
            <div class="follow-icon-container">
              <i class="fa-brands fa-facebook"></i>
            </div>

            <div class="follow-icon-container">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
