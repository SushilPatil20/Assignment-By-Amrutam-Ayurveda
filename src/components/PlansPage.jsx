import React from "react";
import Header from "./Header";
import locationImg from "../assets/location.png";
import ellipseRightBottom from "../assets/ellipseRightBottom.png";
import ellipseLeftBottom from "../assets/ellipseLeftBottom.png";
import ellipseLeftTop from "../assets/ellipseLeftTop.png";
import ellipseRightTop from "../assets/ellipseRightTop.png";
import profileOnPlanePage from "../assets/profileOnPlanePage.png";
import capsuleImage from "../assets/capsuleImg.png";
import degree from "../assets/degree.png";

import message from "../assets/message.png";

const PlansPage = () => {
  return (
    <>
      <main>
        <section className="h-56 object-cover bg-lightGreen bg-no-repeat relative ">
          <img
            src={ellipseLeftTop}
            alt="ellipseLeftTop"
            className="absolute left-16 "
          />
          <img
            src={ellipseRightTop}
            alt="ellipseRightTop"
            className="absolute right-16"
          />
          <img
            src={ellipseLeftBottom}
            alt="ellipseLeftBottom"
            className="absolute top-28  left-4 md:left-56"
          />
          <img
            src={ellipseRightBottom}
            alt="ellipseRightBottom"
            className="absolute bottom-0 -right-10 md:right-18"
          />
          <div className="mx-auto w-3/5 text-center">
            <h2 className="text-3xl font-600 pt-9 ">
              Find Expert Doctors for An In-Clinic Session Here
            </h2>
            <div>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <div className="flex items-center border bg-white rounded-lg border-lightGray bg-sl min-w-fit space-x-2 px-4 h-14">
                  <img src={locationImg} className="w-5 h-5" />
                  <select
                    name="location"
                    className="text-charcoal bg-transparent text-sm border-none outline-none py-3 cursor-pointer"
                  >
                    <option value="null">Select Location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="delhi">Delhi</option>
                    <option value="indore">Indore</option>
                  </select>
                </div>
                <div className="flex items-center border bg-white rounded-lg border-lightGray space-x-2 w-full md:w-1/2 h-14 px-4">
                  <input
                    type="text"
                    placeholder="eg. Doctor, specialisation, clinic name"
                    className="w-full h-full  rounded-lg border-none outline-none"
                  />
                  <i className="fa-solid fa-arrow-right cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-4/5 mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-x-12 h-20 mt-4 md:mt-0 md:border-y md:border-lightGray">
          <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-36 text-charcoal font-semibold py-2 px-4 space-x-8 rounded-lg">
            <p className="text-sm">Experties</p>
            <div className="rotate-180">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-36 text-charcoal font-semibold py-2 px-4 space-x-8 rounded-lg">
            <p className="text-sm">Gender</p>
            <div className="rotate-180">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-36 text-charcoal font-semibold py-2 px-4 space-x-8 rounded-lg">
            <p className="text-sm">Fees</p>
            <div className="rotate-180">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-36 text-charcoal font-semibold py-2 px-4 space-x-8 rounded-lg">
            <p className="text-sm">Languages</p>
            <div className="rotate-180">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="bg-green-100 cursor-pointer flex items-center justify-between min-w-36 text-charcoal font-semibold py-2 px-4 space-x-8 rounded-lg">
            <p className="text-sm text-forest">All Filters</p>
            <div className="rotate-180">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
        </div>
        <div className="md:px-40 pb-10">
          <div className="flex ml-auto w-fit my-16 space-x-4">
            <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-fit text-charcoal font-semibold py-2 px-4 space-x-8 rounded-3xl">
              <p className="text-sm">Experties</p>
              <div className="rotate-180">
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-fit text-charcoal font-semibold py-2 px-4 space-x-8 rounded-3xl">
              <p className="text-sm">Female</p>
              <div className="rotate-180">
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-fit text-charcoal font-semibold py-2 px-4 space-x-8 rounded-3xl">
              <p className="text-sm">Rs.0-Rs.500</p>
              <div className="rotate-180">
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="bg-gray-100 cursor-pointer flex items-center justify-between w-fit text-charcoal font-semibold py-2 px-4 space-x-8 rounded-3xl">
              <p className="text-sm">Hindi</p>
              <div className="rotate-180">
                <i className="fa fa-times"></i>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:flex md:gap-x-6">
            <div className="bg-cream border rounded-3xl flex flex-col flex-1 items-center py-6 px-8">
              <div className="w-36 h-36 relative">
                <img src={profileOnPlanePage} />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2  text-xs space-x-1 bg-black text-white flex items-center w-fit px-2 rounded-xl">
                  <span>4.5</span>
                  <span className="text-golden text-lg">&#9733;</span>
                </div>
              </div>
              <h3 className="text-3xl my-4 font-600">Dr. Prerna Narang</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span>
                    <img src={capsuleImage} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Male-Female Infertility
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={degree} />
                  </span>
                  <span className="text-xs text-charcoal ml-2">
                    7 years of experience
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={message} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Speaks : English, Hindi, Marathi
                  </span>
                </div>
              </div>

              <div className="flex mt-4 text-xs font-600 space-x-2">
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Video Consultation</p>
                  <p className="text-forest font-600">₹800</p>
                </div>
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Chat Consultation</p>
                  <p className="text-forest font-600">Free</p>
                </div>
              </div>

              <div className="flex flex-col w-full space-y-2 mt-8">
                <button className="py-3 border border-forest bg-white text-forest rounded-lg">
                  View Profile
                </button>
                <button className="py-3 bg-forest text-white rounded-lg">
                  Book a consultation
                </button>
              </div>
            </div>
            <div className="bg-cream border rounded-3xl flex flex-col flex-1 items-center py-6 px-8">
              <div className="w-36 h-36 relative">
                <img src={profileOnPlanePage} />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2  text-xs space-x-1 bg-black text-white flex items-center w-fit px-2 rounded-xl">
                  <span>4.5</span>
                  <span className="text-golden text-lg">&#9733;</span>
                </div>
              </div>
              <h3 className="text-3xl my-4 font-600">Dr. Prerna Narang</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span>
                    <img src={capsuleImage} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Male-Female Infertility
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={degree} />
                  </span>
                  <span className="text-xs text-charcoal ml-2">
                    7 years of experience
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={message} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Speaks : English, Hindi, Marathi
                  </span>
                </div>
              </div>

              <div className="flex mt-4 text-xs font-600 space-x-2">
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Video Consultation</p>
                  <p className="text-forest font-600">₹800</p>
                </div>
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Chat Consultation</p>
                  <p className="text-forest font-600">Free</p>
                </div>
              </div>

              <div className="flex flex-col w-full space-y-2 mt-8">
                <button className="py-3 border bg-white border-forest text-forest rounded-lg">
                  View Profile
                </button>
                <button className="py-3 bg-forest text-white rounded-lg">
                  Book a consultation
                </button>
              </div>
            </div>
            <div className="bg-cream border rounded-3xl flex flex-col flex-1 items-center py-6 px-8">
              <div className="w-36 h-36 relative">
                <img src={profileOnPlanePage} />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2  text-xs space-x-1 bg-black text-white flex items-center w-fit px-2 rounded-xl">
                  <span>4.5</span>
                  <span className="text-golden text-lg">&#9733;</span>
                </div>
              </div>
              <h3 className="text-3xl my-4 font-600">Dr. Prerna Narang</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span>
                    <img src={capsuleImage} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Male-Female Infertility
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={degree} />
                  </span>
                  <span className="text-xs text-charcoal ml-2">
                    7 years of experience
                  </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img src={message} />
                  </span>
                  <span className="text-xs text-charcoal ml-4">
                    Speaks : English, Hindi, Marathi
                  </span>
                </div>
              </div>

              <div className="flex mt-4 text-xs font-600 space-x-2">
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Video Consultation</p>
                  <p className="text-forest font-600">₹800</p>
                </div>
                <div className="border border-green-200 text-center p-2 rounded-lg space-y-1">
                  <p className="text-charcoal">Chat Consultation</p>
                  <p className="text-forest font-600">Free</p>
                </div>
              </div>

              <div className="flex flex-col w-full space-y-2 mt-8">
                <button className="py-3 border bg-white border-forest text-forest rounded-lg">
                  View Profile
                </button>
                <button className="py-3 bg-forest text-white rounded-lg">
                  Book a consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlansPage;
