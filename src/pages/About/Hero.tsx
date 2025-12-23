import aboutphone from "../../assets/aboutphone.png";
import demos from "../../assets/demos.png";
import stacked from "../../assets/stacked.png";
import AppLinks from "../../components/AppLinks";
import ring1 from "../../assets/bluering.png";
import ring2 from "../../assets/pinkring.png";
import { motion } from "framer-motion";
import {
  cardContainer,
  ringFloat,
  textContainer,
  textItem,
} from "../../utils/animation";

export default function Hero() {
  return (
    <section className="lg:h-176.25 h-236.5 px-5.25 bg-white">
      <div className="lg:w-297.5 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-18.25 lg:justify-between items-center align-middle h-full">
        <div className="lg:w-135.5">
          <motion.div variants={textContainer} initial="hidden" animate="show">
            <motion.p
              variants={textItem}
              className="font-fontspringm text-dark leading-[110%] tracking-[-5%] lg:text-[48px] text-[32px] font-semibold"
            >
              We help you keep your important documents safe and easy to find.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-[#778492] mt-5 mb-9.75 text-sm leading-[150%] tracking-[-2%]"
            >
              Life gets busy. Your documents shouldn’t get lost in the process
            </motion.p>
          </motion.div>
          <motion.div
            className="flex"
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.96 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <AppLinks />
          </motion.div>
        </div>
        <div className="lg:w-124.25 grid lg:grid-cols-2 w-full grid-cols-1 gap-3.75 relative">
          <motion.div
            variants={cardContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3.75 z-10 w-full"
          >
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5 }}
              className="bg-[#F9F9F9E5] lg:w-60.25 w-full h-51 grid place-items-center rounded-xl"
            >
              <div className="w-[193.13px] h-[102.27px] overflow-hidden">
                <img className="w-full h-full" src={demos} alt="image" />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 30,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeIn",
                  },
                },
              }}
              initial="hidden"
              animate="show"
              transition={{ delay: 1 }}
              className="bg-[#F9F9F9E5] lg:w-60.25 w-full h-51 grid place-items-center rounded-xl"
            >
              <div className="w-[193.13px] h-[102.27px] overflow-hidden">
                <img className="w-full h-full" src={stacked} alt="image" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 110,
              },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeIn",
                },
              },
            }}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9 }}
            className="bg-[#FFF7F7E5] lg:grid place-items-center rounded-xl z-10 hidden"
          >
            <div className="w-[162.53px] h-84">
              <img src={aboutphone} alt="" />
            </div>
          </motion.div>
          <motion.div
            variants={ringFloat}
            initial="hidden"
            animate={["show", "float"]}
            className="w-26.25 h-26.25 absolute lg:-top-4 -top-12 lg:-left-14"
          >
            <img className="w-full h-full" src={ring1} alt="ring" />
          </motion.div>

          <motion.div
            variants={ringFloat}
            initial="hidden"
            animate={["show", "float"]}
            transition={{ delay: 1.6 }}
            className="w-32 h-32 absolute lg:-right-2 right-4 -bottom-18"
          >
            <img className="w-full h-full" src={ring2} alt="ring" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
