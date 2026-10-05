import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aromal KS",
    text: "Akhilu mam at MindTouch counsellors is a very friendly and caring personality. Her support during my difficult time is exceptional. I truly recommend her for anyone who needs a mentor during the stressful period. MindTouch is the best team of psychologists in Kochi.",
  },
  {
    name: "Saurav Dev",
    text: "I consulted Akhilu mam at MindTouch in Kochi during one of my worst times in life. They helped me to understand myself which actually helped me to deal with my crisis in a better way. Especially it helps me to get clarity in thoughts. Thank you everyone including Sreelakshmi, the coordinator who helps me in arranging my sessions.",
  },
  {
    name: "Anjali Menon",
    text: "MindTouch has been a wonderful support during a difficult phase of my life. The counselling sessions helped me understand my emotions better and gave me the confidence to move forward.",
  },
  {
    name: "Rahul Kumar",
    text: "The team at MindTouch is very professional, supportive and understanding. I felt comfortable from the very first session and would definitely recommend their counselling services.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="w-full  overflow-hidden bg-[#fffaf3] px-4.5 py-12.5sm:px-6.25 sm:py-15 lg:px-7.5 lg:py-17.5">

      <div className="mx-auto w-full max-w-273.75">

        {/* Heading */}
        <div className="mb-7.5 text-center sm:mb-10.5">
          <h2 className="text-[27px] font-medium leading-[1.35] tracking-[0.2px] text-[#202b38] sm:text-[34px] lg:text-[40px] lg:leading-[1.3]">
            Don't just take our word for it!
            <br className="hidden sm:block" />
            Here's what our clients have to say:
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6.25 lg:grid-cols-2">

          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${current}-${index}`}
              className="animate-testimonial-enter"
            >

              {/* Card */}
              <div className="min-h-0 border border-[#e6e6e6] bg-white px-5.5 py-6.25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)] sm:min-h-87.5 sm:px-7 sm:py-7 lg:min-h-80 lg:px-8 lg:py-8">

                {/* Stars */}
                <div className="mb-4 flex gap-0.5 sm:mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-[22px] leading-none text-[#ffc34d] sm:text-[25px]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-[15px] font-normal leading-[1.6] text-[#4c4c4c] sm:text-[17px] sm:leading-[1.55] lg:text-[18px]">
                  {testimonial.text}
                </p>
              </div>

              {/* Name */}
              <h3 className="mt-2.5 text-[21px] font-normal text-[#414141] sm:mt-3 sm:text-[25px]">
                {testimonial.name}
              </h3>
            </div>
          ))}

        </div>

        {/* Pagination Dots */}
        <div className="mt-8.75 flex items-center justify-center gap-4.5 sm:mt-12 sm:gap6.25">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "scale-110 bg-[#4e80e8]"
                  : "bg-[#a9c0ed] hover:scale-125"
              }`}
            />
          ))}
        </div>

        {/* Get In Touch Button */}
        <div className="mt-8.75 flex justify-center sm:mt-12">

          <a
            href="#contact"
            className="flex h-10.5 min-w-42.5 items-center justify-between rounded-full bg-primary px-5 text-[17px] font-semibold text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,116,145,0.25)] sm:h-15.5 sm:min-w-50 sm:px-6.25 sm:text-[20px]"
          >
            <span>Get In Touch</span>

            
          </a>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;