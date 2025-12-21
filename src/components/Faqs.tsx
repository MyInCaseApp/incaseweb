import { useState } from "react";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function Faqs() {
  const [selected, setSelected] = useState<number | null>(null);

  const faqs = [
    {
      id: 0,
      questions: "What is InCase?",
      answers:
        "InCase is a secure digital vault for storing your important documents, notes, videos, and audio files. Everything is encrypted and accessible only to you",
    },
    {
      id: 1,
      questions: "Is the Free Forever Plan really free?",
      answers: "lorem ipsum...",
    },
    {
      id: 2,
      questions: "When do I need a subscription?",
      answers: "lorem ipsum...",
    },
    {
      id: 3,
      questions: "How secure is my data on InCase?",
      answers: "lorem ipsum...",
    },
    {
      id: 4,
      questions: "Can I notarize videos and audio files?",
      answers: "lorem ipsum...",
    },
    {
      id: 5,
      questions: "What types of documents can I store?",
      answers: "lorem ipsum...",
    },
    {
      id: 6,
      questions: "Can I access my vault on multiple devices?",
      answers: "lorem ipsum...",
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
