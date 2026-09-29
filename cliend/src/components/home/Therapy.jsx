import React, { useState } from "react";
import therapyImage from "../../assets/Home5.png";

const Therapy = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Find the Right Psychologist",
      description:
        "Browse licensed psychologists based on your concerns, language preference, and therapy goals.",
    },
    {
      number: "2",
      title: "Book Your Slot",
      description:
        "Choose a convenient time slot and book your online therapy session in just a few clicks.",
    },
    {
      number: "3",
      title: "Confirm Your Session",
      description:
        "Review your appointment details and securely confirm your therapy session with your psychologist.",
    },
    {
      number: "4",
      title: "Attend Therapy Session",
      description:
        "Join your private online therapy session from the comfort and safety of your own space.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f9f3] px-4 py-6 sm:px-6 lg:px-10">
      
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-primary">
          Simple & Secure
        </p>

        <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Your Journey to Therapy
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          Start your online therapy journey with Theraeia in a few simple
          steps. Connect with experienced psychologists through secure,
          confidential, and convenient online counselling sessions.
        </p>
      </div>

      {/* Main */}
      <div className="mx-auto mt-14 grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                  isActive
                    ? "border-teal-200 bg-teal-50 shadow-md"
                    : "border-gray-100 bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">

                  {/* Number */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold transition-all duration-300 sm:h-12 sm:w-12 sm:text-lg ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h2
                        className={`text-base font-bold sm:text-lg ${
                          isActive ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {step.title}
                      </h2>

                      {/* Arrow */}
                      <span
                        className={`text-xl transition-transform duration-300 ${
                          isActive
                            ? "rotate-180 text-primary"
                            : "text-gray-400"
                        }`}
                      >
                        ↓
                      </span>
                    </div>

                    {/* Dropdown Content */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <img
              src={therapyImage}
              alt="Online therapy"
              className="h-[400px] w-full rounded-3xl object-cover shadow-lg transition-all duration-500 sm:h-[480px]"
            />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7">
              <p className="text-sm font-semibold text-gray-800">
                Your mental health matters
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Safe • Private • Confidential
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Therapy;