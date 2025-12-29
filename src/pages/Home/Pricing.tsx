import { useState } from "react";
import PriceCard from "../../components/PriceCard";

export default function Pricing() {
  const [tab, setTab] = useState("monthly");

  return (
    <div className="my-50 mx-auto lg:w-180">
      <div className="text-center">
        <p className="text-[#B7BCC1] text-lg font-poppins leading-[145%] tracking-[-2%]">
          OUR PRICING
        </p>
        <p className="font-medium font-fontspringm text-[32px] text-white">
          Affordable and Valuable
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
              Save 10%
            </span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <PriceCard
            price={tab === "monthly" ? "0" : "0"}
            name="Basic Plan"
            duration={tab === "monthly" ? "month" : "year"}
            text="Get started with essential storage and security to keep your important files safe."
            features={[
              "10mb file upload limit",
              "Basic document management",
              "Standard security features",
              "Email support",
            ]}
          />
          <PriceCard
            popular
            price={tab === "monthly" ? 2500 : 27000}
            name="Premium Plan"
            duration={tab === "monthly" ? "month" : "year"}
            text="More space, stronger protection, and premium features to power your digital vault. "
            features={[
              "50mb file upload limit",
              "Unlimited documents and folders",
              "Advanced security features",
              "Priority email support",
              "Advanced search",
              "Export and backup",
            ]}
          />
          <PriceCard
            price={tab === "monthly" ? 10000 : 108000}
            name="Business Plan"
            duration={tab === "monthly" ? "month" : "year"}
            text="High-capacity storage and enterprise-level tools for teams that manage large volumes of documents."
            features={[
              "All features in premium plan",
              "100gb storage",
              "Advanced encryption",
              "Priority customer support",
            ]}
          />
          <PriceCard
            glow
            name="Notarization Services"
            alternateName="Pay per document"
            duration={tab === "monthly" ? "month" : "year"}
            text="Make your files legally verified with certified digital notarization."
            features={[
              "Maritime Documents — ₦15,000",
              "Certified Ship Document Copy — ₦20,000",
              "Certify ID/Degree Copies — ₦5,000",
              "Witness Contracts/Deeds - ₦5,000",
              "Certify Other Documents - ₦10,000",
              "Translate Document + Notary Stamp (Short) - ₦15,000",
              "Translate Document + Notary Stamp (Long) - ₦15,000  + ₦5,000 per extra page",
              "Extra Documents → Contact for price based on number of document pages",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
