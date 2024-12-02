import React from "react";
import "./footer.css";
import { SocialMedia } from "./SocialMedia";
import { UsefullLinks } from "./UsefullLinks";
import { ContactInformation } from "./ContactInformation";
import { AboutUs } from "./AboutUs";
export const Footer = () => {
  return (
    <footer className="footer">
      <SocialMedia />
      <div className="footer-links-wrapper">
        <UsefullLinks />
        <ContactInformation />
        <AboutUs />
      </div>
    </footer>
  );
};
