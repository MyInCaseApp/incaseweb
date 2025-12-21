import map from "../../assets/map.png";
import mapsm from "../../assets/mapsm.png";
import happy_girl from "../../assets/happy_girl.png";
import unlocked from "../../assets/unlocked.png";
import { FaSquare } from "react-icons/fa";
import AppLinks from "../../components/AppLinks";
import pill from "../../assets/pill.png";

export default function Who() {
  return (
    <section className="lg:w-297.5 grid gap-6 w-full mx-auto">
      <div className="w-full">
        <div className="text-center h-102 bg-[#E9F2FB] rounded-xl relative px-5.25">
          <div className="lg:w-164.5 w-full mx-auto lg:py-14.25 py-11.25">
            <p className="font-fontspringm font-medium lg:text-[32px] text-xl text-dark leading-[120%] tracking-[-5%]">
              Who We Are
            </p>
            <p className="font-fontspring text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-sm lg:text-base">
              InCase is your secure digital vault for life’s most important
              documents. We protect what matters most, from educational
              certificates to legal documents, we help you protect your legacy.
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              className="w-full h-full hidden lg:block"
              src={map}
              alt="map"
            />
            <img className="w-full h-full lg:hidden" src={mapsm} alt="map" />
          </div>
        </div>
      </div>

      <div className="lg:h-122.75 h-209.5 w-full flex lg:flex-row flex-col items-center gap-6">
        <div className="lg:w-[52%] relative h-full bg-[#FBF8E9] py-11.25 lg:px-11.25 px-5.25 lg:rounded-xl">
          <div className="lg:w-130.75 w-full">
            <p className="font-fontspringm font-medium lg:text-[32px] text-xl text-dark leading-[120%] tracking-[-5%]">
              Your Life, Secured
            </p>
            <p className="font-poppins text-[#404448] leading-[140%] tracking-[-5%] mt-3 text-sm lg:text-base">
              Every document tells a part of your story, your education, career,
              property, family, and future.
            </p>
            <p className="font-poppins text-[#404448] leading-[140%] tracking-[-5%] text-sm lg:text-base">
              We help you protect those milestones, so they’re safe today and
              accessible tomorrow.
            </p>
          </div>
          <div className="lg:w-105 w-[333.99px] h-[206.96px] -translate-x-1/2 left-1/2 absolute lg:bottom-3.25 bottom-6">
            <img src={pill} alt="pill texts" />
          </div>
        </div>
        <div className="lg:w-[48%] h-full lg:rounded-xl overflow-hidden">
          <img
            src={happy_girl}
            className="w-full h-full object-cover"
            alt="happy_girl"
          />
        </div>
      </div>

      <div className="lg:h-122.75 h-272 flex lg:flex-row flex-col gap-6">
        <div className="lg:w-[48%] h-full lg:rounded-xl relative overflow-hidden bg-[#F8F8F8]">
          <div className="h-107.5 w-[308.4px] absolute -translate-x-1/2 left-[60%] bottom-0">
            <img
              className="h-full w-full object-contain"
              src={unlocked}
              alt="phone"
            />
          </div>
        </div>
        <div className="lg:w-[52%] h-full bg-[#F5E9FB] py-11.25 lg:px-11.25 px-5.25 lg:rounded-xl">
          <p className="font-fontspringm font-medium text-[32px] text-dark leading-[120%] tracking-[-5%]">
            The Problem We Solve
          </p>
          <div className="grid gap-3 font-poppins text-[#404448] leading-[140%] tracking-[-5%] text-sm lg:text-base mt-3">
            <p>Think about moments like:</p>
            {[
              "Searching frantically for your WAEC during job applications",
              "Police stopping you and you can’t find car papers",
              "Sorting through house files for tenant verification",
              "Keeping wills safe but accessible",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaSquare className="rotate-45" color="#7522DA" />
                <p>{item}</p>
              </div>
            ))}
            <p>
              Documents matter; yet most people still rely on dusty folders,
              random drives, and risky email attachments
            </p>
            <p>
              InCase fixes that by giving you one secure home for everything
              important.
            </p>
          </div>
          <div className="flex mt-8">
            <AppLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
