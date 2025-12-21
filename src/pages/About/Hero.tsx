import aboutphone from "../../assets/aboutphone.png";
import demos from "../../assets/demos.png";
import stacked from "../../assets/stacked.png";
import AppLinks from "../../components/AppLinks";
import ring1 from "../../assets/bluering.png";
import ring2 from "../../assets/pinkring.png";

export default function Hero() {
  return (
    <section className="lg:h-176.25 h-236.5 px-5.25 bg-white">
      <div className="lg:w-297.5 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-18.25 lg:justify-between items-center align-middle h-full">
        <div className="lg:w-135.5">
          <p className="font-fontspringm text-dark leading-[110%] tracking-[-5%] lg:text-[48px] text-[32px] font-semibold">
            We help you keep your important documents safe and easy to find.
          </p>
          <p className="text-[#778492] mt-5 mb-9.75 text-sm leading=[150%] tracking-[-2%]">
            Life gets busy. Your documents shouldn’t get lost in the process
          </p>
          <div className="flex">
            <AppLinks />
          </div>
        </div>
        <div className="lg:w-124.25 grid lg:grid-cols-2 w-full grid-cols-1 gap-3.75 relative">
          <div className="flex flex-col gap-3.75 z-10 w-full">
            <div className="bg-[#F9F9F9E5] lg:w-60.25 w-full h-51 grid place-items-center rounded-xl">
              <div className="w-[193.13px] h-[102.27px] overflow-hidden">
                <img className="w-full h-full" src={demos} alt="image" />
              </div>
            </div>
            <div className="bg-[#F9F9F9E5] lg:w-60.25 w-full h-51 grid place-items-center rounded-xl">
              <div className="w-[193.13px] h-[102.27px] overflow-hidden">
                <img className="w-full h-full" src={stacked} alt="image" />
              </div>
            </div>
          </div>
          <div className="bg-[#FFF7F7E5] lg:grid place-items-center rounded-xl z-10 hidden">
            <div className="w-[162.53px] h-84">
              <img src={aboutphone} alt="" />
            </div>
          </div>
          <div className="w-26.25 h-26.25 absolute lg:-top-4 -top-12 lg:-left-14">
            <img className="w-full h-full" src={ring1} alt="ring" />
          </div>
          <div className="w-32 h-32 absolute lg:-right-2 right-4 -bottom-18">
            <img className="w-full h-full" src={ring2} alt="ring" />
          </div>
        </div>
      </div>
    </section>
  );
}
