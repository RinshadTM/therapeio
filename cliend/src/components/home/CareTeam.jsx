import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { therapist } from "../../components/data/therapists";
import { useDoctor } from "../../context/DoctorContext";
import { FaPlay } from "react-icons/fa6";


const CareTeam = () => {
  const navigate = useNavigate();
  const { selectDoctor } = useDoctor();

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

  // Book doctor
  const handleBookNow = (doctor) => {
    selectDoctor(doctor);
    navigate("/appointment");
  };

  return (
    <section className="min-h-screen w-full bg-[#f6f8f3] px-4 py-16 sm:px-6 lg:px-10">
      {/* ================= HEADING ================= */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-secondary">
          How can we help you?
        </p>

        <h1 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
          Meet Your <span className="text-primary">Care Team</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Connect with our experienced and compassionate psychologists who are
          here to support you throughout your mental health journey.
        </p>
      </div>

      {/* ================= THERAPIST CARDS ================= */}
      <div className="mx-auto mt-10 grid max-w-362.5 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topTherapists.map((doctor, index) => (
          <div
            key={doctor.id || doctor.name}
            className="relative overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* ================= TOP SECTION ================= */}
            <div className="relative h-31.25 bg-lime-100">
              {/* Rating */}
              <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
                <span className="text-sm text-yellow-500">★</span>

                <span className="text-xs font-semibold text-gray-800">
                  {doctor.rating || "4.8"}
                </span>
              </div>

              {/* Doctor Image */}
              <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
                <div className="h-22.5 w-22.5 rounded-full border-4 border-white bg-white p-1 shadow-md">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Curved Bottom */}
              <div className="absolute -bottom-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />
            </div>

            {/* ================= CARD CONTENT ================= */}
            <div className="relative z-10 px-6 pb-5">
              {/* Doctor Information */}
              <div className="text-center">
                <h2 className="text-lg font-bold text-gray-900">
                  {doctor.name}
                </h2>

                <p className="mt-0.5 text-sm text-gray-500">
                  {doctor.post || "Consultant Psychologist"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  ◉ &nbsp;
                  {doctor.experience || "2+ Years of Experience"}
                </p>
              </div>

              {/* ================= EXPERTISE ================= */}
              <div className="mt-3">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Expertise in
                </p>

                <div className="flex flex-wrap gap-2">
                  {(doctor.expertise || [
                    "Counselling Psychology",
                    "Psychotherapy",
                  ])
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

              {/* ================= INTRO AUDIO ================= */}
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
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      !doctor.voice
                        ? "cursor-not-allowed border-gray-300 text-gray-300"
                        : "border-cyan-500 text-cyan-600 hover:bg-cyan-50"
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
                            ? "animate-pulse bg-cyan-500"
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

              {/* ================= BOOKING ================= */}
              <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#c7e8c9] px-4 py-2.5">
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

                {/* Book Now */}
                <button
                  type="button"
                  onClick={() => handleBookNow(doctor)}
                  className="rounded-full bg-black px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-800"
                >
                  Book Now <span className="ml-1">›</span>
                </button>
              </div>

              {/* ================= PRICE ================= */}
              <p className="mt-3 text-sm font-semibold text-gray-600">
                Starts From ₹1000
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareTeam;
