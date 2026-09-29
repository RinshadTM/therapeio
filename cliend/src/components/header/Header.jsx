import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import assets from "../../assets/assets";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPhone,
  FaChevronDown,
} from "react-icons/fa";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/doctors", label: "All Doctors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-3 right-3 top-1 z-50 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={assets.logo}
              alt="Theraeia"
              className="w-16 rounded-xl sm:w-24"
            />
          </Link>
          <ul className="hidden items-center gap-5 md:flex lg:gap-7">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap text-sm font-medium transition-all duration-300 ${
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
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-gray-700 transition-all duration-300 hover:text-emerald-600"
              >
                Services
                <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {SERVICES.map((service) => (
                  <Link
                    key={service.to}
                    to={service.to}
                    className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:pl-5 hover:text-emerald-600"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative whitespace-nowrap text-sm font-medium transition-all duration-300 ${
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
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/login"
              className="rounded-3xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition duration-300 hover:border-emerald-500 hover:text-emerald-600"
            >
              Sign in
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-emerald-500"
            >
              Get Started
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 text-lg text-white transition hover:bg-blue-900 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
            <div className="mt-2 overflow-hidden rounded-xl border border-gray-100">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-gray-100 px-5 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-emerald-50 font-semibold text-emerald-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="border-b border-gray-100">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <span>Services</span>

                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      servicesOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="bg-gray-50">
                    {SERVICES.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        className={({ isActive }) =>
                          `block px-8 py-3 text-sm transition ${
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
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
            <div className="mt-3 flex gap-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-center text-sm font-medium text-gray-800"
              >
                Sign in
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-950 px-4 py-2.5 text-sm font-medium text-white"
              >
                Get Started
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="fixed bottom-11 right-6 z-100 flex flex-col gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917561012039"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-animation flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Call */}
        <a
          href="tel:+917561012039"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800"
          aria-label="Call"
        >
          <FaPhone size={23} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
