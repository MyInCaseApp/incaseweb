import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import footerbg from "../assets/footer.png";
import footersm from "../assets/bgfooter.png";

export default function Layout() {
  return (
    <div className="relative">
      <Navbar />
      <div className="z-20 relative">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <img
        className="absolute hidden lg:block bottom-0 z-10 object-cover"
        src={footerbg}
        alt="footer-bg"
      />
      <img
        className="absolute lg:hidden bottom-0 z-10 object-cover"
        src={footersm}
        alt="footer-bg"
      />
    </div>
  );
}
