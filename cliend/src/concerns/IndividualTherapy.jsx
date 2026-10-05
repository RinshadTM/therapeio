import React, { useRef, useState } from "react";
import assets from "../assets/assets";
import { therapist } from "../components/data/therapists";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../context/DoctorContext";

import {
  Heart,
  CheckCircle2,
  UserRound,
  Brain,
  ArrowRight,
  Play,
  Pause,
  HandHeart,
} from "lucide-react";

const IndividualTherapy = () => {
  const navigate = useNavigate();
  const { selectDoctor } = useDoctor();

  // ================= VIDEO STATE =================
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Video could not play:", error);
      }
    } else {
      videoRef.current.pause();
    }
  };

  // ================= BOOK THERAPIST =================
  const handleBookNow = (doctor) => {
    selectDoctor(doctor);
    navigate("/appointment");
  };

  return (
    <section className="mt-14 w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <div
        className="
          mx-auto flex max-w-7xl flex-col
          items-center gap-10
          rounded-3xl
          bg-linear-to-br from-emerald-50 via-white to-lime-50
          px-5 py-10
          sm:px-8 sm:py-14
          md:gap-12
          lg:flex-row lg:px-10 lg:py-16
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">

          <p className="mb-3 text-sm font-semibold text-secondary sm:text-base">
            Kerala's Trusted 24/7 Online Counselling Platform
          </p>

          <h1
            className="
              text-3xl font-bold leading-tight text-secondary
             sm:text-5xl lg:text-6xl
            "
          >
            Online Individual
            <br />
            Therapy in
            <br />
            <span className="text-primary">Malayalam</span>
          </h1>

          <p
            className="
              mt-5 max-w-xl
              text-sm leading-6 text-gray-600
              sm:text-base sm:leading-7
            "
          >
            You don't have to deal with everything alone. Connect with
            qualified psychologists and mental health professionals from the
            comfort of your home. Get private, supportive and personalised
            therapy sessions in Malayalam, Tamil and English.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button
              type="button"
              onClick={() => navigate("/doctors")}
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-primary
                px-6 py-3
                text-sm font-semibold text-white
                transition
                hover:bg-gray-800
              "
            >
              Start Therapy
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-primary
                px-6 py-3
                text-sm font-semibold text-primary
                transition
                hover:bg-primary hover:text-white
              "
            >
              Talk to Us
            </button>

          </div>

        </div>


        {/* =====================================================
            RIGHT CIRCULAR VIDEO
        ===================================================== */}
        <div
          className="
            relative flex w-full
            items-center justify-center
            lg:w-1/2
            lg:justify-end
          "
        >

          <div className="relative flex justify-center">

            {/* ================= GLOW ================= */}
            <div
              className="
                absolute
                h-64 w-64
                rounded-full
                bg-rose-100/70
                blur-2xl
                sm:h-80 sm:w-80
                md:h-96 md:w-96
              "
            />

            {/* =================================================
                FLOATING CARD 1
            ================================================= */}
            <div
              className="
                absolute
                -left-4 top-10
                z-20
                hidden
                animate-[float_4s_ease-in-out_infinite]
                rounded-2xl
                bg-white
                px-4 py-3
                shadow-xl
                sm:-left-8
                sm:flex
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-emerald-50
                    text-primary
                  "
                >
                  <HandHeart className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-800">
                    Personal Support
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Focused on you
                  </p>
                </div>

              </div>
            </div>


            {/* =================================================
                MAIN CIRCLE
            ================================================= */}
            <div
              className="
                relative
                h-72 w-72
                sm:h-80 sm:w-80
                md:h-96 md:w-96
                lg:h-112.5 lg:w-111.5
                xl:h-120 xl:w-120
              "
            >

              {/* ================= OUTER CIRCLE ================= */}
              <div
              
              />

              {/* ================= INNER VIDEO ================= */}
              <div
                className="
                  absolute
                  inset-6
                  overflow-hidden
                  bg-black
                  sm:inset-7
                  md:inset-8
                  rounded-2xl
                "
              >

                <video
                  ref={videoRef}
                  src={assets.therapy1}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={toggleVideo}
                  className="
                    h-full
                    w-full
                    cursor-pointer
                    object-center
                    object-cover
                    
                  "
                />

                {/* DARK OVERLAY */}
               

                {/* ================= PLAY / PAUSE ================= */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVideo();
                  }}
                  aria-label={
                    isPlaying ? "Pause video" : "Play video"
                  }
                  className="
                    absolute
                    bottom-4 right-4
                    z-30
                    flex
                    h-11 w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    text-gray-800
                    shadow-xl
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white
                    active:scale-95
                    sm:bottom-5
                    sm:right-5
                    sm:h-12
                    sm:w-12
                  "
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-current" />
                  ) : (
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  )}
                </button>

              </div>

            </div>


            {/* =================================================
                FLOATING CARD 2
            ================================================= */}
            <div
              className="
                absolute
                -bottom-2 right-0
                z-20
                hidden
                animate-[float_5s_ease-in-out_infinite]
                rounded-2xl
                bg-white
                px-4 py-3
                shadow-xl
                sm:flex
                sm:-right-8
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-lime-50
                    text-primary
                  "
                >
                  <Heart className="h-5 w-5 fill-emerald-100" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-800">
                    Emotional Wellbeing
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Your wellbeing matters
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>


      {/* =====================================================
          WHY INDIVIDUAL THERAPY
      ===================================================== */}
      <div
        className="
          mx-auto max-w-7xl
          px-5 py-14
          sm:px-8 sm:py-16
          md:py-20
          lg:px-10
        "
      >

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Individual Therapy
          </p>

          <h2
            className="
              mt-2
              text-3xl font-bold text-secondary
              sm:text-4xl
            "
          >
            A Safe Space to Focus on
            <span className="text-primary"> You</span>
          </h2>

          <p
            className="
              mt-4
              text-sm leading-7 text-gray-600
              sm:text-base
            "
          >
            Individual therapy gives you a private space to understand your
            thoughts, emotions and experiences with the support of a trained
            mental health professional.
          </p>

        </div>


        {/* ================= BENEFIT CARDS ================= */}
        <div
          className="
            mt-10
            grid grid-cols-1 gap-5
            md:mt-12
            md:grid-cols-3
            md:gap-6
          "
        >

          {/* CARD 1 */}
          <div
            className="
              rounded-3xl
              bg-emerald-50
              p-6
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-7
            "
          >

            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-white
                text-primary
                shadow-sm
              "
            >
              <UserRound className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-secondary">
              Personalised Support
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Your therapist focuses on your individual needs, concerns,
              emotions and personal goals.
            </p>

          </div>


          {/* CARD 2 */}
          <div
            className="
              rounded-3xl
              bg-lime-50
              p-6
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-7
            "
          >

            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-white
                text-primary
                shadow-sm
              "
            >
              <Brain className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-secondary">
              Better Understanding
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Understand your thoughts, feelings and behaviours and develop
              healthier ways to handle everyday challenges.
            </p>

          </div>


          {/* CARD 3 */}
          <div
            className="
              rounded-3xl
              bg-green-50
              p-6
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-7
            "
          >

            <div
              className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-white
                text-primary
                shadow-sm
              "
            >
              <Heart className="h-7 w-7 fill-emerald-100" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-secondary">
              Emotional Wellbeing
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Build emotional awareness, confidence and coping skills for a
              healthier and more balanced life.
            </p>

          </div>

        </div>
      </div>


      {/* =====================================================
          COMMON CONCERNS
      ===================================================== */}
      <div className="bg-emerald-50 py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-semibold text-primary">
              HOW WE CAN HELP
            </p>

            <h2
              className="
                mt-2
                text-3xl font-bold text-secondary
                sm:text-4xl
              "
            >
              You Can Talk About
              <span className="text-primary"> Anything</span>
            </h2>

            <p
              className="
                mx-auto mt-4
                max-w-2xl
                text-sm leading-7 text-gray-600
                sm:text-base
              "
            >
              Therapy can help you work through different personal, emotional
              and everyday challenges in a safe and supportive environment.
            </p>

          </div>


          {/* CONCERN CARDS */}
          <div
            className="
              mt-10
              grid grid-cols-1 gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              "Stress & Anxiety",
              "Depression & Low Mood",
              "Relationship Problems",
              "Self Confidence",
              "Career & Life Decisions",
              "Family & Personal Issues",
              "Emotional Challenges",
              "Sleep Related Concerns",
              "Personal Growth",
            ].map((item) => (

              <div
                key={item}
                className="
                  flex items-center gap-3
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:p-5
                "
              >

                <CheckCircle2
                  className="
                    h-5 w-5
                    shrink-0
                    text-primary
                  "
                />

                <p className="text-sm font-medium text-gray-700">
                  {item}
                </p>

              </div>

            ))}

          </div>
        </div>
      </div>


      {/* =====================================================
          THERAPIST SECTION
      ===================================================== */}
      <div className="bg-white py-14 sm:py-16 md:py-20">

        <div className="text-center">

          <p className="text-sm font-semibold text-primary">
            OUR THERAPISTS
          </p>

          <h2
            className="
              mt-2
              px-5
              text-3xl font-bold text-secondary
              sm:text-4xl
            "
          >
            Find the Right Therapist for
            <span className="text-primary"> You</span>
          </h2>

          <p
            className="
              mx-auto mt-4
              max-w-2xl
              px-5
              text-sm leading-7 text-gray-600
              sm:text-base
            "
          >
            Connect with experienced psychologists who can provide personalised
            support based on your needs and goals.
          </p>

        </div>


        {/* THERAPIST CARDS */}
        <div
          className="
            mx-auto mt-10
            grid max-w-7xl
            grid-cols-1 gap-5
            px-5
            sm:grid-cols-2 sm:px-8
            lg:grid-cols-4 lg:px-10
          "
        >

          {therapist
            .filter(
              (doctor) =>
                doctor.post === "Consultant Psychologist"
            )
            .map((doctor, index) => (

              <div
                key={doctor.id}
                className="
                  flex flex-col
                  items-center
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* IMAGE */}
                <div className="rounded-full bg-emerald-50 p-2">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="
                      h-28 w-28
                      rounded-full
                      object-cover
                    "
                  />

                </div>


                {/* NAME */}
                <h2
                  className="
                    mt-4
                    text-center
                    text-lg
                    font-semibold
                    text-gray-800
                  "
                >
                  {doctor.name}
                </h2>


                {/* POST */}
                <p className="mt-1 text-center text-sm text-gray-500">
                  {doctor.post}
                </p>


                {/* SLOT */}
                <div className="mt-4 text-center">

                  <p className="text-xs text-gray-500">
                    Next available slot:
                  </p>

                  <p className="mt-1 text-xs font-bold text-green-600">
                    Today,{" "}
                    {index === 0
                      ? "3:00 PM"
                      : index === 1
                        ? "4:00 PM"
                        : "5:00 PM"}
                  </p>

                </div>


                {/* BOOK BUTTON */}
                <button
                  type="button"
                  onClick={() => handleBookNow(doctor)}
                  className="
                    mt-6
                    w-full
                    rounded-full
                    bg-primary
                    px-4 py-2.5
                    text-xs font-bold text-white
                    transition
                    hover:bg-gray-800
                  "
                >
                  Book Now
                  <span className="ml-1">›</span>
                </button>

              </div>

            ))}

        </div>


        {/* VIEW ALL */}
        <div className="mt-10 text-center">

          <button
            type="button"
            onClick={() => navigate("/doctors")}
            className="
              inline-flex
              items-center
              rounded-full
              border border-primary
              px-6 py-3
              text-sm font-bold text-primary
              transition
              hover:bg-primary
              hover:text-white
            "
          >
            View All Therapists
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

        </div>

      </div>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <div className="bg-lime-50 py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-semibold text-primary">
              SIMPLE & PRIVATE
            </p>

            <h2
              className="
                mt-2
                text-3xl font-bold text-secondary
                sm:text-4xl
              "
            >
              Start Your Therapy Journey
            </h2>

          </div>


          {/* STEPS */}
          <div
            className="
              mt-10
              grid grid-cols-1 gap-8
              sm:grid-cols-2
              md:mt-12
              lg:grid-cols-4
            "
          >

            {[
              {
                number: "01",
                title: "Choose a Therapist",
                text: "Find a therapist who matches your needs.",
              },
              {
                number: "02",
                title: "Select a Slot",
                text: "Choose a convenient time for your session.",
              },
              {
                number: "03",
                title: "Confirm Session",
                text: "Confirm your therapy appointment.",
              },
              {
                number: "04",
                title: "Attend Therapy",
                text: "Join your private online therapy session.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="text-center"
              >

                <div
                  className="
                    mx-auto
                    flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    bg-primary
                    text-lg font-bold
                    text-white
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-4
                    text-lg font-bold
                    text-secondary
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm leading-6
                    text-gray-600
                  "
                >
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </div>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <div className="px-5 py-14 sm:px-8 sm:py-20">

        <div
          className="
            mx-auto
            max-w-5xl
            rounded-3xl
            bg-primary
            px-6 py-10
            text-center
            shadow-lg
            sm:px-10 sm:py-12
          "
        >

          <div
            className="
              mx-auto
              flex h-16 w-16
              items-center justify-center
              rounded-full
              bg-white/20
            "
          >
            <Heart className="h-8 w-8 fill-white text-white" />
          </div>


          <h2
            className="
              mt-5
              text-3xl font-bold
              text-white
              sm:text-4xl
            "
          >
            You Deserve Support
          </h2>


          <p
            className="
              mx-auto mt-4
              max-w-2xl
              text-sm leading-7
              text-emerald-50
              sm:text-base
            "
          >
            Taking care of your mental wellbeing is an important step toward a
            healthier and happier life. Start your journey with a therapist
            who understands you.
          </p>


          <button
            type="button"
            onClick={() => navigate("/doctors")}
            className="
              mt-7
              inline-flex
              items-center
              rounded-full
              bg-white
              px-7 py-3
              text-sm font-bold
              text-primary
              transition
              hover:bg-gray-100
            "
          >
            Find Your Therapist
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default IndividualTherapy;