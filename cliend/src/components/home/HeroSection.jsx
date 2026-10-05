import React, { useEffect, useState } from "react";
import bg1 from "../../assets/home5.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [therapists, setTherapists] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const navigate =useNavigate()

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const intervalTime = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      setTherapists(Math.floor(500 * progress));
      setSessions(Math.floor(10000 * progress));
      setSatisfaction(Math.floor(98 * progress));

      if (currentStep >= steps) {
        clearInterval(interval);

        setTherapists(500);
        setSessions(10000);
        setSatisfaction(98);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full max-h-screen flex flex-col md:flex-row bg-amber-50 bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="w-full md:w-full min-h-125 flex items-center justify-center px-6 sm:px-10 lg:px-20 py-16 md:py-0 bg-white/0">
        <div className="max-w-xl">
          {/* Small heading */}
          <p
            className="text-secondary font-semibold text-lg mb-3 animate-text-slide"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Your Healing Partner
          </p>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight animate-text-slide"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            A space for  <span className="text-cyan-500">healing</span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-gray-600 font-semibold text-base sm:text-lg leading-relaxed animate-text-slide"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Take the first step toward a healthier and happier you. Connect with
            trusted therapists and find the support you deserve in a safe and
            comfortable environment.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 mt-8 animate-text-slide"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <button className="px-6 py-3 rounded-full bg-cyan-500pm bg-primary  text-white font-semibold hover:bg-cyan-300 transition" onClick={()=>{
              navigate("/doctors")
            }}>
              Find a Therapist
            </button>

            <button className="px-6 py-3 rounded-full border border-primary text-black font-semibold  hover:text-primary transition"
            onClick={()=>{
              navigate("/about")
            }}>
              Learn More
            </button>
          </div>

          {/* Statistics */}
          <div
            className="flex flex-wrap gap-4 mt-10 animate-text-slide"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <div className="px-5 py-3 rounded-3xl shadow-sm bg-white/40 backdrop-blur-sm">
              <p className="text-2xl font-bold text-gray-800">{therapists}+</p>
              <p className="text-sm text-gray-500">Therapists</p>
            </div>

            <div className="px-5 py-3 rounded-3xl shadow-sm bg-white/40 backdrop-blur-sm">
              <p className="text-2xl font-bold text-gray-800">
                {sessions >= 1000
                  ? `${Math.floor(sessions / 1000)}K+`
                  : sessions}
              </p>
              <p className="text-sm text-gray-500">Sessions</p>
            </div>

            <div className="px-5 py-3 rounded-3xl shadow-sm bg-white/40 backdrop-blur-sm">
              <p className="text-2xl font-bold text-gray-800">
                {satisfaction}%
              </p>
              <p className="text-sm text-gray-500">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 min-h-100 md:min-h-125 relative">
        <div className="absolute inset-0" />
        <div className="absolute bottom-6 right-6 bg-yellow-50/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <p className="text-emerald-600 font-semibold">✦ Safe & Private</p>

          <p className="text-secondary text-sm mt-1">
            A comfortable space for your journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
