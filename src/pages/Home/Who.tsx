import blue from "../../assets/blue.png";
import yellow from "../../assets/yellow.png";
import purple from "../../assets/purple.png";
import AppLinks from "../../components/AppLinks";
import { useState } from "react";
import PriceCard from "../../components/PriceCard";
import thumb from "../../assets/thumb.png";
import SecurityTips from "../../components/SecurityTips";

export default function Who() {
  const [tab, setTab] = useState("monthly");

  return (
    <div className="lg:px-[145.5px] px-5.25 lg:pt-23.25 pt-10 bg-dark">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-287.25 mx-auto gap-12.5 lg:gap-0">
        <div>
          <div className="lg:w-[320px]">
            <p className="font-medium font-fontspringm text-[32px] text-white">
              Who is InCase for?
            </p>
            <p className="text-[#B7BCC1] font-poppins leading-[145%] tracking-[-2%] mt-3.5 mb-10">
              Everyone! Because we deserve a secure place for life's important
              information
            </p>
            <div className="flex">
              <AppLinks />
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="border border-[#212122] px-4 py-5 rounded-xl">
            <div className="w-13.5 h-10">
              <img className="w-full h-full" src={blue} alt="icon" />
            </div>
            <div className="p-2.5">
              <p className="text-xl text-white leading-[120%] tracking-[-2%] font-fontspringm">
                For Families
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  "Store birth certificates, marriage documents and academic records",
                  "Create digitally notarized copies of property documents and wills",
                  "Share important papers with family members securely",
                ]?.map((items, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-linear-to-r from-[#05C4E1] to-[#227BDA] rounded-[20px]"></div>
                    <p className="text-[#B7BCC1] text-sm font-poppins leading-[150%] tracking-[-2%]">
                      {items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[#212122] px-4 py-5 rounded-xl">
            <div className="w-13.5 h-10">
              <img className="w-full h-full" src={yellow} alt="icon" />
            </div>
            <div className="p-2.5">
              <p className="text-xl text-white leading-[120%] tracking-[-2%] font-fontspringm">
                For Professionals
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  "Protect contracts business agreements and client documents",
                  "Notarize documents instantly without leaving the office",
                  "Maintain compliance with secure document tracking",
                ]?.map((items, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-linear-to-r from-[#FFFF00] to-[#FF6F00] rounded-[20px]"></div>
                    <p className="text-[#B7BCC1] text-sm font-poppins leading-[150%] tracking-[-2%]">
                      {items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[#212122] px-4 py-5 rounded-xl">
            <div className="w-13.5 h-10">
              <img className="w-full h-full" src={purple} alt="icon" />
            </div>
            <div className="p-2.5">
              <p className="text-xl text-white leading-[120%] tracking-[-2%] font-fontspringm">
                FFor Students and Graduates
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  "Safeguard and notarize WAEC certificates, university degrees and transcripts",
                  "Store important identification documents",
                  "Access documents from anywhere during job applications",
                ]?.map((items, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-linear-to-r from-[#FCBFD5] to-[#8D75FA] rounded-[20px]"></div>
                    <p className="text-[#B7BCC1] text-sm font-poppins leading-[150%] tracking-[-2%]">
                      {items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-50 mx-auto lg:w-180">
        <div className="text-center">
          <p className="text-[#B7BCC1] text-sm font-poppins leading-[145%] tracking-[-2%]">
            OUR PRICING
          </p>
          <p className="font-medium font-fontspringm text-[32px] text-white">
            Transparent and Affordable
          </p>

          <div className="bg-[#212122] p-2.5 w-fit rounded-full mx-auto my-12.5">
            <button
              onClick={() => setTab("monthly")}
              className={`${
                tab === "monthly" ? "bg-black text-white" : "text-[#778492]"
              } px-4 py-3 rounded-[50px] font-poppins leading-[145%] tracking-[-5%] cursor-pointer`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTab("yearly")}
              className={`${
                tab === "yearly" ? "bg-black text-white" : "text-[#778492]"
              } px-4 py-3 rounded-[50px] font-poppins leading-[145%] tracking-[-5%] cursor-pointer`}
            >
              Yearly{" "}
              <span className="py-0.75 px-1.5 bg-[#227BDA] text-white rounded-full text-xs ml-2.5">
                Save 16%
              </span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <PriceCard
              price={1500}
              name="Basic Plan"
              duration="month"
              text="Get started with essential storage and security to keep your important files safe."
              features={[
                "500mb secure storage",
                "Basic document protection",
                "Access from any device",
              ]}
            />
            <PriceCard
              popular
              price={3500}
              name="Pro Plan"
              duration="month"
              text="More space, stronger protection, and premium features to power your digital vault. "
              features={[
                "20gb storage",
                "Advanced encryption",
                "Priority customer support",
              ]}
            />
            <PriceCard
              price={10000}
              name="Business Plan"
              duration="month"
              text="High-capacity storage and enterprise-level tools for teams that manage large volumes of documents."
              features={[
                "100gb storage",
                "Advanced encryption",
                "Priority customer support",
              ]}
            />
            <PriceCard
              glow
              name="Notarization Services"
              alternateName="Pay per document"
              duration="month"
              text="Make your files legally verified with certified digital notarization."
              features={[
                "Document notarization — ₦3,000",
                "Video notarization — ₦5,000",
                "Audio notarization — ₦3,500",
                "Timestamped & legally backed verification",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="lg:w-337.25 lg:h-172.25 h-305 lg:flex justify-between mx-auto relative">
        <div className="lg:w-106.75 mb-11.25 lg:mb-0 text-white lg:absolute top-[45%] lg:-translate-y-1/2">
          <p className="font-fontspringl text-white lg:text-[64px] text-[32px] tracking-[-2%] leading-[100%] font-bold">
            Security You <br className="lg:hidden" /> Can Trust
          </p>
          <p className="mt-4 mb-8 font-fredoka lg:text-base text-sm">
            We protect your documents like they're our own
          </p>
          <button className="border font-fredoka cursor-pointer border-white rounded-2xl py-4 px-6">
            <p>Get started with InCase</p>
          </button>
        </div>
        <div className="lg:w-[385.81px] w-[249.12px] absolute lg:-translate-x-1/2 lg:left-[54%] left-[25%] bottom-0">
          <img src={thumb} alt="thumb with phone" />
        </div>
        <div className="flex flex-col gap-6 lg:absolute top-20 right-0">
          <SecurityTips
            text="Your files are encrypted before they leave your device"
            title="End to End Encryption"
            custom="-rotate-2"
          />
          <SecurityTips
            text="Fully compliant with NDPR regulations"
            title="Nigerian Data Compliance"
            custom="rotate-2"
          />
          <SecurityTips
            text="Automatic backups ensure you never lose documents"
            title="Regular Backups"
            custom="-rotate-2"
          />
          <SecurityTips
            text="See who accessed your documents and when"
            title="Access Logs"
            custom="rotate-2"
          />
        </div>
      </div>
    </div>
  );
}
