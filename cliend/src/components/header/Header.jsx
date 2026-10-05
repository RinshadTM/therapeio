import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import assets from "../../assets/assets";

import {
  FaArrowRight,
  FaChevronDown,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const NAV_LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/doctors",
    label: "All Doctors",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

const SERVICES = [
  {
    to: "/service/sexual-health",
    label: "Sexual Health",
  },
  {
    to: "/service/individual-therapy",
    label: "Individual Therapy",
  },
  {
    to: "/service/couple-therapy",
    label: "Couple Therapy",
  },
];

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* --------------------------------
     Scroll Effect
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     Scroll To Top On Route Change
  -------------------------------- */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Close mobile menu after navigation
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  /* --------------------------------
     Mobile Menu Toggle
  -------------------------------- */
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  /* --------------------------------
     Close Mobile Menu
  -------------------------------- */
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* --------------------------------
     Check Services Active
  -------------------------------- */
  const isServiceActive = SERVICES.some((service) =>
    location.pathname.startsWith(service.to)
  );

  return (
    <>
      {/* ============================
          NAVBAR
      ============================ */}
      <header
        className={`fixed left-3 right-3 top-2 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-xl backdrop-blur-md"
            : "bg-white shadow-lg"
        }`}
      >
        <nav className="mx-auto max-w-6xl">
          <div className="flex h-17 items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* ============================
                LOGO
            ============================ */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center"
            >
              <img
                src={assets.logo}
                alt="Theraeia"
                className="w-16 rounded-xl sm:w-20 lg:w-24"
              />
            </Link>

            {/* ============================
                DESKTOP NAVIGATION
            ============================ */}
            <div className="hidden items-center md:flex">

              <ul className="flex items-center gap-5 lg:gap-7">

                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `relative whitespace-nowrap py-6 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "font-semibold text-emerald-600"
                            : "text-gray-700 hover:text-emerald-600"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}

                          {isActive && (
                            <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}

                {/* ============================
                    SERVICES DROPDOWN
                ============================ */}
                <li className="group relative">

                  <button
                    type="button"
                    className={`flex items-center gap-1 whitespace-nowrap py-6 text-sm font-medium transition-all duration-300 ${
                      isServiceActive
                        ? "font-semibold text-emerald-600"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    Services

                    <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />

                    {isServiceActive && (
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                    )}
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                    {SERVICES.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-sm transition-all duration-200 ${
                            isActive
                              ? "bg-emerald-50 font-semibold text-emerald-600"
                              : "text-gray-700 hover:bg-emerald-50 hover:pl-5 hover:text-emerald-600"
                          }`
                        }
                      >
                        {service.label}
                      </NavLink>
                    ))}

                  </div>
                </li>

                {/* Contact */}
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `relative whitespace-nowrap py-6 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "font-semibold text-emerald-600"
                          : "text-gray-700 hover:text-emerald-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Contact

                        {isActive && (
                          <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

              </ul>
            </div>

            {/* ============================
                DESKTOP ACTION BUTTONS
            ============================ */}
            <div className="hidden items-center gap-2 md:flex">

              <Link
                to="/login"
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600"
              >
                Sign in
              </Link>

              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-600"
              >
                Get Started

                <FaArrowRight className="text-xs" />
              </Link>

            </div>

            {/* ============================
                MOBILE MENU BUTTON
            ============================ */}
            <button
              type="button"
              onClick={handleMenuToggle}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-lg text-white transition-all duration-300 hover:bg-blue-900 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* ============================
              MOBILE MENU
          ============================ */}
          {menuOpen && (
            <div className="border-t border-gray-100 bg-white px-4 pb-5 md:hidden">

              <div className="mt-3 overflow-hidden rounded-xl border border-gray-100">

                {/* Mobile Links */}
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block border-b border-gray-100 px-5 py-3.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-emerald-50 font-semibold text-emerald-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* ============================
                    MOBILE SERVICES
                ============================ */}
                <div className="border-b border-gray-100">

                  <button
                    type="button"
                    onClick={() =>
                      setServicesOpen((prev) => !prev)
                    }
                    className={`flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-medium transition-all ${
                      isServiceActive
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>Services</span>

                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        servicesOpen
                          ? "rotate-180 text-emerald-600"
                          : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="bg-gray-50">

                      {SERVICES.map((service) => (
                        <NavLink
                          key={service.to}
                          to={service.to}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `block px-8 py-3 text-sm transition-all ${
                              isActive
                                ? "bg-emerald-50 font-semibold text-emerald-600"
                                : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                            }`
                          }
                        >
                          {service.label}
                        </NavLink>
                      ))}

                    </div>
                  )}

                </div>

                {/* Contact */}
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-5 py-3.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-emerald-50 font-semibold text-emerald-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  Contact
                </NavLink>

              </div>

              {/* ============================
                  MOBILE ACTIONS
              ============================ */}
              <div className="mt-4 flex gap-2">

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-center text-sm font-medium text-gray-800 transition hover:border-emerald-500 hover:text-emerald-600"
                >
                  Sign in
                </Link>

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
                >
                  Get Started

                  <FaArrowRight className="text-xs" />
                </Link>

              </div>

            </div>
          )}
        </nav>
      </header>

      {/* ============================
          FLOATING CONTACT BUTTONS
      ============================ */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">

        {/* WhatsApp */}
        <a
          href="https://wa.me/917561012039"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="whatsapp-animation flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 sm:h-14 sm:w-14"
        >
          <FaWhatsapp className="text-2xl sm:text-[28px]" />
        </a>

        {/* Phone */}
        <a
          href="tel:+917561012039"
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 sm:h-14 sm:w-14"
        >
          <FaPhone className="text-lg sm:text-[23px]" />
        </a>

      </div>
    </>
  );
};

export default Navbar;