import React from "react";
import { therapist } from "../components/data/therapists";
import { useDoctor } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa6";

const Doctors = () => {
  const navigate = useNavigate();
  const { selectDoctor } = useDoctor();

  const handleBookNow = (doctor) => {
    selectDoctor(doctor);
    navigate("/appointment");
  };
  // Track which doctor's audio is playing
  const [playingId, setPlayingId] = useState(null);

  // Audio refs for each doctor
  const audioRefs = useRef({});

  // Sort therapists by rating and show only 3
  const topTherapists = [...therapist]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);

  // Play / Pause audio
  const handlePlay = (doctor) => {
    const audio = audioRefs.current[doctor.id];

    if (!audio) return;

    // If another audio is playing, pause it
    Object.keys(audioRefs.current).forEach((id) => {
      if (id !== String(doctor.id)) {
        audioRefs.current[id]?.pause();
        audioRefs.current[id].currentTime = 0;
      }
    });

    if (playingId === doctor.id) {
      audio.pause();
      setPlayingId(null);
    } else {
      audio.play();
      setPlayingId(doctor.id);
    }
  };

  // When audio ends
  const handleAudioEnd = (doctorId) => {
    setPlayingId(null);

    const audio = audioRefs.current[doctorId];

    if (audio) {
      audio.currentTime = 0;
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Space below navbar */}
      <div className="w-full h-16 bg-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Heading */}
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center text-secondary font-bold">
            Find Your Perfect{" "}
            <span className="text-primary font-bold">Therapist</span>
          </p>

          <p className="text-center text-sm sm:text-base p-3 sm:p-4 text-gray-600">
            Breaking Barriers: Connect with Professionals in Your Language
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mx-auto mt-6 sm:mt-10 grid w-full gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {therapist.map((doctor, index) => (
            <div
              key={doctor.name}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              className="
                relative overflow-hidden rounded-[30px]
                bg-white shadow-sm
                opacity-0
                animate-[cardEntry_0.7s_ease-out_forwards]
                transition-all duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              {/* Top Section */}
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-32 bg-lime-100 transition-all duration-500">
                {/* Rating */}
                <div
                  className="
                    absolute right-3 sm:right-4 top-3 sm:top-4
                    flex items-center gap-1
                    rounded-full bg-white
                    px-3 py-1 shadow-sm
                    transition-transform duration-300
                    hover:scale-110
                  "
                >
                  <span className="text-sm text-yellow-500">★</span>

                  <span className="text-xs font-semibold text-gray-800">
                    {doctor.rating || "4.8"}
                  </span>
                </div>

                {/* Doctor Image */}
                <div
                  className="
                    absolute left-1/2 top-3
                    -translate-x-1/2
                    transition-all duration-500
                    group-hover:scale-110
                  "
                >
                  <div
                    className="
                      h-20 w-20 sm:h-22 sm:w-22
                      rounded-full
                      border-4 border-white
                      bg-white p-1
                      shadow-md
                      transition-all duration-500
                      hover:scale-110
                      hover:rotate-3
                    "
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="
                        h-full w-full rounded-full object-cover
                        transition-transform duration-500
                        hover:scale-110
                      "
                    />
                  </div>
                </div>

                {/* Curve */}
                <div
                  className="
                    absolute -bottom-10 left-1/2
                    h-20 w-[120%]
                    -translate-x-1/2
                    rounded-[50%]
                    bg-white
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10 px-4 sm:px-6 pb-5">
                {/* Doctor Details */}
                <div className="text-center">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-cyan-500">
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
                          className="
                            rounded-full
                            border border-cyan-200
                            px-3 py-1
                            text-xs text-cyan-700
                            transition-all duration-300
                            hover:bg-cyan-500
                            hover:text-white
                            hover:-translate-y-1
                          "
                        >
                          {item}
                        </span>
                      ))}

                    <span
                      className="
                        rounded-full
                        bg-gray-100
                        px-3 py-1
                        text-xs font-medium text-gray-700
                        transition-all duration-300
                        hover:bg-cyan-500
                        hover:text-white
                      "
                    >
                      +2
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Intro audio
                  </p>

                  {/* Hidden audio element */}
                  {doctor.voice && (
                    <audio
                      ref={(element) => {
                        audioRefs.current[doctor.id] = element;
                      }}
                      src={doctor.voice}
                      onEnded={() => handleAudioEnd(doctor.id)}
                    />
                  )}

                  <div className="flex items-center gap-3">
                    {/* Play Button */}
                    <button
                      type="button"
                      onClick={() => handlePlay(doctor)}
                      disabled={!doctor.voice}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        !doctor.voice
                          ? "cursor-not-allowed border-gray-300 text-gray-300"
                          : "border-black text-black hover:bg-cyan-50"
                      }`}
                    >
                      <span className="text-base">
                        {playingId === doctor.id ? "❚❚" : <FaPlay/>}
                      </span>
                    </button>

                    {/* Waveform */}
                    <div className="flex flex-1 items-center gap-0.75">
                      {[
                        18, 28, 12, 35, 22, 40, 18, 30, 15, 38, 24, 32, 16, 27,
                        20,
                      ].map((height, i) => (
                        <span
                          key={i}
                          className={`w-0.75 rounded-full transition-all ${
                            playingId === doctor.id
                              ? "animate-pulse bg-gray-700"
                              : "bg-gray-300"
                          }`}
                          style={{
                            height: `${height * 0.6}px`,
                            animationDelay: `${i * 80}ms`,
                          }}
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      {playingId === doctor.id ? "Playing" : "Intro"}
                    </span>
                  </div>
                </div>
                {/* Booking */}
                <div
                  className="
                    mt-4
                    flex flex-col gap-3
                    sm:flex-row sm:items-center sm:justify-between
                    rounded-2xl
                    bg-cyan-50
                    border border-cyan-100
                    px-4 py-3
                    transition-all duration-500
                   
                  "
                >
                  <div>
                    <p className="text-xs text-gray-600">
                      Next available slot:
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-cyan-600">
                      Today,{" "}
                      {index === 0
                        ? "3:00 PM"
                        : index === 1
                          ? "4:00 PM"
                          : "5:00 PM"}
                    </p>
                  </div>

                  {/* Book Now */}
                  <button
                    type="button"
                    className="
                      w-full sm:w-auto
                      rounded-full
                      bg-black
                      px-4 py-2
                      text-xs font-bold text-white
                      transition-all duration-300
                      hover:bg-cyan-600
                      hover:scale-105
                      hover:shadow-lg
                      active:scale-95
                    "
                    onClick={() => handleBookNow(doctor)}
                  >
                    Book Now
                    <span className="ml-1 transition-transform duration-300">
                      ›
                    </span>
                  </button>
                </div>

                {/* Price */}
                <p
                  className="
                    mt-3
                    text-sm font-semibold text-gray-600
                    transition-colors duration-300
                    hover:text-cyan-500
                  "
                >
                  Starts From ₹1000
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes cardEntry {
            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Doctors;
