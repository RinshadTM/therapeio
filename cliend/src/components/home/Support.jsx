
import React, { useEffect, useRef, useState } from "react";
import { supports } from "../../components/data/therapists";

const Support = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const loopItems = [...supports, ...supports];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      <div
        className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-gray-500 sm:text-sm sm:tracking-[4px]">
          We're Here For You
        </p>

        <h1 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
          How Can We Support You{" "}
          <span className="text-primary">Today?</span>
        </h1>
      </div>

      <div className="relative mt-12 overflow-hidden sm:mt-16">
        <div
          className={`support-slider flex w-max ${
            isVisible ? "support-slider-active" : ""
          }`}
        >
          {loopItems.map((data, index) => (
            <div
              key={`${data.id}-${index}`}
              className="group mr-6 w-36 shrink-0 text-center sm:mr-8 sm:w-40"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-xl sm:h-40 sm:w-40">
                <img
                  src={data.image}
                  alt={data.support}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <p className="mt-4 text-xs font-semibold text-gray-700 transition-colors duration-300 group-hover:text-primary sm:text-sm">
                {data.support}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;

