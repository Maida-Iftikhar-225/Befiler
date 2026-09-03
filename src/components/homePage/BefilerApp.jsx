import React from "react";
import { FaFileAlt, FaShieldAlt, FaBell, FaHeadset } from "react-icons/fa";

import mobileImage from "/src/assets/home/mobile-app.webp";
import playStoreImage from "/src/assets/home/logos/Playstore.png";

const Befilerapp = () => {
  const features = [
    {
      icon: FaFileAlt,
      title: "File anytime, anywhere",
      description:
        "Submit your tax return from your phone in minutes, no office visit needed.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & encrypted",
      description:
        "Your data is protected with bank-grade encryption at every step.",
    },
    {
      icon: FaBell,
      title: "Instant notifications",
      description:
        "Get real-time alerts on your filing status and refund updates.",
    },
    {
      icon: FaHeadset,
      title: "Expert support",
      description:
        "Our tax experts are available round the clock to guide you.",
    },
  ];

  return (
    <section className="bg-white px-4 py-10 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-visible rounded-[28px] bg-linear-to-r from-[#ffe5e8] to-[#fff0df] px-6 py-8 sm:px-8 sm:py-10 md:px-8 lg:px-10 lg:py-7">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8">
            <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:text-left gap-4 md:gap-6 min-w-0 mx-auto lg:mx-0">
              <div className="flex shrink-0 items-center justify-center">
                <img
                  src={mobileImage}
                  alt="Befiler mobile application"
                  className="relative z-10 w-36 sm:w-32 md:w-36 lg:w-40 object-contain lg:-top-6 lg:scale-120 lg:-mb-12"
                />
              </div>

              <div className="max-w-xs sm:max-w-sm lg:max-w-none min-w-0">
                <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-[28px] xl:text-[31px]">
                  The Befiler App
                </h2>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  File on the go, track your refund, get updates and
                  notifications, manage everything from your phone.
                </p>

                <a
                  href="https://play.google.com/store/apps/details?id=arittek.com.befiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex h-11 items-center gap-2 rounded-md bg-black px-3 text-white shrink-0">
                    <img
                      src={playStoreImage}
                      alt="Google Play"
                      className="h-7 w-7 object-contain"
                    />

                    <div className="leading-none text-left">
                      <p className="text-[8px] uppercase">Get it on</p>

                      <p className="text-base font-semibold">Google Play</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-red-200 text-[#f04116]">
                      <Icon className="h-5 w-5 xl:h-6 xl:w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold leading-tight text-slate-900 xl:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500 xl:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Befilerapp;
