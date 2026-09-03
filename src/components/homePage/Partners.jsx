import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Engro",
      image: "/src/assets/home/logos/engro.png",
    },
    { name: "ICMAP", image: "/src/assets/home/logos/ICMAP.png" },
    {
      name: "UBL",
      image: "/src/assets/home/logos/ubl.png",
    },
    {
      name: "Allied Bank",
      image: "/src/assets/home/logos/Allied.png",
    },
    {
      name: "KCCI",
      image: "/src/assets/home/logos/kcci.png",
    },
    {
      name: "PEB",
      image: "/src/assets/home/logos/pseb.png",
    },
    {
      name: "Telenor",
      image: "/src/assets/home/logos/telenor.png",
    },
    {
      name: "JS Bank",
      image: "/src/assets/home/logos/js.png",
    },
    {
      name: "ACCA",
      image: "/src/assets/home/logos/acca.png",
    },
    {
      name: "Meezan Bank",
      image: "/src/assets/home/logos/meezan.png",
    },
    {
      name: "FBR",
      image: "/src/assets/home/logos/secp.png",
    },
    {
      name: "P@SHA",
      image: "/src/assets/home/logos/pasha.png",
    },
    {
      name: "NC",
      image: "/src/assets/home/logos/ncc.png",
    },
    {
      name: "HBL",
      image: "/src/assets/home/logos/hbl.png",
    },
    {
      name: "AWS",
      image: "/src/assets/home/logos/aws.png",
    },
  ];

  const banks = [
    {
      name: "Bank Alfalah",
      image: "/src/assets/home/logos/bank-alfalah.png",
    },
    {
      name: "HBL",
      image: "/src/assets/home/logos/hbl.png",
    },
   
    {
      name: "Allied Bank",
      image: "/src/assets/home/logos/Allied.png",
    },
    {
      name: "Meezan Bank",
      image: "/src/assets/home/logos/meezan.png",
    },
    
     {
      name: "UBL",
      image: "/src/assets/home/logos/ubl.png",
    },
    {
      name: "EasyPaisa",
      image: "/src/assets/home/logos/easypaisa.png",
    },
    {
      name: "Askari-Bank",
      image: "/src/assets/home/logos/askari-bank.svg",
    },
    {
      name: "Bank Al Habib",
      image: "/src/assets/home/logos/alhabib-limited.svg",
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
