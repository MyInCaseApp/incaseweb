import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { formatAmount } from "../utils/helperFunction";
import glowImg from "../assets/glow.png";
import { motion, AnimatePresence } from "framer-motion";

interface PriceCardProps {
  name: string;
  alternateName?: string;
  text: string;
  price?: number | string;
  duration: string;
  features?: string[];
  popular?: boolean;
  glow?: boolean;
}

export default function PriceCard({
  name,
  text,
  price,
  duration,
  features,
  alternateName,
  glow,
  popular,
}: PriceCardProps) {
  return (
    <div className="text-white border border-[#212122] px-6 pt-8 pb-13.5 text-left rounded-xl relative overflow-hidden">
      {glow && (
        <img className="absolute top-0 z-10 left-0" src={glowImg} alt="glow" />
      )}

      <div className="flex items-center justify-between">
        <p className="font-fontspring">{name}</p>
        {popular && (
          <div className="flex items-center bg-[#227BDA] px-2.75 py-[5.5px] rounded-full">
            🔥 <p className="font-poppins text-sm ml-0.75">Popular</p>
          </div>
        )}
      </div>

      {price ? (
        <div className="my-[1.75] relative flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="font-medium text-[32px]"
            >
              ₦ {formatAmount(price)}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              className="text-[#B7BCC1] text-sm"
            >
              per {duration}
            </motion.span>
          </AnimatePresence>
        </div>
      ) : (
        <p className="font-fontspringm flex items-center gap-2 my-3.5 font-medium text-[20px]">
          {alternateName}
        </p>
      )}

      <p className="text-sm font-poppins text-[#B7BCC1] leading-[150%] tracking-[-2%]">
        {text}
      </p>

      <div className="flex items-center gap-2 my-8">
        <div className="h-px w-full bg-[#B7BCC133]" />
        <p className="text-[#B7BCC18C] font-medium font-fontspringm text-xs">
          FEATURES
        </p>
        <div className="h-px w-full bg-[#B7BCC133]" />
      </div>

      <div className="grid gap-3">
        {features?.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-1 font-poppins text-sm leading-[145%] tracking-[-2%] text-[#D3D3D3]"
          >
            <IoCheckmarkCircleOutline color="#A1A4A9" size={20} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
