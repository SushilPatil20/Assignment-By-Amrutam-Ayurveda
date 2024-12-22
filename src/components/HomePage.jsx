import Header from "./Header";
import Banner from "../assets/banner.png";
import Profile from "../assets/profile.png";
import RightTickBlueIcon from "../assets/rightTickBlueIcon.png";
import Facebook from "../assets/faceBookImg.png";
import Instagram from "../assets/instagramBookImg.png";
import Youtube from "../assets/youtubeImg.png";
import Twitter from "../assets/twitterImg.png";
import RightTickGreenIcon from "../assets/righttickGreenIcon.png";
import LeftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import ladyLeftFacing from "../assets/ladyLeftFacing.png";
import ladyWithSearchIcon from "../assets/ladyWithSearchIcon.png";
import immunityImage from "../assets/immunityImage.png";
import skincareImgae from "../assets/skincareImgae.png";
import homeImg from "../assets/homeImg.png";
import reviewProfileImg from "../assets/reviewProfileImg.png";

function HomePage() {
  return (
    <>
      <main className="w-[1220px] mx-auto pb-8">
        <section>
          <section className="relative top-14 h-48 -z-10">
            <img src={Banner} alt="banner" />
          </section>
          <aside className="absolute left-36 top-64">
            <img src={Profile} alt="profile" />
          </aside>
          <section className="h-40 bg-cream flex items-center pl-64 pr-12 justify-between border border-lightGray">
            <div className="w-40">
              <p className="flex items-center relative">
                <span className="text-xl font-600">Dr. Bruce Willis</span>
                <img
                  src={RightTickBlueIcon}
                  alt="profile-pic"
                  className="block absolute -right-4 top-1"
                />
              </p>
              <p className="text-forest">Gynecologist</p>
              <p className="text-charcoal">
                <span> 4.2 </span>
                <span className="text-golden text-2xl">&#9733;</span>
                <span className="text-golden text-2xl">&#9733;</span>
                <span className="text-golden text-2xl">&#9733;</span>
                <span className="text-golden text-2xl">&#9733;</span>
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div className="text-center font-600">
                <p className="text-forest">Followers</p>
                <p className="text-lg">850</p>
              </div>
              <div className="text-center font-600">
                <p className="text-forest">Following</p>
                <p className="text-lg">18k</p>
              </div>
              <div className="text-center font-600">
                <p className="text-forest">Posts</p>
                <p className="text-lg ">250</p>
              </div>
            </div>
            <button className="bg-forest text-white rounded-lg h-14 w-72">
              Book an Appointment
            </button>
          </section>
        </section>
        <section className="mt-10 flex gap-6">
          <div className="w-1/2 space-y-8">
            <aside className="border border-lightGray rounded-2xl w-full h-fit">
              <section className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-2xl flex items-center justify-between h-16 px-8">
                <p className="text-charcoal text-xl font-600">
                  A Little About me
                </p>
                <button className="border border-forest rounded-lg px-4 py-2 text-charcoal w-28 flex items-center justify-between text-lg">
                  Follow <i className="fa fa-plus text-xl "></i>
                </button>
              </section>
              <section className="p-8">
                <p className="text-custom-dark ">
                  Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                  Hospital Surat. love to work with all my hospital staff and
                  seniour doctors. Completed my graduation in Gynaecologist
                  Medicine from the.
                </p>
                <div className="flex items-baseline space-x-3 h-fit mt-8">
                  <span className="block w-3/4 border-b border-custom-dark"></span>
                  <span className="underline font-600 cursor-pointer">
                    Read More
                  </span>
                </div>

                <div className="flex items-center mt-10">
                  <p className="font-600 text-charcoal">Language Spoken</p>
                  <div className="ml-4 space-x-4">
                    <button className="bg-gray-100 text-charcoal px-6 py-2 rounded-2xl">
                      English
                    </button>
                    <button className="bg-gray-100 text-charcoal px-6 py-2 rounded-2xl">
                      Hindi
                    </button>
                    <button className="bg-gray-100 text-charcoal px-6 py-2 rounded-2xl">
                      Telugu
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-10 gap-x-4 -ml-1">
                  <img
                    src={Facebook}
                    alt="face-book image"
                    className="cursor-pointer"
                  />
                  <img
                    src={Instagram}
                    alt="face-book image"
                    className="cursor-pointer"
                  />
                  <img
                    src={Youtube}
                    alt="face-book image"
                    className="cursor-pointer"
                  />
                  <img
                    src={Twitter}
                    alt="face-book image"
                    className="cursor-pointer"
                  />
                </div>
              </section>
            </aside>
            <aside className="border border-lightGray rounded-2xl w-full h-fit ">
              <section className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-2xl flex items-center h-16 px-8">
                <p className="text-charcoal text-xl font-600">
                  I Specialize In
                </p>
              </section>
              <section className="p-8 flex space-x-6">
                <div className="flex cursor-pointer flex-col justify-center items-center">
                  <div className="bg-green-50 border rounded-lg p-2">
                    <img src={ladyLeftFacing} alt="lady-image" />
                  </div>
                  <p className="text-charcoal font-600 mt-1.5">
                    Women's Health
                  </p>
                </div>
                <div className="flex cursor-pointer flex-col justify-center items-center">
                  <div className="bg-green-50 border rounded-lg p-2">
                    <img src={skincareImgae} alt="lady-image" />
                  </div>
                  <p className="text-charcoal font-600 mt-1.5">Skin Care</p>
                </div>
                <div className="flex cursor-pointer flex-col justify-center items-center">
                  <div className="bg-green-50 border rounded-lg p-2">
                    <img src={immunityImage} alt="lady-image" />
                  </div>
                  <p className="text-charcoal font-600 mt-1.5">Immunity</p>
                </div>
                <div className="flex cursor-pointer flex-col justify-center items-center">
                  <div className="bg-green-50 border rounded-lg p-2">
                    <img src={ladyWithSearchIcon} alt="lady-image" />
                  </div>
                  <p className="text-charcoal font-600 mt-1.5">Hair care</p>
                </div>
              </section>
            </aside>
            <aside className="border border-lightGray rounded-2xl w-full h-fit ">
              <section className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-2xl flex items-center h-16 px-8">
                <p className="text-charcoal text-xl font-600">
                  The Concerns I Treat
                </p>
              </section>
              <section className="p-8 flex flex-wrap gap-x-2.5 gap-y-5">
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Skin Treatment
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Pregnancy
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Period Doubts
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Endometriosis
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Pelvic Pain
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 bg-gray-100 rounded-2xl">
                  Ovarian Cysts
                </p>
                <p className="flex items-center justify-center px-4 py-2 text-forest text-sm font-600 rounded-2xl border">
                  {" "}
                  + 5 More
                </p>
              </section>
            </aside>
            <aside className="border border-lightGray rounded-2xl w-full h-fit ">
              <section className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-2xl flex items-center h-16 px-8">
                <p className="text-charcoal text-xl font-600">
                  My Work Experience
                </p>
              </section>
              <section className="p-8">
                <h2 className="uppercase font-extrabold text-forest border-b border-lightGray pb-8 w-4/5">
                  I have been in practice for : 7+ Years
                </h2>
                <div className="flex flex-col space-y-4 my-8 w-11/12">
                  <div className="flex items-start">
                    <img src={homeImg} alt="home-img" />
                    <div className="ml-2">
                      <p className="text-sm font-semibold text-charcoal">
                        Midtown Medical Clinic
                      </p>
                      <p className="text-custom-dark">Senior doctor</p>
                    </div>
                    <p className="text-custom-dark uppercase text-sm ml-auto">
                      2016-present
                    </p>
                  </div>
                  <div className="flex items-start">
                    <img src={homeImg} alt="home-img" />
                    <div className="ml-2">
                      <p className="text-sm font-semibold text-charcoal">
                        Midtown Medical Clinic
                      </p>
                      <p className="text-custom-dark">Senior doctor</p>
                    </div>
                    <p className="text-custom-dark uppercase text-sm ml-auto">
                      2010-2015
                    </p>
                  </div>
                </div>
              </section>
            </aside>
            <aside className="border border-lightGray rounded-2xl w-full h-fit ">
              <section className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-2xl flex items-center h-16 px-8">
                <p className="text-charcoal text-xl font-600">
                  Featured Reviews (102)
                </p>
              </section>
              <section className="px-8 py-2 space-y-6">
                <div className="bg-gray-50 px-8 py-10 rounded-3xl">
                  <div className="flex w-11/12 items-center">
                    <div className="flex items-center">
                      <img src={reviewProfileImg} alt="Aslicent Hightower" />
                      <div className="ml-3">
                        <strong className="text-charcoal">
                          Alicent Hightower
                        </strong>
                        <p className="text-sm text-custom-dark">
                          Consulted for Skin care
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-custom-dark ml-auto">
                      20 January 2023
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <p className="text-charcoal text-sm">
                      Might be bit early to confirm but yes I can see noticeable
                      difference in my hairfall. will write again after using it
                      for longer periods
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-3xl">
                  <div className="flex w-11/12 items-center">
                    <div className="flex items-center">
                      <img src={reviewProfileImg} alt="Aslicent Hightower" />
                      <div className="ml-3">
                        <strong className="text-charcoal">
                          Alicent Hightower
                        </strong>
                        <p className="text-sm text-custom-dark">
                          Consulted for Pregnancy
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-custom-dark ml-auto">
                      20 January 2023
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <span className="text-golden text-2xl">&#9733;</span>
                    <p className="text-charcoal text-sm">
                      Might be bit early to confirm but yes I can see noticeable
                      difference in my hairfall. will write again after using it
                      for longer periods
                    </p>
                  </div>
                </div>
              </section>
            </aside>
          </div>
          <div className="w-1/2">
            <aside className="border border-lightGray rounded-2xl w-full h-fit px-6 py-8 flex flex-col">
              <section className="rounded-2xl flex items-center justify-between h-16 px-8 border border-lightGray">
                <p className="text-lg font-600">Appointment Fee</p>
                <p className="text-forest text-lg font-600">₹699.00</p>
              </section>
              <section>
                <div className="flex mt-8 items-center space-x-6 ml-2 font-600">
                  <span className="text-xl font-600">
                    Select your mode of session
                  </span>
                  <span className="block w-60 border-b border-custom-dark"></span>
                </div>
                <div className="flex items-center mt-10 gap-4">
                  <div className="border cursor-pointer border-lightGray hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-8 flex-1">
                    <p className="font-600">In-Clinic</p>
                    <p className="text-charcoal">45 Mins</p>
                  </div>
                  <div className="border cursor-pointer border-lightGray hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-8 flex-1">
                    <p className="font-600 flex items-center space-x-1">
                      <span>Video</span>{" "}
                      <img
                        src={RightTickGreenIcon}
                        alt=""
                        className="w-4 h-4"
                      />
                    </p>
                    <p className="text-charcoal">45 Mins</p>
                  </div>
                  <div className="border cursor-pointer border-lightGray hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-8 flex-1">
                    <p className="font-600">Chat</p>
                    <p className="text-charcoal">10 Mins</p>
                  </div>
                </div>
                <div className="flex mt-8 items-center ml-2 font-600">
                  <span className="text-xl font-600">Pick a time slot</span>
                  <span className="block w-80 border-b border-custom-dark ml-auto mr-4"></span>
                  <span className="w-11 h-11 flex items-center justify-center border border-lightGray rounded-full">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
                <div className="border border-lightGray h-28 my-8 rounded-xl flex items-center justify-evenly px-4 ">
                  <div className="cursor-pointer">
                    <img src={LeftArrow} alt="left-arrow" />{" "}
                  </div>
                  <div className="mx-auto w-fit flex items-center space-x-4">
                    <div className="border border-lightGray cursor-pointer hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-6">
                      <p className="font-600">Mon, 10 Oct</p>
                      <p className="text-charcoal">10 slots</p>
                    </div>
                    <div className="border border-lightGray cursor-pointer hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-6 ">
                      <p className="font-600">Tue, 11 Oct</p>
                      <p className="text-red-600">02 slots</p>
                    </div>
                    <div className="border border-lightGray cursor-pointer hover:border-forest hover:bg-green-100 hover:text-forest h-20 rounded-lg flex flex-col items-center justify-center px-6 ">
                      <p className="font-600">Wed, 12 Oct</p>
                      <p className=" text-golden">05 slots</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-600 px-5 ">Morning</h2>
                  <div className="flex flex-wrap gap-3 mt-3 -ml-2 px-4">
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm">
                      09:00 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      09:00 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      09:00 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      09:00 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      10:45 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm bg-forest text-white">
                      11:00 AM
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-600 px-5 mt-8">Evening</h2>
                  <div className="flex flex-wrap gap-3 mt-3 -ml-2 px-4">
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm">
                      04:00 PM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      04:15 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      04:30 AM
                    </div>
                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm ">
                      04:45 AM
                    </div>

                    <div className="border border-lightGray px-4 py-5 rounded-2xl text-sm">
                      05:15 PM
                    </div>
                  </div>
                </div>
              </section>
              <button className="text-white bg-forest text-xl mx-auto rounded-lg h-14 text-center w-4/5 mt-8">
                Make An Appointment
              </button>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
