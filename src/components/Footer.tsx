import { BsFillShieldLockFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import AppLinks from "./AppLinks";

export default function Footer() {
  const date = new Date();

  const navLinks = [
    {
      id: 0,
      name: "About us",
      link: "/about",
    },
    {
      id: 1,
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 2,
      name: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      id: 3,
      name: "Cookie Policy",
      link: "/cookies-policy",
    },
    {
      id: 4,
      name: "Data Retention Policy",
      link: "/data-retention-policy",
    },
    {
      id: 5,
      name: "FAQs",
      link: "/faqs",
    },
    {
      id: 5,
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <footer className="lg:py-10 py-12">
      <div className="lg:px-31.75 px-5.25 flex items-center justify-center gap-7">
        <div className="flex items-center gap-1.5">
          <BsFillShieldLockFill color="#227BDA" size={12} />
          <p className="text-sm text-dark font-poppins">Bank-Level Security</p>
        </div>
        <div className="flex items-center gap-1.5">
          <BsFillShieldLockFill color="#227BDA" size={12} />
          <p className="text-sm text-dark font-poppins">Legally Compliant</p>
        </div>
      </div>
      <div className="px-5.25 mt-3 mb-4 text-center">
        <p className="lg:text-[32px] text-2xl leading-[120%] tracking-[-5%] mx-auto font-medium font-fontspringm font-dark">
          Your Car Papers, Certificates and other{" "}
          <br className="hidden md:block" /> Legal Documents Deserve Maximum
          Protection <br className="hidden md:block" />
          Just InCase
        </p>
      </div>
      <p className="px-5.25 font-poppins text-sm text-[#778492] text-center lg:w-93.5 mx-auto leading-[120%] tracking-[-5%]">
        Join thousands of Nigerians who trust InCase with their most important
        documents
      </p>
      <div className="lg:px-31.75 px-5.25 lg:my-8 my-10">
        <AppLinks />
      </div>

      <div className="px-5.25 flex items-center flex-wrap justify-center lg:gap-x-6 gap-x-3.5 lg:gap-y-0 gap-y-5">
        {navLinks?.map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            className="font-poppins text-[#778492] hover:text-[#333] transition-all duration-200 ease-in font-medium text-sm leading-[120%] tracking-[-5%]"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="w-full h-px bg-[#77849229] lg:my-8 my-10"></div>
      <div className="lg:px-31.75 px-5.25">
        <p className="font-poppins text-[#778492] text-center text-sm leading-[120%] tracking-[-5%]">
          © {date?.getFullYear()} InCase Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
