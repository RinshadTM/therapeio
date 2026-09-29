import React from "react";
import assets from "../assets/assets";
import { therapist } from "../components/data/therapists";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";

const IndividualTherapy = () => {
     const navigate = useNavigate();
const { selectDoctor } = useDoctor();

const handleBookNow = (doctor) => {
  selectDoctor(doctor);
  navigate("/appointment");
};
  return (
    <section className="mt-14 w-full  ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 md:gap-12 lg:flex-row lg:px-10 lg:py-16 bg-lime-50">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <p className="mb-3 text-sm font-semibold text-secondary sm:text-base">
            Kerala’s Trusted 24/7 Online Counselling Platform
          </p>

          <h1 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl md:text-5xl">
            Online Individual
            <br />
            Therapyin
            <br />
            <span className="text-primary"> Malayalam</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-secondary sm:text-base sm:leading-7">
            You don’t have to figure it out alone. Private, flexible sessions
            with certified psychologists, RCI Licensed Clinical Psychologists,
            Psychiatrists and available in Malayalam, Tamil and English.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                ✓
              </span>

              <p className="text-sm text-gray-700 sm:text-base">
                Expert therapists — RCI licensed & M.Phil certified
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                ✓
              </span>

              <p className="text-sm text-gray-700 sm:text-base">
                Affordable sessions from ₹1,000
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                ✓
              </span>

              <p className="text-sm text-gray-700 sm:text-base">
                100% confidential — 24X7 Support
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                ✓
              </span>

              <p className="text-sm text-gray-700 sm:text-base">
                Available in Malayalam, Tamil & English
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="mt-7 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-500 hover:shadow-lg"
          >
            Start Therapy
          </button>
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-black p-3 shadow-lg sm:p-4">
            <div className="h-80 w-full overflow-hidden rounded-2xl bg-gray-200 sm:h-96 md:h-112.5">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={assets.therapy1} type="video/mp4" />
              </video>
            </div>

            <div className="absolute bottom-6 left-6 rounded-xl bg-white/5 px-4 py-2 shadow-md sm:bottom-8 sm:left-8">
              <p className="text-xs font-semibold text-white sm:text-sm">
                Safe & Private
              </p>
              <p className="text-[10px] text-gray-500 sm:text-xs">
                Your comfort comes first
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center mt-6 bg-lime-50">
          <p className="text-center text-4xl font-bold text-secondary p-6">
            Find the Right Therapist for <span className="text-primary"> You </span>
          </p>
          <p className=" pt-4">
            Certified Malayalam-speaking psychologists and Tamil-speaking
            psychologists, available online across India and the world.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-lime-50">
            {therapist
              .filter((doctor) => doctor.post === "Consultant Psychologist")
              .map((doctor,index) => (
                <div
                  key={doctor.id}
                  className="flex flex-col items-center rounded-2xl  p-5 shadow-sm m-6 bg-white"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-30 w-30 rounded-full object-cover bg-lime-100 "
                  />

                  <h2 className="mt-3 text-lg font-semibold text-gray-800">
                    {doctor.name}
                  </h2>

                  <p className="text-sm text-gray-500">{doctor.post}</p>
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
                    className="w-full sm:w-auto rounded-full bg-primary mt-6 px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-800"
                    onClick={() => handleBookNow(doctor)}
                  >
                    Book Now <span className="ml-1">›</span>
                  </button>
                </div>
              ))}
          </div>
          <div className="p-5">
            <button className="bg-lime-50 p-5 border hover:border-none text-3xl rounded-3xl font-bold hover:sha">View all Therapist</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTherapy;
