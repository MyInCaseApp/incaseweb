import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Message from "../../components/Message";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="lg:px-31.75 px-5.25 lg:pt-28 pt-10 pb-52.25 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className=""
      >
        <motion.h2
          variants={itemVariants}
          className="lg:text-[48px] text-[32px] text-dark font-medium font-fontspringm lg:w-135.25 mx-auto leading-[110%] tracking-[-5%]"
        >
          Contact Us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[#778492] mt-3 font-poppins text-sm leading-[150%] tracking-[-2%]"
        >
          <span className="block">
            Need support or want to learn more about InCase?
          </span>
          <span>
            Send us a message and our team will respond within 24–48 hours.
          </span>
        </motion.p>
      </motion.div>

      <div className="lg:w-243.25 w-full mx-auto mt-24 flex lg:flex-row flex-col gap-6">
        <div className="lg:w-[45%] w-full h-fit bg-[#227BDA] py-3.5 text-white rounded-[20px]">
          <div className="text-left p-5.75">
            <p className="font-fontspringm leading-[150%] tracking-[-2%]">
              Email Support
            </p>
            <p className="mt-1.5 mb-3 text-[#D3E5F8] text-sm">
              For general inquiries, technical issues, billing, or feedback.
            </p>
            <a
              className="font-poppins font-medium text-sm leading-[150%] tracking-[-2%] underline"
              href="mailto:customer.care@myincaseapp.com"
            >
              customer.care@myincaseapp.com
            </a>
          </div>
          <div className="w-full h-px bg-[#4E95E1]"></div>
          <div className="text-left p-5.75">
            <p className="font-fontspringm leading-[150%] tracking-[-2%]">
              Business and Partnership
            </p>
            <p className="mt-1.5 mb-3 text-[#D3E5F8] text-sm">
              Let’s work together.
            </p>
            <a
              className="font-poppins font-medium text-sm leading-[150%] tracking-[-2%] underline"
              href="mailto:info@myincaseapp.com"
            >
              info@myincaseapp.com
            </a>
          </div>
          <div className="w-full h-px bg-[#4E95E1]"></div>
          <div className="text-left p-5.75">
            <p className="font-fontspringm leading-[150%] tracking-[-2%]">
              Help Center
            </p>
            <p className="mt-1.5 mb-3 text-[#D3E5F8] text-sm">
              Browse FAQs and guides.
            </p>
            <NavLink
              to="/faqs"
              className="font-poppins font-medium text-sm leading-[150%] tracking-[-2%] underline"
            >
              Visit Help Center
            </NavLink>
          </div>
        </div>
        <div className="lg:w-[55%] w-full py-8 px-5.75 text-left bg-white rounded-[20px]">
          <Message />
        </div>
      </div>
    </section>
  );
}
