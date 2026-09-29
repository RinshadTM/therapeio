import React from "react";
import assets from "../../assets/assets";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-b border-gray-400 bg-cyan-500">
      <div className="flex flex-col justify-between gap-10 py-8 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-2/5">
          <img
            className="mb-4 w-32 sm:w-36 "
            src={assets.logo}
            alt="Logo"
          />

          <p className="max-w-xl leading-6 text-white p-4">
            Your trusted space for mental health support, professional
            counselling, and personal wellbeing.
          </p>

          <div className="mt-5 flex items-center gap-3 ml-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10 lg:w-3/5 lg:gap-14">
          <div>
            <h3 className="mb-4 font-semibold text-white">ABOUT</h3>

            <div className="flex flex-col gap-2 text-sm text-white">
              <p className="cursor-pointer hover:text-emerald-500">
                Home
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                About Us
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Contact
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">MENU</h3>

            <div className="flex flex-col gap-2 text-sm text-white">
              <p className="cursor-pointer hover:text-emerald-500">
                Home
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                About Us
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Contact
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">SERVICE</h3>

            <div className="flex flex-col gap-2 text-sm text-white">
              <p className="cursor-pointer hover:text-emerald-500">
                Doctors
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Appointment
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Medical Care
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">CONCERNS</h3>

            <div className="flex flex-col gap-2 text-sm text-white">
              <p className="cursor-pointer hover:text-emerald-500">
                Help Center
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Support
              </p>
              <p className="cursor-pointer hover:text-emerald-500">
                Privacy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-white sm:text-sm">
        © 2026 MindWorld Mental Health Clinic and Training Centre. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;