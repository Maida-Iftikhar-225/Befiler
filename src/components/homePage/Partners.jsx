import React from "react";

import Engro from "/src/assets/home/logos/engro.png";
import ICMAP from "/src/assets/home/logos/ICMAP.png";
import UBL from "/src/assets/home/logos/ubl.png";
import Allied from "/src/assets/home/logos/Allied.png";
import KCCI from "/src/assets/home/logos/kcci.png";
import PSEB from "/src/assets/home/logos/pseb.png";
import Telenor from "/src/assets/home/logos/telenor.png";
import JSBank from "/src/assets/home/logos/js.png";
import ACCA from "/src/assets/home/logos/acca.png";
import Meezan from "/src/assets/home/logos/meezan.png";
import SECP from "/src/assets/home/logos/secp.png";
import PASHA from "/src/assets/home/logos/pasha.png";
import NCC from "/src/assets/home/logos/ncc.png";
import HBL from "/src/assets/home/logos/hbl.png";
import AWS from "/src/assets/home/logos/aws.png";

import BankAlfalah from "/src/assets/home/logos/bank-alfalah.png";
import EasyPaisa from "/src/assets/home/logos/easypaisa.png";
import AskariBank from "/src/assets/home/logos/askari-bank.svg";
import BankAlHabib from "/src/assets/home/logos/alhabib-limited.svg";
const PartnersSection = () => {
  const partners = [
  {
    name: "Engro",
    image: Engro,
  },
  {
    name: "ICMAP",
    image: ICMAP,
  },
  {
    name: "UBL",
    image: UBL,
  },
  {
    name: "Allied Bank",
    image: Allied,
  },
  {
    name: "KCCI",
    image: KCCI,
  },
  {
    name: "PEB",
    image: PSEB,
  },
  {
    name: "Telenor",
    image: Telenor,
  },
  {
    name: "JS Bank",
    image: JSBank,
  },
  {
    name: "ACCA",
    image: ACCA,
  },
  {
    name: "Meezan Bank",
    image: Meezan,
  },
  {
    name: "FBR",
    image: SECP,
  },
  {
    name: "P@SHA",
    image: PASHA,
  },
  {
    name: "NC",
    image: NCC,
  },
  {
    name: "HBL",
    image: HBL,
  },
  {
    name: "AWS",
    image: AWS,
  },
];

  const banks = [
  {
    name: "Bank Alfalah",
    image: BankAlfalah,
  },
  {
    name: "HBL",
    image: HBL,
  },
  {
    name: "Allied Bank",
    image: Allied,
  },
  {
    name: "Meezan Bank",
    image: Meezan,
  },
  {
    name: "UBL",
    image: UBL,
  },
  {
    name: "EasyPaisa",
    image: EasyPaisa,
  },
  {
    name: "Askari-Bank",
    image: AskariBank,
  },
  {
    name: "Bank Al Habib",
    image: BankAlHabib,
  },
];

  return (
    <section className="bg-[#fdfdfd] px-4 py-10 font-sans sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className=" rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-center text-lg font-bold text-slate-900">
              Our Partners & Collaborators
            </h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm " >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-9 max-w-[65%] object-contain hover:scale-110 transition-all duration-300 "
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-center text-lg font-bold text-slate-900">
              Now easily file tax return from your favourite banks
            </h2>

           <div  className="grid grid-cols-3 gap-3 ">
            {banks.slice(0,3) .map((bank)  => (

                <div
                  key={bank.name}
                  className="flex h-16 items-center justify-center rounded-xl hover:-translate-y-1 transition-all duration-300  border border-gray-200 bg-white shadow-sm " >
                  <img
                    src={bank.image}
                    alt={bank.name}
                    className="max-h-9 max-w-[65%] object-contain "
                  />
                </div>

            ))}

           </div>

            <div  className="mt-3 grid grid-cols-2 gap-3 ">
            {banks.slice(3,5) .map((bank)  => (

                <div
                  key={bank.name}
                  className="flex h-24 items-center justify-center rounded-xl hover:-translate-y-1 transition-all duration-300  border border-gray-200 bg-white shadow-sm " >
                  <img
                    src={bank.image}
                    alt={bank.name}
                    className="max-h-9 max-w-[80%] object-contain "
                  />
                </div>

            ))}

           </div>

            <div className="my-3 flex justify-center">

              <span
                className="
                  rounded-lg border border-gray-200
                  bg-gray-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-gray-600
                "
              >
                Coming Soon
              </span>

            </div>

             <div  className="grid grid-cols-2 gap-3 ">
            {banks.slice(5,7) .map((bank)  => (

                <div
                  key={bank.name}
                  className="flex h-16 items-center justify-center rounded-xl hover:-translate-y-1 transition-all duration-300  border border-gray-200 bg-white shadow-sm " >
                  <img
                    src={bank.image}
                    alt={bank.name}
                    className="max-h-9 max-w-[65%] object-contain "
                  />
                </div>

            ))}

           </div>

            <div  className="mt-3 grid grid-cols-1 gap-3 ">
            {banks.slice(7,8) .map((bank)  => (

                <div
                  key={bank.name}
                  className="flex h-20 items-center justify-center rounded-xl hover:-translate-y-1 transition-all duration-300  border border-gray-200 bg-white shadow-sm " >
                  <img
                    src={bank.image}
                    alt={bank.name}
                    className="max-h-12 max-w-[80%] object-contain "
                  />
                </div>

            ))}

           </div>

            

          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;
