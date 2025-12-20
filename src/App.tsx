import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScollToTop";
import Layout from "./layout/Layout";
import BackToTop from "./components/BackToTop";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home/Index";
import FAQ from "./pages/FAQ/Index";

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
