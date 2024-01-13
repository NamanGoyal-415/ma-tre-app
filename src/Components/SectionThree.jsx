import React from "react";
import mediaapp from "../assets/images/media_app.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className=" next w-8 h-8 absolute right-[-1.5rem] top-1/3 hover:scale-90 duration-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0V0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2263 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2263 14.3363L16.6012 8.71125C16.4252 8.53521 16.1865 8.43632 15.9375 8.43632C15.6885 8.43632 15.4498 8.53521 15.2738 8.71125C15.0977 8.88729 14.9988 9.12605 14.9988 9.375C14.9988 9.62395 15.0977 9.86271 15.2738 10.0387L19.2994 14.0625H8.4375Z"
          fill="black"
        />
        <path
          d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0V0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2263 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2263 14.3363L16.6012 8.71125C16.4252 8.53521 16.1865 8.43632 15.9375 8.43632C15.6885 8.43632 15.4498 8.53521 15.2738 8.71125C15.0977 8.88729 14.9988 9.12605 14.9988 9.375C14.9988 9.62395 15.0977 9.86271 15.2738 10.0387L19.2994 14.0625H8.4375Z"
          fill="url(#paint0_linear_19268_2130)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_19268_2130"
            x1="25.4521"
            y1="-7.93118e-07"
            x2="1.19246"
            y2="2.82566"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FD9B2B" />
            <stop offset="1" stop-color="#F14F09" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="prev w-8 h-8 absolute left-[-30px] top-1/3 hover:scale-90 duration-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <g clip-path="url(#clip0_19268_2131)">
          <path
            d="M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0V0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7262 19.9613C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7262 21.2887C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49833 15.1233 7.49833 15C7.49833 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.4859 8.62408 13.5894 8.55494 13.7033 8.50777C13.8172 8.4606 13.9392 8.43632 14.0625 8.43632C14.1858 8.43632 14.3078 8.4606 14.4217 8.50777C14.5356 8.55494 14.6391 8.62408 14.7262 8.71125C14.8134 8.79842 14.8826 8.90189 14.9297 9.01578C14.9769 9.12967 15.0012 9.25173 15.0012 9.375C15.0012 9.49827 14.9769 9.62033 14.9297 9.73422C14.8826 9.84811 14.8134 9.95158 14.7262 10.0387L10.7006 14.0625H21.5625Z"
            fill="black"
          />
          <path
            d="M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0V0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7262 19.9613C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7262 21.2887C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49833 15.1233 7.49833 15C7.49833 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.4859 8.62408 13.5894 8.55494 13.7033 8.50777C13.8172 8.4606 13.9392 8.43632 14.0625 8.43632C14.1858 8.43632 14.3078 8.4606 14.4217 8.50777C14.5356 8.55494 14.6391 8.62408 14.7262 8.71125C14.8134 8.79842 14.8826 8.90189 14.9297 9.01578C14.9769 9.12967 15.0012 9.25173 15.0012 9.375C15.0012 9.49827 14.9769 9.62033 14.9297 9.73422C14.8826 9.84811 14.8134 9.95158 14.7262 10.0387L10.7006 14.0625H21.5625Z"
            fill="url(#paint0_linear_19268_2131)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_19268_2131"
            x1="25.4521"
            y1="-7.93118e-07"
            x2="1.19246"
            y2="2.82566"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FD9B2B" />
            <stop offset="1" stop-color="#F14F09" />
          </linearGradient>
          <clipPath id="clip0_19268_2131">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="matrix(-1 0 0 1 30 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
const SectionThree = () => {
  var settings = {
    dots: false,
    Arrows: true,
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false,
          autoplay: true,
          speed:1000,
          autoplaySpeed: 1000,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-3 relative">
          <h2 className="S3-head text-center font-semibold not-italic text-base relative bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
            Modules
          </h2>
          <h3 className="ff-work text-2xl sm:text-4xl font-bold text-center pb-24">
            Why Choose <span className="text-gradiant">Maître D?</span>
          </h3>

          <Slider {...settings}>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3">
                    Manage Your
                    <span className="text-gradiant"> Customer Queues</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    The Maitre D queue management system is designed to allow
                    your customers to sign up for walk-in appointments and
                    select the services they want ahead of time. The queue will
                    provide them with estimated wait times, costs and will allow
                    them to even select their preferred stylist.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3">
                    As the queue gets bigger or smaller, its easy to monitor
                    your operations and understand when wait periods are getting
                    too long to service your customer base and to better
                    resource your stores during busy periods. Beat the
                    frustration of your customers ahead of time and help manage
                    how they wait for your services
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:scale-90">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3 ">
                    Sell your products and
                    <span className="text-gradiant"> services with ease</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    The Maitre D POS solution is designed to allow our clients
                    to commence their sales process by creating products and
                    services with an intuitive and clean product management
                    database. Group products and services the way you want to
                    see them, and combine them into packages for customers to
                    purchase seamlessly.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3">
                    When operating in a service based environment that could
                    include many services and products, the POS system allows
                    the operates to take a job ticket, filled with items and
                    transition this into a seamless swipe and pay interface for
                    the client. Get your clients in and out the door faster than
                    ever!
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:scale-90">
                    Buy Now
                  </button>
                </div>
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3">
                    Manage Your team
                    <span className="text-gradiant"> Customer Queues</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-524 pt-4">
                    The Maitre D Barber Management solution is designed for our
                    clients to manage their staff remotely through a clean and
                    presentable interface. Develop rosters for your staff with a
                    workflow that allows staff to apply for time off and leave
                    and go through an approval process that automatically
                    updates the roster
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-524 pt-3">
                    Through our job ticket system, it is easy to see what staff
                    is working on at any moment in time and analyse the past to
                    measure the efficiency of staff members work habits. You
                    staff can effortless start and stop work, and tracking the
                    utilisation of your team is done seamlessly within the
                    reporting system. Take control of your team, and learn more
                    about what they are doing, and how it is impacting your
                    business.
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:bg-red-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3 ">
                    Understand your
                    <span className="text-gradiant"> Customers</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    Your Customer Database will allow you to analyze and
                    understand not only who your customers are, but what they
                    want. Customers can input their pertinent information to
                    Maitre D, and begin to view those customer's purchase
                    history, demographics, special request, and notes.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3">
                    Is your business reaching all of your local neighborhoods?
                    Are you buying the appropriate products for your age
                    demographic? All of this and more is at your finger tips.
                    Your customer database will change how your look at your
                    business when you better understand who you are serving.
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:scale-90">
                    Buy Now
                  </button>
                </div>
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3">
                    Manage Timesheets
                    <span className="text-gradiant"> Seamlessly</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-524 pt-4">
                    The Maitre D Timesheet system is designed to allow your
                    employees to accurately record their working time for the
                    day against jobs or tasks. This data is recorded down to the
                    minute to allow for the most accurate information to provide
                    your payroll provider, review performance, or maximize
                    utilization.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-524 pt-3">
                    Accurate timesheet entry and data is critical to
                    understanding your labor costs, requirements, and
                    efficiencies to better run your business. Start making it
                    easier for your staff to record their time so Maitre D can
                    make it easier to manage your staff.
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:bg-red-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3 ">
                    Get your prices right,
                    <span className="text-gradiant"> year round</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    The Maitre D Pricing Management tool allows you to control
                    all aspects of your pricing for all products that you offer.
                    Manage seasonal pricing to trigger based on your yearly
                    offerings for set time periods. Control what discounts you
                    offer and how they can be used. Understand the impacts of
                    future and prior pricing models
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3">
                    Accurate pricing will help better control your product
                    margins. With the ability to analyze your pricing and
                    understand how changes impact your business you have
                    complete visibility on which products are your winners and
                    which are your losers.
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:scale-90">
                    Buy Now
                  </button>
                </div>
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3">
                    Gain visibility into your
                    <span className="text-gradiant"> stock on hand</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-524 pt-4">
                    The Maitre D inventory management system is designed to
                    allow our clients to have visibility of their inventory in
                    real time, across as many locations as needed. Salons often
                    manage their inventory as a by-product of their business.
                    Our simple and well structured inventory management system
                    allows you to create an inventory listing, transfer and
                    receive it across your locations and deplete it instantly as
                    you make sales over the counter or use products within the
                    delivery of services.
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:bg-red-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slick-card rounded-lg bg-white">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3 ">
                    Manage your
                    <span className="text-gradiant"> Customer Queues</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    The Maitre D queue management system is designed to allow
                    your customers to sign up for walk-in appointments and
                    select the services they want ahead of time. The queue will
                    provide them with estimated wait times, costs and will allow
                    them to even select their preferred stylist.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3">
                    As the queue gets bigger or smaller, its easy to monitor
                    your operations and understand when wait periods are getting
                    too long to service your customer base and to better
                    resource your stores during busy periods. Beat the
                    frustration of your customers ahead of time and help manage
                    how they wait for your services
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold my-6 hover:scale-90">
                    Buy Now
                  </button>
                </div>
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
