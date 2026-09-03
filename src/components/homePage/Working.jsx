import React from "react";
import {
  FaUserPlus,
  FaFileAlt,
  FaFolderOpen,
  FaDollarSign,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: FaUserPlus,
      title: "Create Account",
      description: "Sign up and verify your mobile number.",
    },
    {
      number: "2",
      icon: FaFileAlt,
      title: "Provide Information",
      description: "Answer simple questions about your income.",
    },
    {
      number: "3",
      icon: FaFolderOpen,
      title: "Review & File",
      description: "We prepare your return for review and approval.",
    },
    {
      number: "4",
      icon: FaDollarSign,
      title: "Process Complete",
      description: "Your tax return is submitted and setup is complete.",
    },
  ];

  const features = [
    {
      icon: FaCheckCircle,
      title: "FBR-approved & 100% compliant",
      description: "We follow all FBR rules and regulations.",
    },
    {
      icon: FaDollarSign,
      title: "Setup complete, guaranteed",
      description: "We ensure your tax setup is fully complete and accurate.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & private",
      description: "Your data is encrypted and confidential.",
    },
    {
      icon: FaHeadset,
      title: "Expert support, always",
      description: "Chat, call or email — we're here to help.",
    },
  ];

  return (
    <section className="bg-[#fff5f5] px-4 py-15 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1   gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="
              flex
              flex-col 
              rounded-xl
              bg-white border border-white
              p-6  hover:border-[#ff7878]
              transition-all
              duration-600
              shadow-xl
            "
          >
            <h2
              className="
                
                text-xl
                font-bold
                text-slate-900
                md:text-2xl
                lg:text-3xl mb-4
                
              "
            >
              How Befiler Works
            </h2>

            <div
              className="
                grid
                grid-cols-1
                gap-2
                mt-2
                lg:grid-cols-4
            
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="
                      relative
                      flex 
                      flex-row
                      items-center
                      gap-3
                      text-left
                      lg:flex-col
                      lg:items-center
                      lg:text-center
                    "
                  >
                    {index < steps.length - 1 && (
                      <div
                        className="
                          absolute
                          left-[58%]
                          top-7
                          hidden
                          w-[85%]
                          border-t-2
                          border-dashed
                          border-red-200

                          lg:block
                        "
                      />
                    )}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        lg:h-11
                        lg:w-11
                        h-7 
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                        text-red-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-red-200
                        hover:shadow-md
                        hover:shadow-red-200
                        xl:h-14 xl:w-14

                      "
                    >
                      <Icon
                        className="
                        h-4 w-4
                         lg:h-6
                         lg:w-6
                        "
                      />
                    </div>

                    <div className="flex-1 lg:flex-none">
                      <h3
                        className="
                          
                          text-sm
                          font-bold
                          leading-snug
                          text-slate-900
                          lg:mt-1
                          lg:text-sm
                        "
                      >
                        {step.number}. {step.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-75
                          text-[12px]
                          leading-relaxed
                          text-slate-500
                          text-sm
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="
              relative
              flex
              flex-col
              
              overflow-hidden
              rounded-xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-xl
              transition-all
              duration-300
              hover:border-[#ff9696]
            "
          >
            <h2
              className="
                mb-3
                text-xl
                font-bold
                text-slate-900
                md:text-2xl
                lg:text-3xl
              "
            >
              Why Choose Befiler?
            </h2>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                pr-0
                lg:pr-32
                xl:pr-40
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        mt-0.5
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                        text-red-600
                        transition
                        duration-300
                        hover:scale-110
                        hover:bg-red-200
                        hover:shadow-md
                        hover:shadow-red-200

                        xl:h-8
                        xl:w-8
                      "
                    >
                      <Icon
                        className=" h-3.5 w-3.5 xl:h-4 xl:w-4 "
                      />
                    </div>

                    <div>
                      <h3
                        className=" text-xs font-bold leading-snug text-slate-900"
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-0.5 text-[11px] leading-relaxed text-slate-500
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-2
                hidden
                h-50
                w-36
                xl:block
                xl:h-64
                xl:w-44 
              "
            >
              <div
                className="
                  absolute
                  bottom-13
                  right-1
                  h-52
                  w-47
                  rounded-full
                  bg-red-100/70
                "
              />

              {/* PERSON */}

              <img
                src="/src/assets/home/person.png"
                alt="Befiler consultant"
                className="
                  absolute
                  bottom-16
                  h-53
                  w-auto
                  scale-120
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
