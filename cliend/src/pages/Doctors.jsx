import React from "react";
import { therapist } from "../components/data/therapists";
import { useDoctor } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();
const { selectDoctor } = useDoctor();

const handleBookNow = (doctor) => {
  selectDoctor(doctor);
  navigate("/appointment");
};
  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Space below navbar */}
      <div className="w-full h-16 bg-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Heading */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-center text-secondary font-bold">
          Find Your Perfect{" "}
          <span className="text-primary font-bold">Therapist</span>
        </p>

        <p className="text-center text-sm sm:text-base p-3 sm:p-4 text-gray-600">
          Breaking Barriers: Connect with Professionals in Your Language
        </p>

        {/* Doctors Grid */}
        <div className="mx-auto mt-6 sm:mt-10 grid w-full gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {therapist.map((doctor, index) => (
            <div
              key={doctor.name}
              className="relative overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top Section */}
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-32 bg-[#c7e8c9]">
                {/* Rating */}
                <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                  <span className="text-sm text-yellow-500">★</span>

                  <span className="text-xs font-semibold text-gray-800">
                    {doctor.rating || "4.8"}
                  </span>
                </div>

                {/* Doctor Image */}
                <div className="absolute left-1/2 top-3 -translate-x-1/2">
                  <div className="h-20 w-20 sm:h-22 sm:w-22 rounded-full border-4 border-white bg-white p-1 shadow-md">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Curve */}
                <div className="absolute -bottom-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-4 sm:px-6 pb-5">
                {/* Doctor Details */}
                <div className="text-center">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    {doctor.name}
                  </h2>

                  <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                    {doctor.post || "Consultant Psychologist"}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    ◉ &nbsp;
                    {doctor.experience || "2+ Years of Experience"}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mt-4">
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Expertise in
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(
                      doctor.expertise || [
                        "Counselling Psychology",
                        "Psychotherapy",
                      ]
                    )
                      .slice(0, 2)
                      .map((item, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700"
                        >
                          {item}
                        </span>
                      ))}

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      +2
                    </span>
                  </div>
                </div>

                {/* Intro Audio */}
                <div className="mt-4">
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Intro audio
                  </p>

                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Play */}
                    <button
                      type="button"
                      className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-green-500 text-green-600 transition hover:bg-green-50"
                    >
                      <span className="ml-1 text-sm sm:text-base">▶</span>
                    </button>

                    {/* Wave */}
                    <div className="flex flex-1 min-w-0 items-center justify-between gap-1">
                      {[
                        18, 28, 12, 35, 22, 40, 18, 30, 15, 38, 24, 32, 16, 27,
                        20,
                      ].map((height, i) => (
                        <span
                          key={i}
                          className="w-0.75 sm:w-0.75 rounded-full bg-gray-300"
                          style={{
                            height: `${height * 0.6}px`,
                          }}
                        />
                      ))}
                    </div>

                    <span className="shrink-0 text-xs text-gray-500">
                      1:05
                    </span>
                  </div>
                </div>

                {/* Booking */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-[#c7e8c9] px-4 py-3">
                  <div>
                    <p className="text-xs text-gray-600">
                      Next available slot:
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-green-600">
                      Today,{" "}
                      {index === 0
                        ? "3:00 PM"
                        : index === 1
                          ? "4:00 PM"
                          : "5:00 PM"}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="w-full sm:w-auto rounded-full bg-black px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-800"
                    onClick={() => handleBookNow(doctor)}
                  >
                    Book Now <span className="ml-1">›</span>
                  </button>
                </div>

                {/* Price */}
                <p className="mt-3 text-sm font-semibold text-gray-600">
                  Starts From ₹1000
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

