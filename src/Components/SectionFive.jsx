import React from "react";
import helpline from "../assets/images/helpline-img.png"
function SectionFive() {
  return (
    <>
      <section className=" py-24">
        <div className="container mx-auto px-3">
          <div className="flex lg:flex-row flex-col flex-wrap mx-3">
            <div className="lg:w-3/6 px-3">
              <h3 className="S5-head bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-semibold not-italic text-base relative">
                Contact US
              </h3>
              <h3 className="ff-work text-black text-4xl font-bold not-italic pb-16">
                Get in touch!
              </h3>
              <div className="lg:flex block items-center gap-8">
                <div className="b-bottom-1 pb-2 w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="ff-work text-base not-italic font-normal outline-0 text-black opacity-70"
                  />
                </div>
                <div className="b-bottom-1 pb-2 lg:pt-0 pt-6">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className=" ff-work text-base not-italic font-normal outline-0 text-black opacity-70"
                  />
                </div>
              </div>
              <div className="b-bottom-1 pt-6 pb-2">
                <input
                  type="text"
                  placeholder="Company"
                  className=" ff-work text-base not-italic font-normal outline-0 text-black opacity-70"
                />
              </div>
              <div className="b-bottom-1 pt-6 pb-2">
                <textarea
                  placeholder="Message"
                  className="w-full ff-work text-base not-italic font-normal outline-0 text-black opacity-70"
                ></textarea>
              </div>
              <button className="head-btn btn-font text-xl font-bold hover:scale-90 mt-14">
                Submit
              </button>
            </div>
            <div className="lg:w-3/6 px-3">
              <img className="w-full " src={helpline} alt="helpline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFive;
