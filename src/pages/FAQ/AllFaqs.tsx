import { useState } from "react";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { FaqsBank } from "../../utils/constant";

type FaqTab =
  | "getStarted"
  | "security"
  | "notarization"
  | "technical"
  | "account"
  | "business"
  | "troubleshooting"
  | "legal";

type AllFaqsProps = {
  activeTab: FaqTab;
};

export default function AllFaqs({ activeTab }: AllFaqsProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const faqs = FaqsBank[activeTab];

  const toggle = (i: number) => {
    setSelected((prev) => (prev === i ? null : i));
  };

  return (
    <div className="grid gap-3 lg:w-222.5 w-full mx-auto">
      {faqs.map((item, i) => {
        const isOpen = selected === i;

        return (
          <motion.div
            key={item.id}
            layout
            className={`w-full rounded-xl lg:py-5 py-4 lg:px-5 px-4 cursor-pointer text-left ${
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
    </div>
  );
}
