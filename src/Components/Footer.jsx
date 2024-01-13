import React from "react";
import footerlogo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-footimg bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-center pt-20 pb-3">
            <img className="pr-3" src={footerlogo} alt="logo" />
            <p className="text-white ff-work font-medium text-3xl"> maître d</p>
          </div>
          <p class="text-center text-white md:w-96 w-full mx-auto">
            Proudly Australian developed software. Focused on increasing
            efficiency and growing business within the beauty industry.
          </p>
          <div class="flex justify-center gap-5 pt-8">
            <a
              href="https://www.google.com/maps/@29.1456537,75.7255078,15z?entry=ttu"
              target="_blank"
              class="footer-nav text-white text-center ff-work text-sm not-italic font-semibold no-underline"
            >
              Navigation
            </a>
            <a
              href="https://greenfox.dev/"
              target="_blank"
              class="footer-nav text-white text-center ff-work text-sm not-italic font-semibold no-underline"
            >
              Company
            </a>
            <a
              href="tel:9781235609"
              class="footer-nav text-white text-center ff-work text-sm not-italic font-semibold no-underline"
            >
              Contact
            </a>
          </div>
        </div>
        <div className=" border-b-2 opacity-70 mt-10"></div>
        <p class="foot text-white opacity-70 text-center mt-7 ff-work text-xs font-normal not-italic">
          Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©
        </p>
      </section>
    </>
  );
};

export default Footer;
