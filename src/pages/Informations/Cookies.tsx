import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cookieData, cookieLinks, cookies } from "../../utils/constant";
import { useLocation } from "react-router-dom";
import FileUpdateDetails from "../../components/FileUpdateDetails";

export default function Cookies() {
  const location = useLocation();
  const { hash } = location;

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
    <section className="lg:px-31.75 px-5.25 lg:pt-28 pt-10 pb-52.25">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="lg:text-[48px] text-[32px] text-dark font-medium font-fontspringm lg:w-135.25 mx-auto leading-[110%] tracking-[-5%]"
        >
          Cookie Policy
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-dark mt-3.5 font-poppins leading-[150%] tracking-[-2%]"
        >
          For InCase Mobile Application
        </motion.p>
      </motion.div>

      <section className="lg:flex gap-34.5 mt-19.5">
        <div className="hidden w-[20%] lg:flex flex-col text-left items-start gap-4 no-font-symbols">
          {cookieLinks.map((item, i) => (
            <a
              key={i}
              className={`${
                hash.includes(item.id)
                  ? "text-[#227BDA] font-semibold"
                  : "text-dark font-medium"
              } font-fontspringm hover:text-[#468bd6]`}
              href={`#${item.id}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:w-195 w-full">
          <FileUpdateDetails
            updated="January 2026"
            effective="January 2026"
            reviewed="January 2026"
          />

          <section className="mt-7.25 grid gap-10">
            {cookieData?.map((item, i) =>
              i !== 3 ? (
                <div id={item.id} key={i}>
                  {item.name.includes("4") ? (
                    <p className="text-dark font-fontspring font-semibold text-xl mb-3.25">
                      <span className="font-fredoka font-medium">{i + 1}</span>
                      {item.name.slice(2)}
                    </p>
                  ) : (
                    <p className="text-dark font-fontspring font-semibold text-xl mb-3.25">
                      {item.name}
                    </p>
                  )}
                  <p className="text-[#778492] font-poppins mb-3.25">
                    {item.description}
                  </p>
                  <div className="grid gap-3.25">
                    {item.sub.map((item, i) => (
                      <div key={i}>
                        <p className="text-dark font-poppins font-medium">
                          {item.sub}
                        </p>
                        <p className="text-dark font-poppins mb-3.25">
                          {item.name}
                        </p>
                        <ul className="text-[#778492] font-poppins list-disc text-sm lg:text-base translate-x-6 pr-5.25 lg:pr-0">
                          {item.list.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div id={item.id} key={i}>
                  <p className="text-dark font-fontspring font-semibold text-xl mb-3.25">
                    <span className="font-fredoka font-medium">{i + 1}</span>
                    {item.name.slice(1)}
                  </p>
                  <div>
                    <div className="mt-6">
                      <div className="border border-[#778492] rounded-xl overflow-hidden">
                        <table className="w-full border-collapse text-sm">
                          <thead>
                            <tr>
                              <th className="border border-[#778492] px-4 py-3 text-[9px] lg:text-base text-left font-medium text-dark">
                                Cookie Name
                              </th>
                              <th className="border border-[#778492] px-4 py-3 text-[9px] lg:text-base text-left font-medium text-dark">
                                Purpose
                              </th>
                              <th className="border border-[#778492] px-4 py-3 text-[9px] lg:text-base text-left font-medium text-dark">
                                Type
                              </th>
                              <th className="border border-[#778492] px-4 py-3 text-[9px] lg:text-base text-left font-medium text-dark">
                                Duration
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {cookies.map((cookie, index) => (
                              <tr key={index} className="text-[#778492]">
                                <td className="border border-[#778492] px-4 py-3  text-[8px] lg:text-sm">
                                  {cookie.name}
                                </td>
                                <td className="border border-[#778492] px-4 py-3  text-[8px] lg:text-sm">
                                  {cookie.purpose}
                                </td>
                                <td className="border border-[#778492] px-4 py-3  text-[8px] lg:text-sm">
                                  {cookie.type}
                                </td>
                                <td className="border border-[#778492] px-4 py-3  text-[8px] lg:text-sm">
                                  {cookie.duration}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
            <div>
              <p className="text-dark font-poppins font-semibold text-xl mb-3.25">
                Acknowledgement
              </p>
              <p className="text-[#778492] font-poppins text-sm lg:text-base">
                By using the Incase mobile application, you acknowledge that you
                have read, understood, and agree to be bound by these terms of
                service.
              </p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
