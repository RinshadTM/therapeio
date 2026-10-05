import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Lock,
  MessageCircle,
  UserRound,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Play,
  Pause,
  UsersRound,
  HandHeart,
} from "lucide-react";
import video from "../assets/videos/sexual.mp4";

const CoupleTherapy = () => {
  const navigate = useNavigate();

  // Video controls
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const concerns = [
    "Communication difficulties",
    "Frequent arguments & conflicts",
    "Trust & emotional connection",
    "Intimacy & relationship concerns",
    "Life changes & adjustment",
    "Understanding each other's needs",
  ];

  const benefits = [
    {
      icon: MessageCircle,
      title: "Better Communication",
      text: "Learn healthier ways to express your thoughts, feelings, needs, and expectations.",
    },
    {
      icon: Heart,
      title: "Stronger Connection",
      text: "Create more understanding, emotional closeness, and connection in your relationship.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Supportive",
      text: "Have difficult conversations in a respectful environment guided by a professional.",
    },
    {
      icon: UsersRound,
      title: "Understand Each Other",
      text: "Explore different perspectives and develop a deeper understanding of your partner.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: UserRound,
      title: "Choose a Therapist",
      text: "Find a professional who understands relationship and couples counselling.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Choose Your Time",
      text: "Select a convenient session time that works for both of you.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Start Together",
      text: "Begin an open and guided conversation in a comfortable environment.",
    },
  ];

  const faqs = [
    {
      question: "What is couple therapy?",
      answer:
        "Couple therapy provides a supportive space where partners can work through communication difficulties, conflicts, emotional concerns, and relationship challenges with professional guidance.",
    },
    {
      question: "Do we need to have serious relationship problems?",
      answer:
        "No. Couples can seek support at any stage of their relationship, including when they simply want to improve communication, connection, or understanding.",
    },
    {
      question: "Can we attend therapy online?",
      answer:
        "Yes. Online sessions can provide a convenient and private way for couples to speak with a professional from a comfortable environment.",
    },
    {
      question: "What if my partner does not want therapy?",
      answer:
        "You can still speak with a professional individually to understand your situation and explore healthy ways to approach relationship concerns.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-[#f7faf7] text-gray-800">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-5 py-16 sm:px-8 lg:px-12">
        {/* Background decorations */}
        <div className="absolute -left-32 top-20 h-72 w-72 animate-pulse rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="animate-[fadeUp_0.8s_ease-out]">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-semibold text-emerald-600 shadow-sm sm:text-sm">
              <Heart className="h-4 w-4 fill-emerald-500" />
              Couple Therapy & Relationship Support
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
              Grow Together,
              <br />
              <span className="text-primary">Feel Connected</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Every relationship has its challenges. Talk with a professional
              who can help you and your partner communicate better, understand
              each other, and build a healthier connection.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/doctors")}
                className="group flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Find a Therapist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Talk to Us
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500 sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Private Sessions
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Professional Guidance
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Judgment-Free Space
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VIDEO
          ====================================================== */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-rose-100/70 blur-2xl sm:h-96 sm:w-96" />

            <div className="relative h-80 w-80 sm:h-105 sm:w-105 lg:h-120 lg:w-120">
              {/* Main circle */}
              

              {/* Inner circle */}
              <div className="absolute inset-8 overflow-hidden rounded-2xl shadow-inner sm:inset-10">
                {/* Video */}
                <video
                  ref={videoRef}
                  src={video}
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={toggleVideo}
                  className="h-full w-full cursor-pointer object-cover"
                />

                {/* Dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/20" />

            

                {/* Play / Pause Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVideo();
                  }}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="
          absolute
          bottom-5
          right-5
          z-30
          flex
          h-12
          w-12
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
        "
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-current" />
                  ) : (
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  )}
                </button>
              </div>

              {/* =====================================================
        FLOATING CARD 1
    ====================================================== */}
              <div className="absolute -left-2 top-12 animate-[float_4s_ease-in-out_infinite] rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50">
                    <HandHeart className="h-5 w-5 text-rose-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      Stronger Together
                    </p>

                    <p className="text-[10px] text-gray-500">
                      Understanding matters
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
        FLOATING CARD 2
    ====================================================== */}
              <div className="absolute -bottom-2 right-0 animate-[float_5s_ease-in-out_infinite] rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50">
                    <MessageCircle className="h-5 w-5 text-purple-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      Open Conversation
                    </p>

                    <p className="text-[10px] text-gray-500">
                      Listen & understand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONCERNS SECTION
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-primary">
              Every Relationship Is Different
            </p>

            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
              Support For Your{" "}
              <span className="text-primary">Relationship</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Whether you're facing challenges or simply want to grow closer,
              professional guidance can help you move forward together.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((concern, index) => (
              <div
                key={concern}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#f8fbf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg"
                style={{
                  animation: `fadeUp 0.6s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p className="text-sm font-medium text-gray-700">{concern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS SECTION
      ====================================================== */}
      <section className="bg-[#f6f9f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[4px] text-primary">
                Why Choose Couple Therapy?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
                A Space To
                <span className="text-primary"> Understand Each Other</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Relationships can become difficult when communication breaks
                down. Couple therapy can create a safe environment where both
                partners can express themselves, listen, and work toward
                healthier patterns together.
              </p>

              <button
                type="button"
                onClick={() => navigate("/doctors")}
                className="mt-7 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
              >
                Explore Therapists
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      animation: `fadeUp 0.7s ease-out ${index * 120}ms both`,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-gray-800">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-primary">
              Start Your Journey Together
            </p>

            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
              How It <span className="text-primary">Works</span>
            </h2>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-gray-100 bg-[#f9fbf9] p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="mt-5 block text-xs font-bold tracking-[3px] text-primary">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                    {step.text}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-5 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-emerald-200 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-primary px-6 py-14 text-center sm:px-10 lg:px-20">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-rose-300/20 blur-2xl" />

          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
              <Heart className="h-7 w-7 fill-white" />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Your Relationship Deserves Care
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Take a step toward better communication, deeper understanding, and
              a healthier relationship together.
            </p>

            <button
              type="button"
              onClick={() => navigate("/doctors")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Find Your Therapist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-primary">
              <HelpCircle className="h-6 w-6" />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-[#f9fbf9] p-5 transition-all duration-300 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-800">
                  {faq.question}

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </main>
  );
};

export default CoupleTherapy;
