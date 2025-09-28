import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <>
    <div className="help-widget-container p-4">
            
            {/* Header: Need Help */}
            <div className="help-header">
                <i className="fas fa-comment-dots me-3 help-icon"></i>
                <h5 className="widget-title">Need Help</h5>
            </div>
            <hr className="header-separator" />

            {/* Contact Information */}
            <div className="contact-info mt-4 mb-5">
                <p className="contact-item">
                    <i className="fas fa-phone-alt me-3"></i>
                    <a href="tel:+11234567890">+1 1234 567 890</a>
                </p>
                <p className="contact-item">
                    <i className="fas fa-envelope me-3"></i>
                    <a href="mailto:email@site.com">email@site.com</a>
                </p>
            </div>

            {/* Copyright */}
            <p className="copyright-text">
                Copy rights &copy; 2018
            </p>
            
            {/* The bottom gradient line shown in the screenshot is handled by CSS pseudo-element */}
        </div>
    </>
  );
};

export default Footer;
