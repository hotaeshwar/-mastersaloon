import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Whychooseus from "./components/Whychooseus";
import Whatwedo from "./components/Whatwedo";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function SplashScreen({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out at 4.2s, fully done at 5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 4200);
    const doneTimer = setTimeout(() => onDone(), 5000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#FFFAFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        transition: "opacity 0.8s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <img
        src="/media/SALON MASTERS LOGO.png"
        alt="Salon Masters"
        style={{
          width: "min(320px, 70vw)",
          height: "auto",
          animation: "splashLogoIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      />

      {/* Animated progress bar */}
      <div
        style={{
          width: "min(220px, 55vw)",
          height: "3px",
          backgroundColor: "rgba(122,158,150,0.2)",
          borderRadius: "99px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#7a9e96",
            borderRadius: "99px",
            animation: "splashBar 4.2s cubic-bezier(0.4, 0, 0.2, 1) both",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          color: "#7a9e96",
          fontSize: "clamp(11px, 2vw, 13px)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontWeight: 600,
          animation: "splashFadeUp 1s 0.4s ease both",
        }}
      >
        Where Style Meets Excellence
      </p>

      <style>{`
        @keyframes splashLogoIn {
          from { opacity: 0; transform: scale(0.82) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes splashBar {
          from { width: 0%;   }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashDone = () => {
    setShowSplash(false);
    // Slight delay so content fades in after splash fully gone
    setTimeout(() => setContentVisible(true), 80);
  };

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <Navbar setPage={setPage} currentPage={page} />

        {page === "home" && (
          <>
            <Hero />
            <AboutUs />
            <Whychooseus />
            <Whatwedo />
            <Services />
            <Packages />
            <Portfolio />
            <ContactUs />
          </>
        )}

        {page !== "home" && (
          <div className="pt-20 sm:pt-24 lg:pt-28">
            {page === "about"     && <AboutUs />}
            {page === "services"  && <Services />}
            {page === "packages"  && <Packages />}
            {page === "portfolio" && <Portfolio />}
            {page === "contact"   && <ContactUs />}
          </div>
        )}

        <Footer setPage={setPage} />
      </div>
    </>
  );
}

export default App;