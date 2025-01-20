import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { SignupPage } from "./pages/SignupPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import { VoucherSection } from "./components/VoucherSection.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer } from "./components/Footer.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";
import { BlogPage } from "./pages/BlogPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { DestinationsPage } from "./pages/DestinationsPage.jsx";
export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="w-full min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <Features />
                  <VoucherSection />
                  <ContactForm />
                </main>
              }
            />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}