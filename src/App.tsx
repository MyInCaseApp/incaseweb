import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScollToTop";
import Layout from "./layout/Layout";
import BackToTop from "./components/BackToTop";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home/Index";
import FAQ from "./pages/FAQ/Index";
import Contact from "./pages/Contact/Index";
import About from "./pages/About/Index";
import DataRetention from "./pages/Informations/Index";
import PrivacyPolicy from "./pages/Informations/Policy";
import Terms from "./pages/Informations/Terms";
import Cookies from "./pages/Informations/Cookies";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/faqs"
            element={
              <PageWrapper>
                <FAQ />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/contact-us"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/data-retention-policy"
            element={
              <PageWrapper>
                <DataRetention />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/privacy-policy"
            element={
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/terms-of-service"
            element={
              <PageWrapper>
                <Terms />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/cookies-policy"
            element={
              <PageWrapper>
                <Cookies />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
