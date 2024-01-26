import React from "react";
import mobileapp from "../assets/images/shoping-app.png";
const SectionOne = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-3">
          <div className="flex-row flex flex-wrap mx-3 justify-center pt-52">
            <div className="lg:w-1/2 px-3">
              <img className="w-fit" src={mobileapp} alt="mobli-app" />
            </div>
            <div className="lg:w-1/2 px-3 my-auto">
              <h2 className="S1-head ff-work relative font-semibold not-italic text-base bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent ">
                About Us
              </h2>
              <h3 className="S1-heading font-bold not-italic text-2xl sm:text-4xl">
                What is
                <span className="text-gradiant not-italic "> Maître D?</span>
              </h3>
              <p className="S1-para not-italic text-base font-normal">
                Maître D is a full service solution, designed specifically for
                salons and barbershops. Our approach is modular, which means you
                only pay for the functionality that you need. Each module is
                completely integrated into the solution, so your entire business
                always remains syncronized. Maître D allows you to see
                everything within your business, from one location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
