import { NavLink, useLocation } from "react-router-dom";
import darkLogo from "../assets/logo_dark.png";
import lightLogo from "../assets/logo_light.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={`lg:px-31.75 px-5.25 lg:py-10 py-12 flex items-center justify-between relative z-50 ${
        isHome ? "bg-dark" : "bg-white"
      }`}
    >
      <div className="lg:w-27.5 w-24 lg:h-[24.83px] h-[21.67px]">
        <NavLink to="/">
          <img
            src={isHome ? darkLogo : lightLogo}
            className="w-full h-full object-contain"
            alt="incase logo"
          />
        </NavLink>
      </div>

      <button
        className={`lg:w-30.75 w-26.5 lg:h-12.75 h-10.25 rounded-full border-[0.5px] font-fredoka tracking-[-2%] leading-[120%] ${
          isHome ? "border-white text-white" : "border-dark text-dark"
        }`}
      >
        Contact Us
      </button>
    </div>
  );
}
