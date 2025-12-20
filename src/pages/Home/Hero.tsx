import { BsDot } from "react-icons/bs";
import AppLinks from "../../components/AppLinks";
import phone from "../../assets/phone.png";
import notes from "../../assets/notes.png";

export default function Hero() {
  return (
    <div className="bg-dark">
      <div className="lg:px-31.75 px-5.25 lg:py-10 py-12">
        <div className="text-[#7F8A95] lg:text-sm text-xs flex items-center justify-center lg:gap-4 font-fredoka leading-[120%]">
          <p>Secure Storage</p>
          <BsDot size={30} />
          <p>Legal Notarization</p>
          <BsDot size={30} />
          <p>Instant Access</p>
        </div>
        <div className="text-center mx-auto mt-3 mb-5">
          <h2 className="text-white lg:text-5xl text-[32px] font-semibold leading-[110%] tracking-[-5%] font-fontspringl">
            Never Lose an Important <br className="hidden lg:block" />
            Document Again
          </h2>
        </div>
        <div className="lg:w-104.25 mx-auto text-center">
          <p className="font-poppins lg:text-base text-sm text-[#B9C1C9] leading-[140%] tracking-[-5%]">
            Keep everything important safe and close. Whether it’s a quick note,
            a personal password, an important document, or even a video message
          </p>
        </div>
      </div>
      <div className="lg:h-187.5 h-112.5 w-full relative lg:bg-[url('/hero.png')] bg-[url('/hero_sm.png')] lg:bg-contain bg-cover bg-bottom bg-no-repeat">
        <div>
          <AppLinks />
        </div>
        <div className="lg:w-115.75 w-72.25 absolute bottom-0 translate-x-[65%] right-1/2">
          <img className="w-full" src={phone} alt="phone" />
          <div className="lg:w-[79.4px] w-[49.6px] lg:h-[53.85px] h-[33.66px] absolute lg:bottom-25 bottom-18 px-1 bg-white rounded-xl drop-shadow-2xl flex items-center justify-center">
            <div className="flex items-center w-full">
              {[
                "https://randomuser.me/api/portraits/men/55.jpg",
                "https://randomuser.me/api/portraits/men/63.jpg",
                "https://randomuser.me/api/portraits/women/36.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  style={{
                    transform: `translateX(-${i * 10}px)`,
                  }}
                  className="lg:w-[30.38px] w-[18.99px] lg:h-[30.38px] h-[18.99px] shrink-0 rounded-full overflow-hidden border-2 border-white"
                >
                  <img
                    src={img}
                    alt="dp"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <img
            className="lg:w-[250.48px] w-[125.31px] lg:h-[57.34px] h-[39.05px] absolute lg:top-30 top-24 lg:right-0 right-10 object-cover"
            src={notes}
            alt="notes"
          />
        </div>
      </div>
    </div>
  );
}
