import { motion } from "framer-motion";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

export default function AppLinks() {
  return (
    <div className="flex items-center justify-center gap-2">
      <motion.a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[130.6px] h-[38.7px] block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          className="w-full h-full object-contain"
          src={google}
          alt="google"
        />
      </motion.a>

      <motion.a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[116.09px] h-[38.7px] block"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img className="w-full h-full object-contain" src={apple} alt="apple" />
      </motion.a>
    </div>
  );
}
