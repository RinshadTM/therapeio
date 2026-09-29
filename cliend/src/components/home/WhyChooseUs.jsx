import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import bg1 from "../../assets/background.jpg";
import btrfly from "../../assets/butterfly1.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <section className=" mt-4 p-4 overflow-hidden">
        <div className="flex gap-4">
          <div className="w-full p-2">

            <p className="text-secondary text-3xl font-bold">
              Why choose <span className="text-primary"> THERAPEIA</span>
            </p>

            <p className="p-4 font-semibold leading-7 text-gray-600">
              THERAPEIA provides a private and confidential space to discuss
              what you are experiencing with a qualified psychologist.
              Whether you are facing a specific concern or simply feel that
              something is not right, you can explore the support that may be
              appropriate for you.
            </p>

          </div>

         
          <div className="w-full p-2 rounded-2xl">

            <div className="flex gap-2">

             
              <div
                className="
                  animated-card
                  relative
                  overflow-hidden
                  w-full
                  p-8
                  min-h-42
                  rounded-2xl
                  bg-cover
                  bg-center
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                "
                style={{
                  backgroundImage: `url(${btrfly})`,
                }}
              >

                
                <div className="absolute inset-0 bg-white/65"></div>


                <div className="relative z-10">

                  <p className="font-bold text-2xl text-primary">
                    300+
                  </p>

                  <p className="font-serif text-xl">
                    Sessions
                  </p>

                  <Link to="/sessions">
                    <FaRegArrowAltCircleRight
                      className="
                        text-5xl
                        text-primary
                        hover:scale-110
                        hover:rotate-12
                        transition
                        pt-4
                      "
                    />
                  </Link>

                </div>
              </div>


              
              <div
                className="
                  relative
                  overflow-hidden
                  w-full
                  p-4
                  rounded-2xl
                  bg-cover
                  bg-center
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                "
                style={{
                  backgroundImage: `url(${bg1})`,
                }}
              >
                <div className="absolute inset-0 bg-white/65"></div>

                <div className="relative z-10">

                  <p className="font-bold text-2xl text-primary">
                    15+
                  </p>

                  <p className="font-serif text-xl">
                    Highly qualified psychologists
                  </p>

                  <Link to="/sessions">
                    <FaRegArrowAltCircleRight
                      className="
                        text-5xl
                        text-primary
                        hover:scale-110
                        hover:rotate-12
                        transition
                        pt-4
                      "
                    />
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </div>


       
        <div className="flex mt-3">

          
          <div className="w-1/2 px-2 flex items-center">

            <button
              className="
                bg-primary
                text-white
                px-7
                py-3
                rounded-full
                hover:bg-emerald-600
                hover:scale-105
                transition
                duration-300
              "
            >
              Book a session
            </button>

          </div>


          <div className="w-full flex gap-3 px-3">

            <div
              className="
                relative
                overflow-hidden
                w-full
                p-4
                rounded-2xl
                bg-cover
                bg-center
                transition-all
                duration-500
                hover:scale-[1.02]
              "
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            >

              <div className="absolute inset-0 bg-white/65"></div>

              <div className="relative z-10">

                <p className="font-bold text-2xl text-primary">
                  100%
                </p>

                <p className="font-serif text-xl">
                  Confidential sessions
                </p>

                <Link to="/sessions">
                  <FaRegArrowAltCircleRight
                    className="
                      text-5xl
                      text-primary
                      hover:scale-110
                      hover:rotate-12
                      transition
                      pt-4
                    "
                  />
                </Link>

              </div>
            </div>


            
            <div
              className="
                relative
                overflow-hidden
                w-full
                p-4
                rounded-2xl
                bg-cover
                bg-center
                transition-all
                duration-500
                hover:scale-[1.02]
              "
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            >

              <div className="absolute inset-0 bg-white/65"></div>

              <div className="relative z-10">

                <p className="font-bold text-2xl text-primary">
                  4+
                </p>

                <p className="font-serif text-xl">
                  Languages
                </p>

                <Link to="/sessions">
                  <FaRegArrowAltCircleRight
                    className="
                      text-5xl
                      text-primary
                      hover:scale-110
                      hover:rotate-12
                      transition
                      pt-4
                    "
                  />
                </Link>

              </div>
            </div>


           
            <div
              className="
                animated-card
                relative
                overflow-hidden
                w-full
                p-4
                rounded-2xl
                bg-cover
                bg-center
                transition-all
                duration-500
                hover:scale-[1.02]
              "
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            >

              <div className="absolute inset-0 bg-white/65"></div>

              <div className="relative z-10">

                <p className="font-bold text-2xl text-primary">
                  24x7
                </p>

                <p className="font-serif text-xl">
                  Online support
                </p>

                <Link to="/sessions">
                  <FaRegArrowAltCircleRight
                    className="
                      text-5xl
                      text-primary
                      hover:scale-110
                      hover:rotate-12
                      transition
                      pt-4
                    "
                  />
                </Link>

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default WhyChooseUs;