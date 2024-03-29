import React from "react";
import footerlogo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-footimg bg-no-repeat bg-center bg-cover overflow-y-hidden">
        <div className="container mx-auto px-3 relative">
          <div className=" grey-circle-big absolute top-2/3 left-[-8.2%]"></div>
          <div className=" grey-circle-small absolute bottom-[-12%] left-[2%]"></div>
          <div className=" grey-circle-middle absolute bottom-[-47%] left-[-2%]"></div>
          <div className=" grey-circle-small absolute top-1/3 right-[3%]"></div>
          <div className=" grey-circle-middle absolute top-2/4 right-[5%]"></div>

          <div className="flex items-center justify-center pt-20 pb-3 cursor-pointer">
            <img className="pr-3" src={footerlogo} alt="logo" />
            <p className="text-white ff-work font-medium text-3xl"> maître d</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-nan -nanL20.1663 2.33333H18.9997C18.3553 2.33333 17.833 1.811 17.833 1.16667C17.833 0.857247 17.7101 0.560501 17.4913 0.341709C17.2725 0.122916 16.9758 0 16.6663 0C16.3569 0 16.0602 0.122916 15.8414 0.341709C15.6226 0.560501 15.4997 0.857247 15.4997 1.16667C15.4997 1.811 14.9773 2.33333 14.333 2.33333H9.66634C9.02201 2.33333 8.49967 1.811 8.49967 1.16667C8.49967 0.857247 8.37676 0.560501 8.15797 0.341709C7.93917 0.122916 7.64243 0 7.33301 0C7.02359 0 6.72684 0.122916 6.50805 0.341709C6.28926 0.560501 6.16634 0.857247 6.16634 1.16667C6.16634 1.811 5.64401 2.33333 4.99967 2.33333H3.83301C2.90475 2.33333 2.01451 2.70208 1.35813 3.35846C0.701757 4.01484 0.333008 4.90508 0.333008 5.83333V19.8333C0.333008 20.7616 0.701757 21.6518 1.35813 22.3082C2.01451 22.9646 2.90475 23.3333 3.83301 23.3333H20.1663C21.0946 23.3333 21.9848 22.9646 22.6412 22.3082C23.2976 21.6518 23.6663 20.7616 23.6663 19.8333V5.83333C23.6663 4.90508 23.2976 4.01484 22.6412 3.35846C21.9848 2.70208 21.0946 2.33333 20.1663 2.33333L-nan -nanZM21.333 19.8333C21.333 20.1428 21.2101 20.4395 20.9913 20.6583C20.7725 20.8771 20.4758 21 20.1663 21H3.83301C3.52359 21 3.22684 20.8771 3.00805 20.6583C2.78926 20.4395 2.66634 20.1428 2.66634 19.8333C2.66634 15.323 6.32268 11.6667 10.833 11.6667H13.1663C17.6767 11.6667 21.333 15.323 21.333 19.8333ZM21.333 5.83333C21.333 7.76633 19.766 9.33333 17.833 9.33333H6.16634C4.23334 9.33333 2.66634 7.76633 2.66634 5.83333C2.66634 5.52391 2.78926 5.22717 3.00805 5.00838C3.22684 4.78958 3.52359 4.66667 3.83301 4.66667H4.99967C5.64401 4.66667 6.16634 5.189 6.16634 5.83333C6.16634 6.14275 6.28926 6.4395 6.50805 6.65829C6.72684 6.87708 7.02359 7 7.33301 7C7.64243 7 7.93917 6.87708 8.15797 6.65829C8.37676 6.4395 8.49967 6.14275 8.49967 5.83333C8.49967 5.189 9.02201 4.66667 9.66634 4.66667H14.333C14.9773 4.66667 15.4997 5.189 15.4997 5.83333C15.4997 6.14275 15.6226 6.4395 15.8414 6.65829C16.0602 6.87708 16.3569 7 16.6663 7C16.9758 7 17.2725 6.87708 17.4913 6.65829C17.7101 6.4395 17.833 6.14275 17.833 5.83333C17.833 5.189 18.3553 4.66667 18.9997 4.66667H20.1663C20.4758 4.66667 20.7725 4.78958 20.9913 5.00838C21.2101 5.22717 21.333 5.52391 21.333 5.83333Z"
                fill="white"
              />
            </svg>
          </div>
          <p class="text-center text-white md:w-96 w-full mx-auto">
            Proudly Australian developed software. Focused on increasing
            efficiency and growing business within the beauty industry.
          </p>
          <div class="flex justify-center gap-14 pt-8">
            <a
              href="https://www.google.com/maps/@29.1456537,75.7255078,15z?entry=ttu"
              target="_blank"
              class="footer-nav text-white text-center ff-work text-sm not-italic font-semibold no-underline"
            >
              Navigation
            </a>
            <a
              href="#"
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
