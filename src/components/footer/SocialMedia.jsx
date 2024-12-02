import React from "react";

export const SocialMedia = () => {
  return (
    <div className="footer-social-media">
      <div className="footer-social-media-text">Follow us on social media</div>
      <div className="footer-social-media-icons">
        <div className="footer-social-media-icon">
          <i style={{ color: "red" }} className="bi bi-instagram"></i>
        </div>
        <div className="footer-social-media-icon">
          <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
        </div>
        <div className="footer-social-media-icon">
          <i style={{ color: "red" }} className="bi bi-youtube"></i>
        </div>
        <div className="footer-social-media-icon">
          <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
        </div>
        <div className="footer-social-media-icon">
          <i style={{ color: "darkblue" }} className="bi bi-telegram"></i>
        </div>
      </div>
    </div>
  );
};
