import React from "react";
import mediaapp from "../assets/images/media_app.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SectionThree = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <>
      <section>
        <div className="container mx-auto px-3">
          <h2 className="S3-head text-gradiant text-center font-semibold not-italic text-base relative">
            Modules
          </h2>
          <h3 className="ff-work fs-lg font-bold text-center pb-24">
            Why Choose <span className="text-gradiant">Maître D?</span>
          </h3>
          <Slider {...settings}>
            <div className="slick-card">
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
                  <button className="S3-btn py-3 px-9 bg-red-300 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold mt-11 mb-24 hover:!bg-red-800">
                    Buy Now 1
                  </button>
                </div>
              </div>
            </div>
            <div className="slick-card">
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
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold mt-11 mb-24 hover:scale-90">
                    Buy Now
                  </button>
                </div>
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
              </div>
            </div>
            <div className="slick-card">
              <div className="flex-row flex flex-wrap my-0 mx-3 justify-center">
                <div className="lg:w-3/6 px-3">
                  <img className="w-fill" src={mediaapp} alt="media_app" />
                </div>
                <div className="lg:w-3/6 px-3">
                  <h4 className="ff-work text-2xl not-italic font-bold py-3">
                    Manage Your team
                    <span className="text-gradiant"> Customer Queues</span>
                  </h4>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-4">
                    The Maitre D queue management system is designed to allow
                    your customers to sign up for walk-in appointments and
                    select the services they want ahead of time. The queue will
                    provide them with estimated wait times, costs and will allow
                    them to even select their preferred stylist.
                  </p>
                  <p className="ff-work text-base not-italic font-normal max-484 pt-3~">
                    As the queue gets bigger or smaller, its easy to monitor
                    your operations and understand when wait periods are getting
                    too long to service your customer base and to better
                    resource your stores during busy periods. Beat the
                    frustration of your customers ahead of time and help manage
                    how they wait for your services
                  </p>
                  <button className="S3-btn py-3 px-9 inline-flex justify-center items-center gap-2 border-none duration-300 ease-in-out text-white text-center ff-work text-xl font-bold mt-11 mb-24 hover:bg-red-400">
                    Buy Now
                  </button>
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
