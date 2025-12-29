import { useState } from "react";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Faqs() {
  const [selected, setSelected] = useState<number | null>(null);

  const faqs = [
    {
      id: 0,
      questions: "What is InCase?",
      answers:
        "Incase is a secure digital vault that lets you store, organize, and legally notarize your important documents using your smartphone. Think of it as a bank vault for your digital documents.",
      list: [],
    },
    {
      id: 1,
      questions: "Can I afford InCase?",
      answers:
        "Yes! Our Basic Plan is a one-off payment of ___ naira giving you access to 2GB storage and standard security features. Payments are made through a secure channels.",
      list: [],
    },
    {
      id: 2,
      questions: "What types of documents can I store?",
      answers: "You can store:",
      list: [
        "Educational certificates: WAEC certificates, university degrees, transcripts",
        "Property documents: C of O, survey plans, deed documents",
        "Personal documents: Birth certificates, marriage certificates, wills",
        "Vehicle documents: Car papers, insurance documents",
        "Business documents: Contracts, agreements, registration papers",
        "Media files: Videos, audio recordings, photos",
      ],
    },
    {
      id: 3,
      questions: "How do I get started?",
      answers: "The entire setup process takes less than 5 minutes.",
      list: [
        "Download the Incase app from App Store or Google Play",
        "Create your free account",
        "Start uploading your important documents",
        "Get documents notarized if needed",
      ],
    },
  ];

  const toggle = (i: number) => {
    setSelected((prev) => (prev === i ? null : i));
  };

  return (
    <div className="grid gap-3 lg:w-182.5 w-full mx-auto">
      {faqs.map((item, i) => {
        const isOpen = selected === i;

        return (
          <motion.div
            key={item.id}
            layout
            className={`w-full rounded-xl lg:py-5 py-4 lg:px-5 px-4 cursor-pointer ${
              isOpen ? "bg-[#227BDA] text-white" : "bg-white text-dark"
            }`}
            transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggle(i)}
            >
              <h3 className="text-base font-fontspringl">{item.questions}</h3>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 90 }}
                transition={{ duration: 0.25 }}
                className="grid place-items-center"
              >
                {isOpen ? (
                  <LuCircleMinus size={22} />
                ) : (
                  <LuCirclePlus size={22} />
                )}
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 leading-[150%] tracking-[-2%] text-sm font-poppins text-white">
                    {item.answers}
                  </p>
                  <ul className="list-disc pl-5">
                    {item.list?.map((list, i) => (
                      <li className="" key={i}>
                        {list}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      <div>
        <NavLink
          to="/faqs"
          className="flex items-center w-fit mx-auto font-fredoka text-[#227BDA] mt-11"
        >
          View more FAQs
        </NavLink>
      </div>
    </div>
  );
}
