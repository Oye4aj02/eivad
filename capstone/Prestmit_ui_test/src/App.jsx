import React, { useEffect, useState } from "react";
import AOS from "aos";
import CountUp from "react-countup";
import logo from "./assets/icons/logo.svg";
import Ourteam1 from "./assets/images/our_team_1.svg";
import Ourteam2 from "./assets/images/our_team_2.svg";
import Ourteam3 from "./assets/images/our_team_3.svg";
import Enterprisebg from "./assets/images/enterprise_bg.svg";
import { toast } from "react-toastify";

function App() {
  const [values, setValues] = useState("");

  const handleEnterpriseTemplate = (e) => {
    e.preventDefault();
    toast("🦄 Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setValues("");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full overflow-hidden h-full">
      <section className="w-full bg-BACKGROUND_GREEN_100 xl:h-[473px] lg:h-[400px] h-auto lg:px-[10%] md:px-[5%] px-[2%] py-[3%] flex flex-col lg:gap-24 md:gap-16 gap-8">
        <div className="w-full flex justify-between items-center">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className="md:w-[162.22px] md:h-[42px] w-[140px] h-[30px]"
          />
          <ul className="md:flex items-center justify-center gap-6 hidden list-none">
            <li className="text-text_blue text-base font-semibold cursor-pointer">
              Product
            </li>
            <li className="text-text_blue text-base font-semibold cursor-pointer">
              Services
            </li>
            <li className="text-text_blue text-base font-semibold cursor-pointer">
              About
            </li>
            <li>
              <button
                type="button"
                className="text-text_blue text-base font-semibold cursor-pointer bg-none border border-text_blue h-[40px] w-[128px] rounded-full"
              >
                login
              </button>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col gap-2 w-full"
        >
          <h2 className="w-full text-text_blue font-normal text-xl">About</h2>
          <div className="flex md:flex-row flex-col gap-2 justify-between w-full">
            <h1 className="w-full text-text_dark_100 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal xl:leading-[72px] lg:leading-[46px] md:leading-[40px]">
              We love to make great things, things that matter.
            </h1>
            <p className="w-full text-text_blue font-normal text-base leading-7 xl:px-[4%] lg:px-[2%]">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-BACKGROUND_WHITE lg:h-[600px] md:h-auto h-auto flex flex-col items-center xl:gap-24 lg:gap-20 md:gap-8 gap-6 p-[2%]">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-center md:mt-16 mt-6 flex flex-col gap-2 md:w-[842px] w-full"
        >
          <h4 className="text-xl text-text_blue font-normal">Our numbers</h4>
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl lg:px-0 md:px-[8%] text-center px-[2%] xl:leading-[72px] lg:leading-[46px] md:leading-[40px] font-light">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="w-full flex md:flex-row flex-col md:justify-around items-center">
          <div className="flex flex-col lg:gap-4 md:gap-2">
            <h2 className="xl:text-8xl lg:text-6xl md:text-4xl text-3xl text-center text-text_blue font-normal leading-[56px]">
              <CountUp end={120} duration={2.75} />m
            </h2>
            <p className="lg:text-2xl md:text-xl text-base text-text_blue font-light">
              Cool feature title
            </p>
          </div>
          <div className="flex flex-col lg:gap-4 md:gap-2">
            <h2 className="xl:text-8xl lg:text-6xl md:text-4xl text-3xl text-center text-text_blue font-normal leading-[56px]">
              <CountUp end={10.0} duration={2.75} />
            </h2>
            <p className="lg:text-2xl md:text-xl text-base text-text_blue font-light">
              Cool feature title
            </p>
          </div>
          <div className="flex flex-col lg:gap-4 md:gap-2">
            <h2 className="xl:text-8xl lg:text-6xl md:text-4xl text-3xl text-center text-text_blue font-normal leading-[56px]">
              <CountUp end={240} duration={2.75} />
            </h2>
            <p className="lg:text-2xl md:text-xl text-base text-text_blue font-light">
              Cool feature title
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-BACKGROUND_BLUE_100 lg:h-[624px] md:h-auto h-auto py-[6%] xl:px-[20%] lg:px-[12%] md:px-[8%] px-[4%]">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full flex flex-col gap-3 h-full"
        >
          <div className="w-full text-text_white md:text-xl text-base font-normal leading-8">
            Our Story
          </div>
          <div className="w-full text-text_white lg:text-5xl md:text-4xl text-2xl font-normal  xl:leading-[72px] lg:leading-[46px] md:leading-[40px]">
            Handshake infographic mass market crowdfunding iteration.
          </div>
          <div className="lg:w-[799px] md:w-full w-full text-text_grey md:text-xl text-base font-normal leading-8">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </div>
        </div>
      </section>
      <section className="w-full bg-BACKGROUND_WHITE min-h-[624px] h-auto py-[6%]">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full flex flex-col gap-3 h-full xl:px-[20%] lg:px-[12%] md:px-[8%] px-[4%] mb-[5%]"
        >
          <div className="w-full text-text_grey_100 md:text-xl text-base font-normal leading-8">
            Our team
          </div>
          <div className="w-full text-text_dark_100 lg:text-5xl md:text-4xl text-2xl font-normal  xl:leading-[72px] lg:leading-[46px] md:leading-[40px]">
            The people behind the work
          </div>
          <div className="lg:w-[799px] md:w-full w-full text-text_grey_100 md:text-xl text-base font-normal leading-8">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </div>
        </div>
        <div className="xl:px-[17%] lg:px-[10%] md:px-[6%] px-[4%] w-full">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full grid md:grid-cols-3 grid-cols-1 md:place-items-start place-items-center gap-3"
          >
            <div className="flex flex-col md:gap-3">
              <img
                src={Ourteam1}
                loading="lazy"
                className="md:w-[250px] md:h-[250px] w-[200px] h-[200px]"
                alt="man"
              />
              <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                Michael Scott
              </h2>
              <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                General Manager
              </h5>
            </div>
            <div className="flex flex-col md:gap-3">
              <img
                src={Ourteam1}
                loading="lazy"
                className="md:w-[250px] md:h-[250px] w-[200px] h-[200px]"
                alt="man"
              />
              <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                Michael Scott
              </h2>
              <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                General Manager
              </h5>
            </div>
            <div className="flex flex-col md:gap-3">
              <img
                src={Ourteam1}
                loading="lazy"
                className="md:w-[250px] md:h-[250px] w-[200px] h-[200px]"
                alt="man"
              />
              <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                Michael Scott
              </h2>
              <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                General Manager
              </h5>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="w-full grid md:grid-cols-2 grid-cols-1 mt-20 gap-8"
          >
            <div className="flex flex-row gap-3">
              <img
                src={Ourteam2}
                loading="lazy"
                className="w-[120px] h-[120px]"
                alt="man"
              />
              <div className="flex flex-col items-center gap-3">
                <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                  Dwight Schrute
                </h2>
                <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                  General Manager
                </h5>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img
                src={Ourteam3}
                loading="lazy"
                className="w-[120px] h-[120px]"
                alt="man"
              />
              <div className="flex flex-col items-center gap-3">
                <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                  Pam Beetsley
                </h2>
                <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                  General Manager
                </h5>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img
                src={Ourteam3}
                loading="lazy"
                className="w-[120px] h-[120px]"
                alt="team_man"
              />
              <div className="flex flex-col items-center gap-3">
                <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                  Pam Beetsley
                </h2>
                <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                  General Manager
                </h5>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img
                src={Ourteam3}
                loading="lazy"
                className="w-[120px] h-[120px]"
                alt="team_man"
              />
              <div className="flex flex-col items-center gap-3">
                <h2 className="md:text-2xl text-xl text-text_dark_100 leading-10">
                  Pam Beetsley
                </h2>
                <h5 className="leading-8 md:text-xl text-base text-text_grey_100">
                  General Manager
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-BACKGROUND_BLUE_100 xl:px-[12%] lg:px-[10%] md:px-[8%] px-[4%] py-[2%] min-h-[1093px] h-auto">
        <div className="w-full flex flex-col justify-center items-center border-b border-BACKGROUND_WHITE">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full md:mt-28 mt-8 flex flex-col gap-3 h-full mb-[5%]"
          >
            <div className="w-full text-center text-text_white md:text-xl text-base font-normal leading-8">
              Our Blog
            </div>
            <div className="w-full text-center text-text_white lg:text-5xl md:text-4xl text-2xl font-normal  xl:leading-[72px] lg:leading-[46px] md:leading-[40px]">
              Value proposition accelerator product management venture
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-2 mt-20"
        >
          <div className="flex gap-2">
            <div className="text-text_white lg:text-5xl md:text-3xl text-2xl font-normal">
              We are{" "}
              <span className="text-text_green lg:text-5xl md:text-3xl text-2xl font-normal">
                commited
              </span>
            </div>
          </div>
          <div className="text-xl text-text_grey font-normal md:px-[2%] md:mt-0 mb-[4%]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.
          </div>
          <div className="flex gap-2">
            <div className="text-text_white lg:text-5xl md:text-3xl text-2xl font-normal">
              We are{" "}
              <span className="text-text_green lg:text-5xl md:text-3xl text-2xl font-normal">
                responsible
              </span>
            </div>
          </div>
          <div className="text-xl text-text_grey font-normal md:px-[2%] md:mt-0 mb-[4%]">
            Mass market iPhone buzz conversion analytics stock iteration
            responsive web design user experience business plan handshake.
            Return on investment seed round MVP backing supply chain.
          </div>
          <div className="flex gap-2">
            <div className="text-text_white lg:text-5xl md:text-3xl text-2xl font-normal">
              We aim for{" "}
              <span className="text-text_green lg:text-5xl md:text-3xl text-2xl font-normal">
                progress
              </span>
            </div>
          </div>
          <div className="text-xl text-text_grey font-normal md:px-[2%] md:mt-0 mb-[4%]">
            Bootstrapping rockstar first mover advantage business model canvas
            alpha deployment launch party beta facebook metrics gamification
            growth hacking customer focus.
          </div>
        </div>
      </section>
      <section className="w-full bg-BACKGROUND_WHITE lg:px-[10%] md:px-[5%] sm:px-[2%] px-[1%] py-[3%]">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="w-full bg-BACKGROUND_BLUE_100 h-[391px] rounded-xl relative flex flex-col items-center justify-center"
        >
          <img
            src={Enterprisebg}
            alt="bg_img"
            className="top-0 right-0 absolute z-0"
          />
          <h2 className="text-text_white xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:leading-[72px] z-50 xl:w-[60%] lg:w-[70%] md:w-[70%] w-[70%] text-center">
            An enterprise template to ramp up your company website
          </h2>
          <form onSubmit={handleEnterpriseTemplate}>
            <div className="w-full flex lg:flex-row md:flex-col flex-col justify-center items-center gap-4 mt-8">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={values}
                required
                onChange={(e) => setValues(e.target.value)}
                className="md:w-[370px] h-[56px] w-[300px] rounded-full bg-BACKGROUND_WHITE px-[2%] z-50 outline-none border-none"
              />
              <button
                type="submit"
                className="md:w-[210px] h-[60px] w-[300px] bg-BACKGROUND_GREEN_100 z-50 text-text_blue text-xl rounded-full"
              >
                Start now
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer
        data-aos="fade-up"
        data-aos-duration="2000"
        className="mt-10 w-full bg-BACKGROUND_WHITE xl:h-[473px] lg:h-[400px] h-auto lg:px-[10%] md:px-[5%] px-[2%] py-[4%]"
      >
        <div className="w-full flex lg:flex-row md:flex-col flex-col justify-between gap-8">
          <div className="w-[600px] flex flex-col gap-8">
            <img src={logo} className="w-[156px] h-[41px]" loading="lazy" />
            <h4 className="text-base text-text_grey_100 leading-7">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </h4>
          </div>
          <div className="w-full flex lg:justify-around md:justify-between md:flex-row flex-col gap-4 flex-wrap">
            <div className="flex flex-col md:gap-8 gap-4">
              <h2 className="text-text_dark_100 text-xl leading-8">Landings</h2>
              <ul className="flex flex-col gap-4">
                <li className="text-text_grey_100 leading-8 text-xl">Home</li>
                <li className="text-text_grey_100 leading-8 text-xl">
                  Products
                </li>
                <li className="text-text_grey_100 leading-8 text-xl">
                  Services
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:gap-8 gap-4">
              <h2 className="text-text_dark_100 text-xl leading-8">Company</h2>
              <ul className="flex flex-col gap-4">
                <li className="text-text_grey_100 leading-8 text-xl">Home</li>
                <li className="text-text_grey_100 leading-8 text-xl flex gap-3 items-center">
                  Careers{" "}
                  <span className="w-[72px] h-[30px] bg-BACKGROUND_GREEN_100 text-xs rounded-full flex justify-center items-center text-text_blue">
                    Hiring!
                  </span>
                </li>
                <li className="text-text_grey_100 leading-8 text-xl">
                  Services
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:gap-8 gap-4">
              <h2 className="text-text_dark_100 text-xl leading-8">
                Resources
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="text-text_grey_100 leading-8 text-xl">Blog</li>
                <li className="text-text_grey_100 leading-8 text-xl">
                  Products
                </li>
                <li className="text-text_grey_100 leading-8 text-xl">
                  Services
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-text_grey_100 text-base font-normal leading-4 md:mt-8 mt-4 md:text-start text-center">
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
