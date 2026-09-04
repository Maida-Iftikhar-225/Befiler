import React from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Hero from "/src/assets/home/heroimg.png";

const HeroSection = () => {
  return (
    <section className=" bg-[#fcfcfc]  min-h-screen pt-16 pb-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 pt-4 pb-8 sm:pt-8 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-semibold border border-red-100 shadow-sm">
              <span>Tax Season 2026 is Here! 🎉</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[41px] font-black text-slate-900 leading-tight">
              Pakistan's easiest way to file your{" "}
              <span className="text-red-500">tax return</span>
            </h1>

            <div className="block lg:hidden w-full my-2">
              <img
                src={Hero}
                alt="Befiler tax filing platform interface"
                className="w-full max-w-lg mx-auto object-contain scale-105"
              />
            </div>

            {/* 4. Paragraph Text */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-xl">
              File accurately, stay compliant and get the maximum refund with
              help from expert tax consultants. Fast, secure & hassle-free.
            </p>

            {/* 5. Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-b from-red-600 to-red-700 text-white font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-red-700/60 transition-all duration-200 hover:-translate-y-0.5">
                Start Filing Now
                <FaArrowRight />
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 hover:text-green-700 bg-white border border-gray-300 hover:border-[#25d366] text-slate-800 hover:bg-slate-50 font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#92ffad] hover:-translate-y-0.5">
                <FaWhatsapp className="h-5 w-5 text-green-700" />
                Chat on WhatsApp
              </button>
            </div>

            {/* 6. Ratings & Trust Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-4 w-full border-t border-slate-100 lg:border-t-0">
              <div className="flex items-center gap-2 hover:-translate-y-0.5 transition duration-300">
                <div className="bg-red-100 flex items-center justify-center rounded-lg h-7 w-7 sm:h-11 sm:w-11 shrink-0">
                  <IoMdDownload className="h-5 w-5 sm:h-7 sm:w-7 text-red-500" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-base font-bold text-slate-900">
                    1M+
                  </p>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium">
                    Downloads
                  </p>
                </div>
              </div>

              <div className="h-7 w-px bg-slate-200 shrink-0" />

              <div className="flex items-center gap-2 hover:-translate-y-0.5 transition duration-300">
                <GoStarFill className="h-5 w-5 sm:h-8 sm:w-8 text-amber-400 shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-base font-bold text-slate-900">
                    4.5/5
                  </p>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
                    Avg Rating
                  </p>
                </div>
              </div>

              <div className="h-7 w-px bg-slate-200 shrink-0" />

              <div className="flex items-center gap-2 hover:-translate-y-0.5 transition duration-300">
                <IoShieldCheckmarkSharp className="h-5 w-5 sm:h-8 sm:w-8 text-red-600 shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] sm:text-base font-bold text-slate-800">
                    Trusted by
                  </p>
                  <p className="text-[9px] sm:text-xs text-slate-500 whitespace-nowrap">
                    taxpayers in PK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image (DESKTOP: Increased max-w to 2xl & scale-110) */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <img
              src={Hero}
              alt="Befiler tax filing platform interface"
              className="object-contain w-full max-w-5xl scale-105 origin-center transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* 7. Bottom Feature Cards Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:-mt-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex items-center gap-3 border-b border-gray-100 sm:border-r lg:border-b-0 p-3.5 transition-colors duration-300 hover:bg-red-50/50">
            <div className="shrink-0 hover:scale-115 transition duration-300 rounded-full bg-red-100 p-2 text-red-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                Secure & Encrypted
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Bank-level security
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 lg:border-r lg:border-b-0 p-3.5 transition-colors duration-300 hover:bg-red-50/50">
            <div className="shrink-0 hover:scale-115 transition duration-300 rounded-full bg-red-100 p-2 text-red-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                Expert Consultants
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Certified team
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 sm:border-r lg:border-b-0 p-3.5 transition-colors duration-300 hover:bg-red-50/50">
            <div className="shrink-0 rounded-full hover:scale-115 transition duration-300 bg-red-100 p-2 text-red-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                Fast Turnaround
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Max refund focus
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 lg:border-r lg:border-b-0 p-3.5 transition-colors duration-300 hover:bg-red-50/50">
            <div className="shrink-0 hover:scale-115 transition duration-300 rounded-full bg-red-100 p-2 text-red-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                FBR Compliant
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                100% compliant
              </p>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-center justify-start gap-3 p-3.5 transition-colors duration-300 hover:bg-red-50/50">
            <div className="shrink-0 rounded-full hover:scale-115 transition duration-300 bg-red-100 p-2 text-red-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                RAAST Payment
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Safe & direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
