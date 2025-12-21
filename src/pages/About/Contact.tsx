import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import person5 from "../../assets/person5.jpg";
import person6 from "../../assets/person6.jpg";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="lg:w-230.75 w-full mx-auto flex flex-col lg:flex-row px-5.25 gap-18.75 items-center">
      <div className="w-94 h-71.75 flex gap-2">
        <div className="flex flex-col gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person1}
              alt="person"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person2}
              alt="person"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-2 mt-9">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person3}
              alt="person"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person4}
              alt="person"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person5}
              alt="person"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={person6}
              alt="person"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex-1">
        <p className="font-fontspringm font-medium text-[32px] text-dark leading-[120%] tracking-[-5%]">
          Who is a Contact Person?
        </p>
        <p className="font-poppins text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-base">
          A contact person is someone you trust, like a friend or family member,
          who we can reach out to if you haven’t used the InCase app for a long
          time.
        </p>
        <p className="font-poppins text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-base">
          If we notice unusual inactivity, we’ll check in with them just to make
          sure everything is okay. It’s an extra layer of safety for you and
          your stored information.
        </p>
        <p className="font-poppins text-[#778492] leading-[140%] tracking-[-5%] mt-3 text-base">
          All data remain encrypted from end to end.
        </p>
      </div>
    </section>
  );
}
