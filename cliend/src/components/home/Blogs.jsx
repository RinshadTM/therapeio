import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What is a Therapeia?",
      answer:
        "Therapeia is an online mental health platform that provides a safe, private and confidential space where people can connect with qualified psychologists and counsellors.",
    },
    {
      question: "What is Online Counselling?",
      answer:
        "Online counselling consists of professional mental health care through online video or audio sessions. Therapeia provides accessible psychological support through online sessions, allowing people to connect with qualified professionals from anywhere.",
    },
    {
      question: "What makes Therapeia special?",
      answer:
        "Therapeia focuses on privacy, confidentiality and easy access to professional mental health support. You can connect with qualified psychologists from the comfort of your own space.",
    },
    {
      question: "How do I know if counselling is right for me?",
      answer:
        "Counselling can be useful when you are experiencing emotional difficulties, relationship problems, stress, anxiety or simply feel that something is not right. A counsellor can help you understand your concerns and explore suitable support.",
    },
    {
      question: "What happens in an online counselling session?",
      answer:
        "During an online counselling session, you can talk privately with your psychologist through video or audio. The session provides a safe space to discuss your concerns and work towards practical ways of managing them.",
    },
    {
      question: "Is online counselling confidential?",
      answer:
        "Yes. Counselling sessions are designed to provide a private and confidential environment. Your psychologist will explain the applicable confidentiality practices and any important limitations during your sessions.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafbf7]">
      {/* TOP BUTTON */}
      <div className="mb-10 text-center">
        <Link
          to="/all-blogs"
          className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl"
        >
          View All <span className="text-primary">Blogs</span>
        </Link>
      </div>

      {/* FAQ SECTION */}
      <div className="mx-auto max-w-6xl">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border-b border-primary/10 transition-all duration-300 ${
                isOpen ? "border-l-4 border-l-primary" : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between px-4 py-4 text-left md:px-5"
              >
                <h3 className="text-lg font-normal text-secondary md:text-xl">
                  {item.question}
                </h3>

                <span className="ml-3 text-2xl text-primary transition-transform duration-300">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-6 text-gray-600 md:px-5 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;