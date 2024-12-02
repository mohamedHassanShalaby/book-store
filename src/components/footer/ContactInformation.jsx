import React from "react";

export const ContactInformation = () => {
  return (
    <div className="footer-links-item">
      <h3 className="footer-links-item-title">Contact Information</h3>
      <div className="footer-address-wrapper">
        <div className="footer-address-item">
          <i className="bi bi-geo-alt-fill"></i>
          Egypt - Cairo - OsmanEbnAffan St
        </div>
        <div className="footer-address-item">
          <i className="bi bi-telephone-fill"></i>
          123-456-789
        </div>
        <div className="footer-address-item">
          <i className="bi bi-envelope-fill"></i>
          info@fakemail.com
        </div>
      </div>
    </div>
  );
};
