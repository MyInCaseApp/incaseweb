import iphone from "../../assets/iphone.png";
import cert from "../../assets/cert.png";
import final from "../../assets/final.png";
import man from "../../assets/man.jpg";
import docs from "../../assets/docs.png";

interface CardsProps {
  name: string;
  text: string;
}

function Cards({ name, text }: CardsProps) {
  return (
    <div className="flex gap-2.25">
      <div className="w-1 h-6 bg-[#227BDA] rounded-[20px] translate-y-2"></div>
      <div className="lg:w-93.5">
        <p className="text-dark font-semibold font-fontspringm">{name}</p>
        <p className="font-poppins text-[#778492] text-sm mt-3">{text}</p>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="bg-[url('/doghnut.png')] lg:h-375 object-contain object-center relative">
      <div className="bg-linear-to-b via-[#ffffffdf] from-white to-[#f4f4f4f5] grid place-items-center lg:absolute w-full h-full px-5.25">
        <div className="lg:w-287.5 mx-auto">
          <p className="font-fontspringm font-medium text-center lg:text-[32px] text-xl leading-[120%] tracking-[-5%]">
            Our Solution
          </p>
          <div className="flex lg:flex-row flex-col items-center gap-5.75 justify-between lg:mt-12.5 mt-8">
            <div className="relative lg:w-92 h-116.25 rounded-xl px-5 pt-7.5 bg-linear-to-t from-[#02B189] via-20% via-white to-white">
              <p className="text-dark font-medium font-fontspringl lg:text-base mb-3">
                Secure Storage
              </p>
              <p className="text-[#778492] font-poppins text-sm leading-[135%] tracking-[-5%]">
                Store every file type, documents, videos, audio files and others
                in one secure place with military-grade encryption, and access
                them anytime across all your devices.
              </p>
              <div className="w-63.75 absolute bottom-0 -translate-x-1/2 left-1/2">
                <img src={iphone} className="w-full" alt="iphone" />
              </div>
            </div>
            <div className="relative lg:w-92 h-116.25 rounded-xl px-5 pt-7.5 bg-linear-to-t from-[#7522DA] via-20% via-white to-white">
              <p className="text-dark font-medium font-fontspringl lg:text-base mb-3">
                Digital Notarization
              </p>
              <p className="text-[#778492] font-poppins text-sm leading-[135%] tracking-[-5%]">
                Make your digital documents legally stronger with verified
                Nigerian notaries who add a secure digital stamp and
                lawyer-backed validation, creating an unforgeable legal trail
                that’s even safer than paper.
              </p>
              <div className="w-63.75 absolute bottom-0 -translate-x-1/2 left-1/2">
                <img src={cert} className="w-full" alt="iphone" />
              </div>
            </div>
            <div className="relative lg:w-92 h-116.25 rounded-xl px-5 pt-7.5 bg-linear-to-t from-[#05C4E1] via-20% via-white to-white">
              <p className="text-dark font-medium font-fontspringl lg:text-base mb-3">
                Smart Organization
              </p>
              <p className="text-[#778492] font-poppins text-sm leading-[135%] tracking-[-5%]">
                Quickly find any document in seconds with intelligent
                auto-organization, powerful search across name, date, type, or
                content, and secure sharing for family, lawyers, or business
                partners.
              </p>
              <div className="w-63.75 absolute bottom-0 -translate-x-1/2 left-1/2">
                <img src={final} className="w-full" alt="iphone" />
              </div>
            </div>
          </div>
          <div className="w-full lg:h-104.5 lg:mt-50 mt-30 mb-30 grid lg:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-[20px]">
              <p className="text-[#ADB3BB] text-sm font-medium font-fontspringm">
                SIMPLE 3 STEP PROCESS
              </p>
              <p className="font-medium font-fontspringm text-[32px] text-dark">
                How it Works
              </p>
              <div className="mt-7.5 grid gap-6">
                <Cards
                  name="Upload"
                  text="Upload your School Certificates, Car Papers, Certificate
                      of Occupancy and other existing files"
                />
                <Cards
                  name="Organize and Secure"
                  text="Files are automatically encrypted and organized by type"
                />
                <Cards
                  name="Access or Notarize"
                  text="View anytime or make your documents legally stronger with one tap"
                />
              </div>
            </div>
            <div className="rounded-[20px] lg:h-auto h-104.5 overflow-hidden relative">
              <img src={man} className="object-cover w-full h-full" alt="man" />
              <img
                className="absolute w-60.5 h-[58.96px] bottom-7.75 right-4"
                src={docs}
                alt="png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
