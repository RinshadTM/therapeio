import React from "react";
import assets from "../assets/assets";

const About = () => {
  return (
    <div className="pt-20">
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="w-full md:w-1/2 about-left">
          <img
            src={assets.about}
            alt="Online Therapy"
            className="w-full h-87.5 md:h-112.5 object-cover rounded-3xl"
          />
        </div>

        <div
          className="w-full md:w-1/2 about-right"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          <p className="text-primary font-semibold mb-3">ABOUT US</p>

          <h1 className="text-3xl md:text-5xl leading-tight mb-6 font-bold text-secondary">
            Your Mental Health{" "}
            <span className="text-primary font-bold">Matters</span>
          </h1>

          <p className="text-gray-600 leading-7 mb-5">
            We believe that everyone deserves access to professional,
            compassionate and convenient mental health support. Our platform
            makes it easier to connect with qualified therapists from the
            comfort of your own home.
          </p>

          <p className="text-gray-600 leading-7">
            Whether you are dealing with stress, anxiety, relationships,
            personal challenges or simply looking for someone to talk to, we are
            here to help you take the next step toward better mental wellbeing.
          </p>
        </div>
      </section>

      <section className="mb-20">
       
        <div
          className="text-center mb-10 about-up"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <p className="text-primary font-semibold mb-2">WHO WE ARE</p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Professional Support, Wherever You Are
          </h2>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div
            className="p-6 rounded-2xl bg-emerald-50 about-up transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Qualified Therapists</h3>

            <p className="text-gray-600 leading-6">
              Connect with experienced mental health professionals who are
              dedicated to providing compassionate and personalized support.
            </p>
          </div>

         
          <div
            className="p-6 rounded-2xl bg-emerald-50 about-up transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              animationDelay: "0.35s",
              opacity: 0,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Easy Access</h3>

            <p className="text-gray-600 leading-6">
              Find and connect with a therapist online without the need to
              travel. Get support from wherever you feel comfortable.
            </p>
          </div>

          
          <div
            className="p-6 rounded-2xl bg-emerald-50 about-up transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">Private & Secure</h3>

            <p className="text-gray-600 leading-6">
              We design our platform with privacy and security in mind so you
              can focus on your wellbeing.
            </p>
          </div>
        </div>
      </section>

     
      <section
        className="bg-green-50 rounded-3xl p-8 md:p-14 mb-20 text-black about-up"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
        }}
      >
        <div className="max-w-3xl">
          <p className="font-semibold mb-3 text-primary">OUR MISSION</p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Making Mental Health Support More Accessible
          </h2>

          <p className="leading-7 text-secondary">
            Our mission is to make professional mental health support easier to
            access, more convenient and more approachable. We want to create a
            safe space where people can find the right professional support and
            take care of their mental wellbeing without feeling alone.
          </p>
        </div>
      </section>

      
      <section className="mb-20">
       
        <div
          className="text-center mb-10 about-up"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <p className="text-primary font-semibold mb-2">HOW IT WORKS</p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Getting Started Is Simple
          </h2>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
          <div
            className="text-center p-6 hover:bg-green-50 hover:rounded-3xl about-up transition-all duration-300"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
              01
            </div>

            <h3 className="font-semibold text-lg mb-2">Create Account</h3>

            <p className="text-gray-600 text-sm">
              Create your account and tell us a little about yourself.
            </p>
          </div>

          
          <div
            className="text-center p-6 hover:bg-green-50 hover:rounded-3xl about-up transition-all duration-300"
            style={{
              animationDelay: "0.35s",
              opacity: 0,
            }}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
              02
            </div>

            <h3 className="font-semibold text-lg mb-2">Find a Therapist</h3>

            <p className="text-gray-600 text-sm">
              Browse therapists and find someone who matches your needs.
            </p>
          </div>

         
          <div
            className="text-center p-6 hover:bg-green-50 hover:rounded-3xl about-up transition-all duration-300"
            style={{
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
              03
            </div>

            <h3 className="font-semibold text-lg mb-2">Book a Session</h3>

            <p className="text-gray-600 text-sm">
              Select a convenient date and time for your therapy session.
            </p>
          </div>

        
          <div
            className="text-center p-6 hover:bg-green-50 hover:rounded-3xl about-up transition-all duration-300"
            style={{
              animationDelay: "0.65s",
              opacity: 0,
            }}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
              04
            </div>

            <h3 className="font-semibold text-lg mb-2">Start Your Journey</h3>

            <p className="text-gray-600 text-sm">
              Meet your therapist online and begin your mental wellness journey.
            </p>
          </div>
        </div>
      </section>

     
      <section
        className="text-center bg-gray-50 rounded-3xl p-10 md:p-16 about-up"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          You Don't Have to Go Through It Alone
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Take the first step toward better mental wellbeing. Find a therapist
          who is right for you.
        </p>

        <button className="bg-primary text-white px-7 py-3 rounded-full hover:bg-emerald-600 transition hover:scale-105">
          Find a Therapist
        </button>
      </section>
    </div>
  );
};

export default About;
