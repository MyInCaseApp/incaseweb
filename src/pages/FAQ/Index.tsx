import { useState } from "react";
import AllFaqs from "./AllFaqs";

type FaqTab =
  | "getStarted"
  | "security"
  | "notarization"
  | "technical"
  | "account"
  | "legal";

const faqTabs: { label: string; tab: FaqTab }[] = [
  { label: "Get started", tab: "getStarted" },
  { label: "Security and Privacy", tab: "security" },
  { label: "Notarization Services", tab: "notarization" },
  { label: "Technical Questions", tab: "technical" },
  { label: "Account and Billing", tab: "account" },
  { label: "Legal and Compliance", tab: "legal" },
];

export default function FAQ() {
  const [tab, setTab] = useState<FaqTab>("getStarted");

  return (
    <section className="lg:px-31.75 px-5.25 py-28 text-center">
      <h2 className="lg:text-[48px] text-[32px] text-dark font-medium font-fontspringm lg:w-135.25 mx-auto leading-[110%] tracking-[-5%]">
        Frequently Asked Questions
      </h2>

      <div className="my-11.25 font-fontspring text-sm leading-[120%] tracking-[-2%]">
        <div className="hidden lg:flex flex-wrap justify-center gap-1">
          {faqTabs.map(({ label, tab: tabKey }) => (
            <FaqButton
              key={tabKey}
              label={label}
              tab={tabKey}
              active={tab}
              setTab={setTab}
            />
          ))}
        </div>
        <div className="lg:hidden max-w-sm mx-auto">
          <select
            value={tab}
            onChange={(e) => setTab(e.target.value as FaqTab)}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-dark font-medium focus:outline-none focus:ring-2 focus:ring-[#227BDA]"
          >
            {faqTabs.map(({ label, tab }) => (
              <option key={tab} value={tab}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-fit mx-auto mb-62.25">
        <AllFaqs activeTab={tab} />
      </div>
    </section>
  );
}

type FaqButtonProps = {
  label: string;
  tab: FaqTab;
  active: FaqTab;
  setTab: (tab: FaqTab) => void;
};

function FaqButton({ label, tab, active, setTab }: FaqButtonProps) {
  return (
    <button
      onClick={() => setTab(tab)}
      className={`px-4.5 py-3 cursor-pointer transition-colors ${
        active === tab
          ? "text-[#227BDA] font-semibold"
          : "font-medium text-dark hover:text-[#227BDA]"
      }`}
    >
      {label}
    </button>
  );
}
